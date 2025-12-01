# Pratiques Bancaires

Plateforme éducative dédiée à l'éducation financière et à la bancarisation dans l'espace UEMOA.

## 🚀 Déploiement sur Vercel avec le domaine pratiquesbancaires.com

### Option 1 : Déploiement via le Dashboard Vercel (Recommandé - Plus Simple)

#### Étape 1 : Préparer votre projet pour GitHub (Recommandé)

1. Créez un compte GitHub si vous n'en avez pas : https://github.com/signup
2. Créez un nouveau repository sur GitHub
3. Dans ce dossier, initialisez Git et poussez votre code :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git push -u origin main
```

#### Étape 2 : Déployer sur Vercel

1. Allez sur https://vercel.com/signup et créez un compte (gratuit)
2. Cliquez sur "Add New..." puis "Project"
3. Importez votre repository GitHub
4. Vercel détectera automatiquement la configuration
5. Cliquez sur "Deploy"

#### Étape 3 : Ajouter le domaine personnalisé

1. Dans votre projet Vercel, allez dans **Settings** → **Domains**
2. Ajoutez `pratiquesbancaires.com` et `www.pratiquesbancaires.com`
3. Vercel vous donnera des instructions DNS

#### Étape 4 : Configurer les DNS chez LWS

1. Connectez-vous à votre compte LWS
2. Allez dans la gestion DNS de `pratiquesbancaires.com`
3. Ajoutez les enregistrements DNS fournis par Vercel :

**Option A - Utiliser les noms de serveurs NS (Recommandé) :**
   - Vercel vous donnera des noms de serveurs NS (ex: ns1.vercel-dns.com)
   - Dans LWS, changez les serveurs de noms vers ceux fournis par Vercel

**Option B - Utiliser des enregistrements DNS spécifiques :**
   - Type : A Record
   - Nom : @ (ou vide)
   - Valeur : [Adresse IP fournie par Vercel]
   
   - Type : CNAME
   - Nom : www
   - Valeur : cname.vercel-dns.com

4. Attendez 5-30 minutes pour la propagation DNS

### Option 2 : Déploiement via Vercel CLI

#### Étape 1 : Installer Node.js et npm

1. Téléchargez Node.js : https://nodejs.org/ (Version LTS recommandée)
2. Installez-le
3. Vérifiez l'installation : `node --version` et `npm --version`

#### Étape 2 : Installer Vercel CLI

```bash
npm install -g vercel
```

#### Étape 3 : Déployer

```bash
# Se connecter à Vercel
vercel login

# Déployer (première fois - développement)
vercel

# Déployer en production
vercel --prod
```

#### Étape 4 : Ajouter le domaine

```bash
vercel domains add pratiquesbancaires.com
vercel domains add www.pratiquesbancaires.com
```

### Option 3 : Déploiement Direct (Sans Git)

1. Allez sur https://vercel.com/login
2. Cliquez sur "Add New..." → "Project"
3. Cliquez sur "Browse" et sélectionnez ce dossier
4. Vercel déploiera votre site
5. Suivez les étapes 3 et 4 de l'Option 1 pour configurer le domaine

## 📋 Fichiers de Configuration

- `vercel.json` : Configuration Vercel (redirections, headers, etc.)
- `package.json` : Métadonnées du projet
- `.gitignore` : Fichiers à ignorer par Git

## 🔧 Configuration DNS détaillée

### Chez LWS (Exemple de configuration)

1. **Connexion à LWS** :
   - Allez sur https://www.lws.fr/
   - Connectez-vous à votre compte
   - Allez dans "Gestion de domaine" → "pratiquesbancaires.com"

2. **Configuration des DNS** :
   
   **Si vous utilisez les serveurs de noms NS de Vercel :**
   - Modifiez les serveurs de noms vers ceux fournis par Vercel
   - Exemple : ns1.vercel-dns.com, ns2.vercel-dns.com
   
   **Si vous gardez les DNS de LWS :**
   - Ajoutez un enregistrement A :
     - Type : A
     - Nom : @
     - TTL : 3600
     - Valeur : [IP fournie par Vercel - généralement 76.76.21.21]
   
   - Ajoutez un enregistrement CNAME :
     - Type : CNAME
     - Nom : www
     - TTL : 3600
     - Valeur : cname.vercel-dns.com

## ✅ Vérification du déploiement

1. Une fois déployé, votre site sera accessible sur une URL Vercel :
   - Exemple : `votre-projet.vercel.app`

2. Après configuration du domaine (24-48h pour la propagation) :
   - https://pratiquesbancaires.com
   - https://www.pratiquesbancaires.com

3. Vercel génère automatiquement un certificat SSL gratuit

## 🔄 Redéploiement

Après chaque modification :

**Via Dashboard :**
- Si votre code est sur GitHub, chaque push déclenche un déploiement automatique

**Via CLI :**
```bash
vercel --prod
```

## 📞 Support

- Documentation Vercel : https://vercel.com/docs
- Support Vercel : support@vercel.com
- Documentation LWS : https://www.lws.fr/support

## 📝 Notes importantes

- Les fichiers `vercel.json`, `package.json`, et `.gitignore` sont déjà configurés
- Le site redirige automatiquement `/` vers `/banque.html`
- Les assets (images, vidéos) sont configurés avec un cache long
- Le certificat SSL est automatique et gratuit sur Vercel

