# 🌱 GreenSpots – Frontend

GreenSpots est une application web expérimentale qui recense et met en valeur les spots écoresponsables de Bretagne, cette belle région : producteurs locaux, hébergements durables, magasins et marchés bio, bornes de recharge électrique.  


👉 Cette version est un **prototype** : les données affichées sont **statiques** (sauf pour les bornes de recharge électriques) et servent uniquement à valider la structure technique.

🎯 L'objectif est de tester une stack **Next.js + Django** et de découvrir le Framework Django

---

## 🚀 Technologies utilisées
- **Frontend** : [Next.js](https://nextjs.org/) (React framework)
- **Style** : [TailwindCSS](https://tailwindcss.com/)
- **Carte interactive** : [React Leaflet](https://react-leaflet.js.org/)
- **Backend** : API [Django REST Framework](https://www.django-rest-framework.org/)

---

## 📌 Fonctionnalités principales
- Carte interactive affichant :
  - Bornes de recharge électrique (via [data.gouv](https://data.gouv.fr))
  - Spots écoresponsables (hébergements, producteurs locaux, commerces bio…)
- Filtrage et affichage détaillé des spots
- Découverte d'un spot de façon aléatoire
- Design épuré et responsive

---

## ⚡ Installation & lancement du frontend en local

### 1. Cloner le projet
```bash
git clone https://github.com/aulemarouille/green-spots-front.git
cd green-spots-front
```
### 2. Installer les dépendences
```bash
yarn install
```
### 3. Lancer le serveur de développement
```bash
yarn dev
```

Le frontend est disponible sur http://localhost:3000.

---

## ✨ Déploiement du frontend

Le front utilise [Netlify](https://www.netlify.com/) pour le déploiement et est disponible à cette adresse : https://green-spots.netlify.app/
