# Portfolio SSMD — Serigne Saliou Mbacké Dieng

Portfolio personnel statique (HTML, CSS, JavaScript) présentant mon profil d'**administrateur réseaux & systèmes** et de **développeur web et mobile junior**, basé à Dakar.

## Pages

| Fichier | Contenu |
| --- | --- |
| `index.html` | Accueil : présentation, chiffres clés, parcours, compétences réseaux, projets réseaux & sécurité, certifications Cisco, formulaire de contact, téléchargement du CV |
| `developpeur.html` | Partie développeur : compétences (langages, outils, frameworks), projets de développement, formulaire de contact |

## Fonctionnalités

- Design **responsive** (desktop, tablette, mobile) avec menu hamburger sur mobile.
- Thème sombre cohérent, typographies Inter et Space Grotesk.
- **Formulaire de contact** validé côté client (nom, email, sujet, message) : ouvre la messagerie de l'utilisateur avec le message pré-rempli.
- Lien de téléchargement du CV au format texte.
- Navigation fluide (ancres, `scroll-behavior: smooth`) et respect de `prefers-reduced-motion`.

## Contenu

**Réseaux & cybersécurité** : redondance Active Directory avec RODC, serveur Linux et services réseau, portail captif pfSense, certifications Cisco (Cybersécurité, CCNA Network Basics).

**Développement** :
- Site d'apprentissage des langages de programmation (Vue, PHP, MySQL)
- Application de monitoring réseau (Python, Django, API REST)
- Boutique en ligne (React, API REST)

**Langages** : HTML, CSS, JavaScript, Python, PHP, Java, C
**Outils** : Git, GitHub
**Frameworks** : React, Django, Vue

## Lancer le projet

Aucune compilation nécessaire : ouvrez `index.html` dans un navigateur, ou servez le dossier :

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Puis allez sur http://localhost:8000.

## Structure

```
MonPortofolio/
├── index.html          # Page d'accueil
├── developpeur.html    # Page développeur web & mobile
├── style.css           # Styles (thème clair puis thème sombre)
├── script.js           # Menu mobile + envoi du formulaire
└── cv-serigne-saliou-dieng (3).txt   # CV téléchargeable
```

## Personnalisation

- **Email** : remplacez `serignesalioumdieng@gmail.com` dans `index.html`, `developpeur.html` et `script.js` (constante `CONTACT_EMAIL`).
- **Envoi réel des messages** : le formulaire ouvre actuellement la messagerie locale. Pour un envoi direct, branchez un service comme Formspree ou un back-end sur la soumission dans `script.js`.
- **Couleurs** : les variables CSS (`--purple`, `--pink`, `--surface`…) sont définies dans `style.css`.
