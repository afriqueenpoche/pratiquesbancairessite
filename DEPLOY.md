# Instructions de déploiement sur Vercel

## Prérequis

1. Un compte Vercel (gratuit) : https://vercel.com/signup
2. Le domaine `pratiquesbancaires.com` configuré chez LWS

## Méthode 1 : Déploiement via le Dashboard Vercel (Recommandé)

### Étape 1 : Préparer le projet

1. Assurez-vous que tous vos fichiers sont dans le dossier actuel
2. Le fichier `vercel.json` est déjà créé pour la configuration

### Étape 2 : Créer un projet sur Vercel

1. Allez sur https://vercel.com/login et connectez-vous
2. Cliquez sur "Add New..." puis "Project"
3. Si votre code n'est pas encore sur GitHub/GitLab/Bitbucket :
   - Vous pouvez installer Vercel CLI (voir Méthode 2 ci-dessous)
   - Ou créer un repository Git localement et le pousser sur GitHub

### Étape 3 : Importer le projet

1. Si votre code est sur GitHub/GitLab/Bitbucket :
   - Cliquez sur "Import Git Repository"
   - Sélectionnez votre repository
   - Vercel détectera automatiquement les paramètres
   - Cliquez sur "Deploy"

2. Si vous déployez directement depuis votre ordinateur :
   - Installez Vercel CLI : `npm i -g vercel`
   - Dans le terminal, naviguez vers ce dossier
   - Exécutez : `vercel`
   - Suivez les instructions

### Étape 4 : Configurer le domaine personnalisé

Une fois le projet déployé :

1. Allez dans votre projet sur Vercel
2. Allez dans l'onglet "Settings" puis "Domains"
3. Ajoutez `pratiquesbancaires.com` et `www.pratiquesbancaires.com`
4. Vercel vous donnera des enregistrements DNS à ajouter chez LWS

### Étape 5 : Configurer les DNS chez LWS

Vous devrez ajouter ces enregistrements DNS dans votre panneau LWS :

**Pour pratiquesbancaires.com :**
- Type : A
- Nom : @
- Valeur : 76.76.21.21 (adresse IP de Vercel - peut changer)

**Pour www.pratiquesbancaires.com :**
- Type : CNAME
- Nom : www
- Valeur : cname.vercel-dns.com

**Ou utilisez les noms de serveurs fournis par Vercel :**
Vercel peut vous donner des noms de serveurs NS à utiliser directement.

## Méthode 2 : Déploiement via Vercel CLI

### Étape 1 : Installer Vercel CLI

```bash
npm install -g vercel
```

### Étape 2 : Se connecter

```bash
vercel login
```

### Étape 3 : Déployer

```bash
vercel
```

Pour la production :

```bash
vercel --prod
```

### Étape 4 : Configurer le domaine

```bash
vercel domains add pratiquesbancaires.com
```

## Configuration DNS chez LWS

1. Connectez-vous à votre compte LWS
2. Allez dans la gestion DNS de votre domaine `pratiquesbancaires.com`
3. Ajoutez les enregistrements fournis par Vercel (voir les détails dans le dashboard Vercel)
4. La propagation DNS peut prendre 24-48 heures (généralement quelques minutes)

## Vérification

Une fois le domaine configuré et propagé :

- Votre site sera accessible sur https://pratiquesbancaires.com
- Le certificat SSL sera automatiquement généré par Vercel
- Les redirections configurées dans `vercel.json` fonctionneront

## Support

- Documentation Vercel : https://vercel.com/docs
- Support Vercel : https://vercel.com/support

