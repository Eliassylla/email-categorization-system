# Système de Catégorisation d'Emails Gmail

Un système complet de catégorisation automatique d'emails basé sur des règles de mots-clés pour Gmail. Ce projet aide à organiser votre boîte de réception en classant automatiquement les emails dans des catégories et sous-catégories pertinentes.

## 🎯 Objectif

Soulager la gestion quotidienne de votre boîte de réception en:
- Catégorisant automatiquement les emails entrants
- Priorisant les messages importants
- Réduisant le bruit des emails non essentiels
- Facilitant la recherche d'informations spécifiques

## 🛠️ Fonctionnalités

- Catégorisation avancée selon une taxonomie à deux niveaux
- Filtrage multi-critères (expéditeur, objet, contenu)
- Gestion des priorités selon l'urgence et l'importance
- Interface avec l'API Gmail via JavaScript
- Système d'archivage intelligent par catégorie

## 📋 Catégories principales

Le système utilise une hiérarchie de catégories et sous-catégories:

- **MARKETING** - Communications promotionnelles et publicitaires
  - AI_NEWSLETTERS - Intelligence artificielle et technologies
  - SOCIAL_MEDIA - Réseaux sociaux et engagement digital
  - SOCIAL_CONTENT - Création de contenu et stratégie
  - PROMOTIONS - Offres commerciales et réductions

- **FORMATION** - Développement de compétences et apprentissage
  - TUTORIELS - Guides pratiques et instructions
  - RESSOURCES - Documentation, templates et outils
  - WEBINAIRES - Sessions de formation en ligne

- **TECH & OUTILS** - Infrastructure, logiciels et sécurité
  - CONFIGURATIONS - Paramétrages et mises en route
  - SÉCURITÉ - Protection des données et conformité
  - SERVICES_CLOUD - Hébergement et plateformes cloud

- **PROFESSIONNEL** - Communications d'affaires et collaborations
  - CLIENTS - Interactions avec les clients et prospects
  - FACTURATION - Documents financiers et comptables
  - NETWORKING - Connexions professionnelles et événements
  - PROJETS - Gestion de projets et collaboration

- **ABONNEMENT** - Services récurrents et souscriptions
  - PAYANT - Services premium nécessitant paiement
  - FREEMIUM - Services gratuits avec options premium

- **PERSONNEL** - Communications non professionnelles
  - FINANCES - Banque, investissements et assurances
  - ADMINISTRATIF - Documents officiels et formulaires
  - COMMANDES - Achats personnels et suivi de livraison

## 💻 Installation et utilisation

1. Clonez ce dépôt
2. Configurez l'accès à l'API Gmail
3. Personnalisez les règles de catégorisation dans `email-categorization.js`
4. Exécutez le script principal pour commencer la catégorisation

## 📊 Structure du projet

- `email-categorization.js` - Script principal de catégorisation
- `keyword-database.js` - Base de données des mots-clés par catégorie
- `gmail-api-handler.js` - Interface avec l'API Gmail
- `category-actions.js` - Actions automatiques par catégorie

## 📈 Contribuer

Les contributions sont les bienvenues! N'hésitez pas à proposer de nouvelles catégories, mots-clés ou améliorations.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
