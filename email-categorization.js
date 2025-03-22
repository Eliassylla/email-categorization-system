/**
 * Script principal de catégorisation d'emails
 * Utilise la base de données de mots-clés pour catégoriser automatiquement les emails
 * Compatible avec l'API Gmail
 */
// Importer la base de données des mots-clés
const EMAIL_CATEGORIES = require('./keyword-database.js');
/**
 * Classe principale de catégorisation d'emails
 */
class EmailCategorizer {
  constructor() {
    this.categories = EMAIL_CATEGORIES;
    this.emailStats = {
      total: 0,
      categorized: 0,
      uncategorized: 0,
      byCategory: {}
    };
  }
  /**
   * Catégorise un email en fonction de son contenu
   * @param {Object} email - Objet email avec subject, content, sender, etc.
   * @returns {Object} Catégorisation avec score de confiance
   */
  categorizeEmail(email) {
    // Extraction des données de l'email
    const { subject, content, sender, date, labels } = email;
    
    // Texte complet pour l'analyse (sujet + contenu)
    const fullText = `${subject || ''} ${content || ''}`.toLowerCase();
    
    // Résultats de catégorisation
    const results = {
      bestMatch: null,
      category: null,
      subcategory: null,
      confidence: 0,
      matches: {}
    };
    
    // Parcourir toutes les catégories principales
    for (const category in this.categories) {
      // Initialiser le score pour cette catégorie
      results.matches[category] = {
        score: 0,
        bestSubcategory: null,
        bestSubcategoryScore: 0,
        matchedKeywords: []
      };
      
      // Analyser les sous-catégories
      for (const subcategory in this.categories[category]) {
        let subcategoryScore = 0;
        const matchedKeywords = [];
        
        // Analyser les mots-clés de la sous-catégorie
        const keywords = this.categories[category][subcategory].keywords || [];
        const senders = this.categories[category][subcategory].senders || [];
        
        // Vérifier les correspondances de mots-clés
        for (const keyword of keywords) {
          if (fullText.includes(keyword.toLowerCase())) {
            subcategoryScore += 1;
            matchedKeywords.push(keyword);
          }
        }
        
        // Vérifier les correspondances d'expéditeurs (bonus important)
        if (sender) {
          const senderLower = sender.toLowerCase();
          for (const knownSender of senders) {
            if (senderLower.includes(knownSender.toLowerCase())) {
              subcategoryScore += 3; // Bonus pour correspondance d'expéditeur
              matchedKeywords.push(`Expéditeur: ${knownSender}`);
            }
          }
        }
        
        // Mettre à jour le meilleur score de sous-catégorie
        if (subcategoryScore > results.matches[category].bestSubcategoryScore) {
          results.matches[category].bestSubcategoryScore = subcategoryScore;
          results.matches[category].bestSubcategory = subcategory;
          results.matches[category].matchedKeywords = matchedKeywords;
        }
        
        // Ajouter au score total de la catégorie
        results.matches[category].score += subcategoryScore;
      }
      
      // Mettre à jour la meilleure correspondance globale
      if (results.matches[category].score > results.confidence) {
        results.confidence = results.matches[category].score;
        results.category = category;
        results.subcategory = results.matches[category].bestSubcategory;
        results.bestMatch = `${category}/${results.matches[category].bestSubcategory}`;
      }
    }
    
    // Mettre à jour les statistiques
    this.emailStats.total++;
    if (results.confidence > 0) {
      this.emailStats.categorized++;
      // Incrémenter les stats par catégorie
      if (!this.emailStats.byCategory[results.category]) {
        this.emailStats.byCategory[results.category] = 0;
      }
      this.emailStats.byCategory[results.category]++;
    } else {
      this.emailStats.uncategorized++;
      results.category = 'UNCATEGORIZED';
      results.subcategory = 'GENERAL';
      results.bestMatch = 'UNCATEGORIZED/GENERAL';
    }
    
    return results;
  }
  
  /**
   * Applique les labels Gmail en fonction de la catégorisation
   * @param {Object} emailData - Données de l'email et sa catégorisation
   * @param {Object} gmailApi - Instance de l'API Gmail
   * @returns {Promise<Object>} Résultat de l'opération
   */
  async applyLabels(emailData, gmailApi) {
    const { email, categorization } = emailData;
    const { category, subcategory } = categorization;
    
    try {
      // Créer les labels si nécessaire
      const categoryLabel = await this.ensureLabel(category, gmailApi);
      const subcategoryLabel = await this.ensureLabel(`${category}/${subcategory}`, gmailApi);
      
      // Appliquer les labels
      await gmailApi.users.messages.modify({
        userId: 'me',
        id: email.id,
        resource: {
          addLabelIds: [categoryLabel.id, subcategoryLabel.id]
        }
      });
      
      return {
        success: true,
        message: `Email catégorisé: ${category}/${subcategory}`,
        labels: [categoryLabel, subcategoryLabel]
      };
    } catch (error) {
      return {
        success: false,
        message: `Erreur lors de l'application des labels: ${error.message}`,
        error
      };
    }
  }
  
  /**
   * S'assure qu'un label existe et le crée si nécessaire
   * @param {string} labelName - Nom du label à vérifier/créer
   * @param {Object} gmailApi - Instance de l'API Gmail
   * @returns {Promise<Object>} Le label existant ou nouvellement créé
   */
  async ensureLabel(labelName, gmailApi) {
    try {
      // Récupérer la liste des labels existants
      const response = await gmailApi.users.labels.list({
        userId: 'me'
      });
      
      const labels = response.data.labels || [];
      const existingLabel = labels.find(label => label.name === labelName);
      
      if (existingLabel) {
        return existingLabel;
      }
      
      // Créer un nouveau label
      const newLabel = await gmailApi.users.labels.create({
        userId: 'me',
        resource: {
          name: labelName,
          labelListVisibility: 'labelShow',
          messageListVisibility: 'show'
        }
      });
      
      return newLabel.data;
    } catch (error) {
      throw new Error(`Erreur lors de la création du label ${labelName}: ${error.message}`);
    }
  }
  
  /**
   * Effectue l'analyse et la catégorisation d'un lot d'emails
   * @param {Array} emails - Liste des emails à catégoriser
   * @returns {Array} Résultats de catégorisation pour chaque email
   */
  batchCategorize(emails) {
    return emails.map(email => {
      const categorization = this.categorizeEmail(email);
      return { email, categorization };
    });
  }
  
  /**
   * Génère un rapport de statistiques sur les emails catégorisés
   * @returns {Object} Statistiques de catégorisation
   */
  getStats() {
    const categorizedPercentage = this.emailStats.total > 0 
      ? (this.emailStats.categorized / this.emailStats.total * 100).toFixed(2) 
      : 0;
    
    return {
      ...this.emailStats,
      categorizedPercentage: `${categorizedPercentage}%`,
      timestamp: new Date().toISOString()
    };
  }
  
  /**
   * Réinitialise les statistiques de catégorisation
   */
  resetStats() {
    this.emailStats = {
      total: 0,
      categorized: 0,
      uncategorized: 0,
      byCategory: {}
    };
  }
}

// Exporter la classe pour utilisation dans d'autres modules
module.exports = EmailCategorizer;
