# Système de Catégorisation d'Emails Gmail

Un système intelligent de catégorisation automatique d'emails basé sur des règles de mots-clés pour Gmail. Ce projet aide à organiser votre boîte de réception en classant automatiquement les emails dans des catégories et sous-catégories pertinentes.

## 🎯 Objectif

Soulager la gestion quotidienne de votre boîte de réception en:
- Catégorisant automatiquement les emails entrants
- Priorisant les messages importants
- Réduisant le bruit des emails non essentiels
- Facilitant la recherche d'informations spécifiques

## 🛠️ Fonctionnalités principales

- Catégorisation avancée selon une taxonomie à deux niveaux
- Système de mots-clés extensible et personnalisable
- Gestion des priorités selon l'urgence et l'importance
- Intégration native avec l'API Gmail
- Filtrage multi-critères (expéditeur, objet, contenu)
- Système d'archivage intelligent par catégorie

## 📂 Taxonomie de catégorisation

Le système utilise une hiérarchie organisée en catégories et sous-catégories:

### MARKETING
- **AI_NEWSLETTERS**: Intelligence artificielle et technologies
- **SOCIAL_MEDIA**: Réseaux sociaux et engagement digital
- **SOCIAL_CONTENT**: Création de contenu et stratégie
- **PROMOTIONS**: Offres commerciales et réductions

### FORMATION
- **TUTORIELS**: Guides pratiques et instructions
- **RESSOURCES**: Documentation, templates et outils
- **WEBINAIRES**: Sessions de formation en ligne

### TECH & OUTILS
- **CONFIGURATIONS**: Paramétrages et mises en route
- **SÉCURITÉ**: Protection des données et conformité
- **SERVICES_CLOUD**: Hébergement et plateformes cloud

### PROFESSIONNEL
- **CLIENTS**: Interactions avec les clients et prospects
- **FACTURATION**: Documents financiers et comptables
- **NETWORKING**: Connexions professionnelles et événements
- **PROJETS**: Gestion de projets et collaboration

### ABONNEMENT
- **PAYANT**: Services premium nécessitant paiement
- **FREEMIUM**: Services gratuits avec options premium

### PERSONNEL
- **FINANCES**: Banque, investissements et assurances
- **ADMINISTRATIF**: Documents officiels et formulaires
- **COMMANDES**: Achats personnels et suivi de livraison

## 🚀 Installation et utilisation

1. Clonez ce dépôt : `git clone https://github.com/Eliassylla/email-categorization-system.git`
2. Configurez l'accès à l'API Gmail selon les instructions dans la documentation
3. Personnalisez les règles de catégorisation dans `keyword-database.js`
4. Exécutez le script principal pour commencer la catégorisation

## 🧠 Algorithme de catégorisation

Le système utilise une approche basée sur des mots-clés et des expéditeurs connus pour affecter un score à chaque email. L'algorithme compare le contenu de l'email (sujet et corps) avec notre base de données de mots-clés, puis détermine la catégorie la plus pertinente en fonction des scores obtenus.

### Caractéristiques de l'algorithme :
- Analyse contextuelle du contenu des emails
- Reconnaissance des expéditeurs typiques par catégorie
- Système de scoring pondéré pour une précision accrue
- Gestion des cas d'ambiguïté et de chevauchement

## 📁 Structure du projet

- `email-categorization.js`: Classe principale et logique de catégorisation
- `keyword-database.js`: Base de données extensible des mots-clés par catégorie
- `utils/`: Utilitaires et fonctions d'aide
- `README.md`: Documentation principale
- `Guide de catégorisation des emails par labels.md`: Guide détaillé avec exemples

## 🤝 Intégration

Ce système s'intègre parfaitement avec l'[Assistant Gmail MCP](https://github.com/Eliassylla/Assistant-Gmail-MCP) pour une expérience de gestion d'emails complète et automatisée.

## 👥 Contribuer

Les contributions sont les bienvenues! N'hésitez pas à proposer de nouvelles catégories, mots-clés ou améliorations via une pull request ou une issue.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.