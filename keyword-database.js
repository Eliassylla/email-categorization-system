/**
 * Base de données de mots-clés pour la catégorisation d'emails
 * Taxonomie à deux niveaux: CATÉGORIE/SOUS_CATÉGORIE
 * Pour chaque sous-catégorie: mots-clés et exemples d'expéditeurs typiques
 */

const EMAIL_CATEGORIES = {
  // CATÉGORIE: MARKETING
  "MARKETING": {
    // Sous-catégorie: IA & Newsletters
    "AI_NEWSLETTERS": {
      keywords: [
        // Termes liés à l'IA
        "newsletter", "IA", "AI", "intelligence artificielle", "GPT", "LLM", 
        "Claude", "Anthropic", "OpenAI", "Gemini", "Mistral", "prompt engineering",
        "large language model", "chatbot", "NLP", "traitement naturel du langage",
        "transformer", "deep learning", "machine learning", "générateur texte",
        "agent autonome", "agent AI", "GenAI", "génératif",
        // Extensions et pluriels
        "intelligences artificielles", "chatbots", "transformers", "agents AI",
        "modèles de langage", "modèles génératifs"
      ],
      senders: [
        "OpenAI", "Anthropic", "Google AI", "AI Weirdness", "The Batch", 
        "Import AI", "The Algorithm", "Hugging Face", "DeepMind", 
        "ML Weekly", "Data Science Weekly", "AI Daily", "AI News",
        "noreply@openai.com", "news@anthropic.com", "update@huggingface.co"
      ]
    },
    // Sous-catégorie: Réseaux sociaux
    "SOCIAL_MEDIA": {
      keywords: [
        "réseaux sociaux", "social media", "LinkedIn", "Twitter", "Facebook", 
        "Instagram", "TikTok", "engagement", "algorithme", "audience", 
        "reach", "portée", "community management", "SMO", "SMM", 
        "followers", "abonnés", "publication", "post", "hashtag",
        "viral", "tendance", "trending", "like", "partage", "share",
        "commentaire", "interaction", "contenu sponsorisé", "ad manager",
        "média social", "réseau social", "influenceur", "influencer",
        "social selling", "marketing d'influence", "viral marketing"
      ],
      senders: [
        "LinkedIn", "Twitter", "X", "Meta", "Hootsuite", "Buffer", 
        "Later", "Social Media Examiner", "Sprout Social", "Planoly",
        "Later", "Iconosquare", "Mention", "Agorapulse",
        "notifications@linkedin.com", "info@twitter.com", "notification@instagram.com"
      ]
    },
    // Sous-catégorie: Création de contenu
    "SOCIAL_CONTENT": {
      keywords: [
        "création de contenu", "content creation", "content marketing", 
        "rédaction", "copywriting", "storytelling", "vidéo", "podcast", 
        "infographie", "calendrier éditorial", "ligne éditoriale", "SEO", 
        "référencement", "backlinks", "mots-clés", "keywords", "optimisation contenu",
        "SERP", "position", "ranking", "stratégie contenu", "contenu sponsorisé",
        "contenu web", "webmarketing", "content strategy", "contenu viral",
        "blog", "article", "rédacteur", "création éditoriale"
      ],
      senders: [
        "Julian Goldie", "Create Content Club", "SEMrush", "Ahrefs", 
        "Moz", "Content Marketing Institute", "Copyblogger", "ClickUp",
        "ContentCal", "Ubersuggest", "BuzzSumo", "Clearscope", "SurferSEO",
        "info@semrush.com", "news@ahrefs.com", "updates@moz.com"
      ]
    },
    // Sous-catégorie: Promotions et offres
    "PROMOTIONS": {
      keywords: [
        "promotion", "offre", "réduction", "solde", "promo", "remise", 
        "-X%", "deal", "vente flash", "black friday", "cyber monday", 
        "dernière chance", "exclusif", "limité", "offre spéciale", "économisez",
        "save", "discount", "gratuit", "free", "cadeau", "gift", 
        "livraison gratuite", "free shipping", "code promo", "coupon",
        "spécial", "membres", "VIP", "soldes", "outlet"
      ],
      senders: [
        "Amazon", "Cdiscount", "Fnac", "Darty", "Boulanger", "AliExpress",
        "Rakuten", "eBay", "Zalando", "Asos", "H&M", "Zara", "Mango",
        "La Redoute", "Shein", "Groupon", "Veepee", "Showroomprivé",
        "promotions@amazon.fr", "newsletter@cdiscount.com", "info@aliexpress.com"
      ]
    }
  },

  // CATÉGORIE: FORMATION
  "FORMATION": {
    // Sous-catégorie: Tutoriels et guides
    "TUTORIELS": {
      keywords: [
        "tutoriel", "tutorial", "guide pas à pas", "how-to", "step-by-step", 
        "walkthrough", "démo", "demonstration", "learn", "apprendre", 
        "quick tip", "astuces", "aide", "help", "support", "FAQ", 
        "questions fréquentes", "documentation", "procédure", "méthode",
        "cours", "leçon", "apprendre à", "apprentissage", "formation en ligne",
        "e-learning", "mooc", "formation continue", "formations", "didacticiel"
      ],
      senders: [
        "Udemy", "YouTube tutoriels", "TechCrunch", "Digital Trends", 
        "Lifehacker", "Coursera", "edX", "Khan Academy", "Codecademy",
        "LinkedIn Learning", "Pluralsight", "Skillshare", "FunMooc",
        "info@udemy.com", "noreply@youtube.com", "updates@coursera.org"
      ]
    },
    // Sous-catégorie: Ressources et outils
    "RESSOURCES": {
      keywords: [
        "ressource", "template", "modèle", "boîte à outils", "toolkit", 
        "bibliothèque", "library", "assets", "éléments graphiques", "mockup", 
        "cheat sheet", "fiche pratique", "mémo", "PDF", "ebook", "livre blanc", 
        "white paper", "guide", "étude", "rapport", "template", "modèle gratuit",
        "framework", "bundle", "pack", "collection", "ressources gratuites"
      ],
      senders: [
        "Envato", "Canva", "Figma", "Dribbble", "Behance", "Creative Market", 
        "Patreon", "Adobe", "Shutterstock", "Freepik", "Pixabay", "Unsplash", 
        "Creative Boom", "99designs", "GraphicBurger", "Mockupworld",
        "updates@envato.com", "news@canva.com", "hello@freepik.com"
      ]
    },
    // Sous-catégorie: Webinaires et événements en ligne
    "WEBINAIRES": {
      keywords: [
        "webinar", "webinaire", "conférence en ligne", "live", "session", 
        "masterclass", "workshop", "atelier", "classe virtuelle", 
        "formation en direct", "inscription", "replay", "enregistrement",
        "événement virtuel", "séminaire en ligne", "vidéoconférence",
        "conférence virtuelle", "présentation en ligne", "événement digital",
        "séance d'information", "classes virtuelles", "cours en direct",
        "session interactive", "masterclass", "master class"
      ],
      senders: [
        "GoToWebinar", "Zoom", "Microsoft Teams", "Google Meet", "Webex",
        "Eventbrite", "Livestorm", "Adobe Connect", "ON24", "BigMarker",
        "WebinarJam", "EverWebinar", "Demio", "MyOwnConference",
        "info@gotowebinar.com", "no-reply@zoom.us", "notification@eventbrite.com"
      ]
    }
  },

  // CATÉGORIE: TECH & OUTILS
  "TECH & OUTILS": {
    // Sous-catégorie: Configurations et paramétrages
    "CONFIGURATIONS": {
      keywords: [
        "configuration", "setup", "paramétrage", "installation", "settings", 
        "getting started", "mise en route", "démarrage", "initialisation", 
        "account setup", "guide d'utilisation", "onboarding", "activation",
        "paramètres", "réglages", "options", "préférences", "assistant de configuration",
        "tutoriel d'installation", "guide de démarrage", "initialiser", "configurer"
      ],
      senders: [
        "Google", "Microsoft", "Apple", "Adobe", "Slack", "GitHub", "Notion",
        "Trello", "Asana", "Monday.com", "Jira", "Confluence", "Dropbox",
        "Box", "OneDrive", "Google Drive", "AWS", "Azure", "GCP",
        "no-reply@google.com", "mail@microsoft.com", "notification@github.com"
      ]
    },
    // Sous-catégorie: Sécurité et confidentialité
    "SÉCURITÉ": {
      keywords: [
        "sécurité", "security", "confidentialité", "privacy", "authentification", 
        "2FA", "double authentification", "mot de passe", "password", "breach", 
        "faille", "vulnérabilité", "mise à jour de sécurité", "security update", 
        "RGPD", "GDPR", "cryptage", "encryption", "chiffrement", "phishing",
        "hameçonnage", "hacking", "piratage", "malware", "virus", "anti-virus",
        "pare-feu", "firewall", "intrusion", "protection des données"
      ],
      senders: [
        "Norton", "McAfee", "Kaspersky", "Avast", "Bitdefender", "LastPass", 
        "1Password", "Dashlane", "CNIL", "Google Security", "Microsoft Security", 
        "Apple ID", "AWS Security", "CloudFlare", "Okta", "Duo Security",
        "security@google.com", "security-noreply@adobe.com", "info@lastpass.com"
      ]
    },
    // Sous-catégorie: Services cloud et hébergement
    "SERVICES_CLOUD": {
      keywords: [
        "cloud", "AWS", "Azure", "Google Cloud", "hébergement", "hosting", 
        "serveur", "server", "stockage", "storage", "API", "microservices", 
        "conteneurs", "docker", "kubernetes", "scaling", "déploiement", "deployment",
        "cloud computing", "SaaS", "PaaS", "IaaS", "virtualisation", "VM", "instance",
        "bucket", "object storage", "base de données", "database", "DaaS", "cluster",
        "conteneurisation", "orchestration", "serverless", "cloud native"
      ],
      senders: [
        "AWS", "GCP", "Azure", "DigitalOcean", "Heroku", "Netlify", "Vercel", 
        "MongoDB Atlas", "Firebase", "CloudFlare", "OVHcloud", "Scaleway", 
        "Linode", "Vultr", "Oracle Cloud", "IBM Cloud", "Red Hat", "Docker",
        "aws-marketing-email-replies@amazon.com", "cloud-noreply@google.com", "info@heroku.com"
      ]
    }
  },

  // CATÉGORIE: PROFESSIONNEL
  "PROFESSIONNEL": {
    // Sous-catégorie: Clients et prospects
    "CLIENTS": {
      keywords: [
        "client", "prospect", "devis", "proposition", "projet", "collaboration", 
        "meeting", "rendez-vous", "feedback", "retour", "livraison", "deadline", 
        "délai", "révision", "facturation", "paiement", "proposition commerciale",
        "contrat", "signature", "négociation", "offre", "cahier des charges", "lead",
        "pipeline", "qualification", "opportunité", "satisfaction", "suivi client"
      ],
      senders: [
        // Noms génériques pour les expéditeurs clients
        "contact@", "info@", "service.client@", "support@", "sales@", "commercial@",
        "service@", "equipe@", "direction@", "partenariat@", "projet@", "commande@",
        // On ne peut pas vraiment prédéfinir des expéditeurs spécifiques 
        // puisque chaque utilisateur a ses propres clients
      ]
    },
    // Sous-catégorie: Facturation et finances
    "FACTURATION": {
      keywords: [
        "facture", "invoice", "paiement", "payment", "échéance", "due date", 
        "reçu", "receipt", "comptabilité", "accounting", "TVA", "VAT", "taxe", 
        "impôt", "déclaration", "règlement", "virement", "chèque", "versement",
        "prélèvement", "acompte", "avoir", "remboursement", "crédit", "débit",
        "solde", "échéancier", "relance", "rappel de paiement", "devis", "cotisation"
      ],
      senders: [
        "comptabilite@", "facturation@", "finance@", "invoice@", "billing@",
        "payment@", "treasurer@", "accounting@", "payroll@", "sage@", "compta@",
        "noreply-facture@", "ne-pas-repondre-facture@", "stripe", "paypal", 
        "invoices@stripe.com", "service@paypal.fr", "facture@impots.gouv.fr"
      ]
    },
    // Sous-catégorie: Networking et relations professionnelles
    "NETWORKING": {
      keywords: [
        "réseau", "network", "contact", "connexion", "professionnel", "invitation", 
        "événement", "meet-up", "conférence", "salon", "forum", "recommandation", 
        "introduction", "réseautage", "partenariat", "collaboration", "opportunité",
        "recrutement", "carrière", "emploi", "job", "poste", "offre d'emploi",
        "candidature", "CV", "entretien", "intervenant", "animateur", "speaker"
      ],
      senders: [
        "LinkedIn", "Meetup.com", "Eventbrite", "Chamber of Commerce", 
        "BNI", "CCI", "networking@", "events@", "communaute@", "invitations@",
        "jobs@", "recrutement@", "carriere@", "talent@", "rh@", "hr@",
        "notifications@linkedin.com", "info@meetup.com", "events@eventbrite.com"
      ]
    },
    // Sous-catégorie: Projets et collaboration
    "PROJETS": {
      keywords: [
        "projet", "project", "planification", "planning", "échéance", "timeline", 
        "jalon", "milestone", "avancement", "progress", "équipe", "team", 
        "collaboration", "Gantt", "Kanban", "Agile", "Scrum", "sprint", "tâche",
        "backlog", "rétrospective", "stand-up", "daily", "réunion d'équipe", "post-mortem",
        "suivi", "reporting", "statut", "status", "livrable", "sprint review"
      ],
      senders: [
        "Asana", "Trello", "Monday.com", "Jira", "Notion", "Basecamp", 
        "ClickUp", "Wrike", "Microsoft Project", "TeamWork", "ProjectManager",
        "Zoho Projects", "Smartsheet", "project@", "task@", "noreply@asana.com",
        "notifications@trello.com", "noreply@monday.com", "jira@atlassian.com"
      ]
    }
  },

  // CATÉGORIE: ABONNEMENT
  "ABONNEMENT": {
    // Sous-catégorie: Services payants
    "PAYANT": {
      keywords: [
        "abonnement payant", "subscription", "renouvellement", "renewal", 
        "mensuel", "annuel", "prélèvement", "payment receipt", "facture d'abonnement", 
        "upgrader", "premium", "pro", "business", "enterprise", "membre",
        "adhésion", "cotisation", "forfait", "plan", "souscription", "membership",
        "accès premium", "offre privilège", "période d'essai terminée"
      ],
      senders: [
        "Netflix", "Spotify", "Amazon Prime", "Disney+", "HBO Max", "Apple TV+",
        "YouTube Premium", "Adobe Creative Cloud", "Microsoft 365", "Salesforce",
        "Dropbox", "Box", "Google One", "AWS", "Shopify", "Wix", "Squarespace",
        "billing@netflix.com", "no-reply@spotify.com", "auto-confirm@amazon.fr"
      ]
    },
    // Sous-catégorie: Services freemium et essais
    "FREEMIUM": {
      keywords: [
        "gratuit", "free", "freemium", "essai", "trial", "version d'essai", 
        "starter", "basic", "upgrade possible", "fonctionnalités limitées", 
        "limite atteinte", "quota", "version limitée", "standard", "basique",
        "découverte", "offre découverte", "compte gratuit", "plan gratuit",
        "essai gratuit", "période d'essai", "jours restants", "expiration"
      ],
      senders: [
        "Mailchimp", "Canva", "Slack", "Dropbox", "Zoom", "Trello", "Evernote",
        "Notion", "Asana", "HubSpot", "Buffer", "Hootsuite", "SurveyMonkey",
        "Typeform", "Loom", "Grammarly", "Calendly", "Doodle", "WaveApps",
        "welcome@mailchimp.com", "no-reply@canva.com", "slack@slack.com"
      ]
    }
  },

  // CATÉGORIE: PERSONNEL
  "PERSONNEL": {
    // Sous-catégorie: Finances personnelles
    "FINANCES": {
      keywords: [
        "banque", "bank", "compte", "account", "épargne", "savings", 
        "investissement", "investment", "crédit", "loan", "assurance", 
        "insurance", "placement", "immobilier", "real estate", "bourse", 
        "stock", "action", "trading", "courtage", "broker", "prêt", "retrait",
        "dépôt", "virement", "transaction", "portefeuille", "patrimoine",
        "fiscalité", "impôts", "taxes", "déclaration fiscale"
      ],
      senders: [
        "BNP Paribas", "Société Générale", "Crédit Agricole", "Boursorama", 
        "LCL", "Caisse d'Épargne", "AXA", "Allianz", "GMF", "MAAF", "MAIF",
        "Matmut", "MMA", "Groupama", "eToro", "Trade Republic", "Degiro",
        "noreply@bnpparibas.net", "ne-pas-repondre@societegenerale.fr", "info@boursorama.com"
      ]
    },
    // Sous-catégorie: Administratif et documents
    "ADMINISTRATIF": {
      keywords: [
        "administratif", "document", "formulaire", "déclaration", "impôt", 
        "tax", "sécurité sociale", "retraite", "pension", "contrat", "bail", 
        "lease", "attestation", "justificatif", "document officiel", "CAF",
        "CPAM", "Pôle Emploi", "service public", "administration", "préfecture",
        "mairie", "urssaf", "formulaire", "récépissé", "certificat", "autorisation"
      ],
      senders: [
        "impots.gouv.fr", "ameli.fr", "caf.fr", "pole-emploi.fr", "service-public.fr",
        "urssaf.fr", "info.gouv.fr", "laposte.fr", "lassuranceretraite.fr",
        "conseil-national.medecin.fr", "notaires.fr", "notretemps.com",
        "ne-pas-repondre@dgfip.finances.gouv.fr", "nepasrepondre@assurance-maladie.fr"
      ]
    },
    // Sous-catégorie: Commandes et livraisons
    "COMMANDES": {
      keywords: [
        "commande", "order", "achat", "purchase", "livraison", "delivery", 
        "expédition", "shipping", "suivi", "tracking", "retour", "return", 
        "remboursement", "refund", "confirmation", "récapitulatif", "colis",
        "paquet", "transporteur", "chronopost", "colissimo", "ups", "dhl",
        "facture", "bon de commande", "bon de livraison", "reçu", "panier"
      ],
      senders: [
        "Amazon", "Cdiscount", "Fnac", "Darty", "Boulanger", "AliExpress",
        "Rakuten", "eBay", "Zalando", "Asos", "H&M", "Zara", "Mango",
        "La Redoute", "Colissimo", "Chronopost", "UPS", "DHL", "FedEx",
        "order-update@amazon.fr", "suivi-commande@cdiscount.com", "clients@colissimo.fr"
      ]
    }
  }
};

module.exports = EMAIL_CATEGORIES;
