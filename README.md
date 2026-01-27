# GabonHubTech - Site Web Officiel

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blueviolet)
![License](https://img.shields.io/badge/license-MIT-green)

Site web officiel moderne et interactif pour GabonHubTech, développé avec les technologies web les plus récentes pour offrir une expérience utilisateur premium et futuriste.

##  Fonctionnalités Principales

- **Design Futuriste** - Interface utilisateur avec éléments hexagonaux et effets de lumière
- **Performances Optimisées** - Chargement rapide avec Next.js 14 et App Router
- **Responsive Design** - Compatible mobile, tablette et desktop
- **Animations Fluides** - Interactions et transitions avec Framer Motion
- **Thème Tech Bleu** - Palette de couleurs professionnelle (#0A66C2)
- **SEO Optimisé** - Structure optimale pour le référencement naturel

##  Aperçu

![Aperçu du site](https://via.placeholder.com/800x450/0A66C2/FFFFFF?text=GabonHubTech+Website+Preview)

##  Stack Technologique

### Frontend
- **Next.js 14** - Framework React avec App Router
- **React 18** - Bibliothèque UI
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations et transitions
- **Lucide React** - Icônes modernes et élégantes

### Développement
- **TypeScript** - Typage statique optionnel
- **ESLint** - Linting du code
- **PostCSS** - Traitement CSS avancé
- **Autoprefixer** - Préfixes vendeurs automatiques

##  Installation et Démarrage

### Prérequis
- Node.js 18.17 ou version ultérieure
- npm, yarn ou pnpm

### Étapes d'Installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/Benjamin09e/GabonHubTech.git
cd gabonhubtech
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Démarrer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

##  Structure du Projet

```
gabonhubtech/
├── app/
│   ├── layout.js         # Layout principal avec metadata
│   ├── page.js           # Page d'accueil
│   └── globals.css       # Styles globaux Tailwind
├── components/
│   ├── DotMatrixBackground.jsx  # Arrière-plan animé
│   ├── HexagonCard.jsx          # Carte hexagonale
│   ├── HeroSection.jsx          # Section héro
│   ├── CodeDecoration.jsx       # Décoration code
│   └── (autres composants)
├── public/
│   ├── favicon.ico
│   └── (assets statiques)
├── styles/
│   └── (styles personnalisés)
├── tailwind.config.js    # Configuration Tailwind
├── postcss.config.js     # Configuration PostCSS
├── package.json
├── README.md
└── .gitignore
```

##  Palette de Couleurs

| Couleur | Hex | Utilisation |
|---------|-----|-------------|
| Tech Blue | `#0A66C2` | Couleur principale |
| Tech Dark | `#1F2933` | Arrière-plan |
| Tech Dark Lighter | `#323F4B` | Éléments secondaires |
| Tech Accent | `#F3F6F9` | Texte sur fond sombre |
| Tech Blue Secondary | `#1F8EF1` | Accents et survols |

## 🌀 Animations Personnalisées

Le projet inclut des animations Tailwind CSS personnalisées :

```javascript
// Dans tailwind.config.js
animation: {
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'float': 'float 6s ease-in-out infinite',
},
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  }
}
```

##  Composants Principaux

### DotMatrixBackground
Arrière-plan animé avec des points pulsants en canvas.

### HexagonCard
Carte hexagonale interactive avec animations au survol.

### HeroSection
Section principale avec titre, sous-titre et call-to-action.

### CodeDecoration
Éléments de décoration de code pour l'ambiance tech.

##  Configuration Tailwind

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-dark': '#1F2933',
        'tech-dark-lighter': '#323F4B',
        'tech-blue': '#0A66C2',
        'tech-blue-secondary': '#1F8EF1',
        'tech-accent': '#F3F6F9',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

##  Scripts Disponibles

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

##  Déploiement

Le site peut être déployé sur différentes plateformes :

### Vercel (Recommandé)
```bash
# Connectez votre dépôt GitHub à Vercel
# Vercel détectera automatiquement Next.js
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: .next
```

### Autres options
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

##  Dépannage

### Problèmes Courants

1. **Erreur "use client"**
   - Assurez-vous que les composants utilisant des hooks React ont `"use client"` en haut du fichier

2. **Styles Tailwind non appliqués**
   - Vérifiez que `globals.css` inclut les directives `@tailwind`
   - Redémarrez le serveur de développement

3. **Erreur de module non trouvé**
   - Exécutez `npm install` pour réinstaller les dépendances

##  Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

##  Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

##  Contact

GabonHubTech - [@gabonhubtech]()

Lien du projet : [https://github.com/votre-username/gabonhubtech](https://github.com/votre-username/gabonhubtech)

##  Remerciements

- [Next.js](https://nextjs.org/) pour l'excellent framework
- [Tailwind CSS](https://tailwindcss.com/) pour l'utilitaire CSS
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [Lucide Icons](https://lucide.dev/) pour les icônes

---

<div align="center">
<strong>Made with ❤️ for GabonHubTech</strong><br/>
<sub>Développé avec les dernières technologies web</sub>
</div>