## DEVJOBS

Bienvenue dans mon projet DevJobs ! Ce projet est une site web pour la recherche et la candidature à des offres d'emploi dans le domaine du développement.

## Installation :

Pour commencer, vous devez avoir Node.js installé sur votre machine. Vous pouvez le télécharger depuis le site officiel de Node.js.

Une fois Node.js installé, suivez les étapes suivantes pour installer et exécuter le projet :

## Cloner le dépôt Git sur votre ordinateur :

git clone https://gitlab.cefim-formation.org/RSanchez-Avila/ecf-front-end.git

## Installation Node.js ainsi que SASS :

Installez Node.js (et ses dépendances) après son téléchargement avec la commande :

  npm install

SASS est installé avec cette commande, Vous pouvez maintenant utiliser SASS dans votre projet en utilisant la commande sass dans votre script npm.

Si vous souhaitez effectué des modifications sur le projet, veuillez noté que le script dans "package.json" est nommé "sass". 
Donc exécutez la commande :

  npm run sass

Si vous changer le nom du script "sass", faites de même avec la commande npm.

## Mettre à jour le projet :

Si vous souhaitez apporter des modifications, veuillez modifier le nom "name" du projet dans le fichier "package.json".
Si vous souhaitez déposer ce projet sur votre dépôt distant, veuillez modifier l'url du repository git "repository" --> "url".

## Informations sur le projet :

Les utilisateurs peuvent avec ce projet :

- Cliquer sur le nom d'un emploi afin d'afficher plus d'informations sur celui-ci, ainsi que pour postuler à l'offre et visiter le site du recruteur.

- Visualiser de manière optimale la mise en page du site selon la taille de l'écran, que ce soit sur un appareil mobile, une tablette ou un ordinateur.

- Afficher les éléments cliquables lors du survol de la souris sur l'élément en question.

- Filtrer les offres d'emploi sur la page par titre, emplacement et si l'offre d'emploi est à temps plein.

- Avoir leur préférence de thème dès leur arrivée sur la page web, avec la possibilité de le changer ultérieurement via le changement de thème.


## Structure du projet

Le projet est organisé comme suit :

- scss/: Ce dossier contient les fichiers SCSS qui seront compilés en CSS.

- css/: Ce dossier contient les fichiers CSS générés après la compilation des fichiers SCSS.

- js/: Ce dossier contient les fichiers JavaScript de l'application.

- index.html: C'est le fichier HTML principal de l'application.

- job-detail.html: c'est le fichier HTML affichant les détails de l'offre d'emploi.