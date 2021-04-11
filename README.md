# Explication du Projet

(même que Ubiquity) Dans le contexte actuel (crise sanitaire), beaucoup de commerçants ne peuvent plus ouvrir leurs magasins. Ils doivent s'orienter
vers d'autres modes de vente et une des solutions est la vente par internet. C'est pour cela qu'il est important et urgent, en tant
que développeur, de savoir faire un site de vente de produits en utilisant les meilleurs outils afin de créer
un site attractif.

Le framework Ember est le framework javascript idéal pour pouvoir accomplir une partie de cette tâche.
Il va permettre, au programmeur, de gagner beaucoup de temps grâce à la manière du framework de fonctionner et grâce aux fonctions déjà intégrées.
Grâce à lui, le gérant va pouvoir avec facilité gérer le site en interne.

Pour commencer à travailler sur le projet, il faut installer et utiliser la version 7.4 de php ou une version plus récente, il faut aussi évidemment
utiliser git nous permettant de sauvegarder le projet sur un cloud et de pouvoir montrer son avancement. Il faut aussi installer Node.js avec npm, il permet de traiter un gros volume de requêtes simultanément de manière efficace. Et pour finir, sans aucun doute, l'installation de Ember CLI.

Une fois les installations faites ci-dessus, il faut pour créer le projet:
 - créer la nouvelle application (ember new NOM_DU_PROJET)
 - cloner le projet pour pouvoir l'utiliser sur Github (git clone <repository>)
 - démarrer le serveur (ember serve)
 - utiliser l'url "http://127.0.0.1:4200" pour pouvoir visiter l'application.

Dans Ember, nous avons :
 - Les helpers, ce sont des fonctions permettant de nous faciliter la tâche lors de calculs
 - Les models, ils représentent les données sous-jacentes que l'application présente à l'utilisateur
 - Les routes, ce sont des actions appelées par l'utilisateur dans du code PHP
 - Les serializers, ils mettent en forme les données envoyées et reçues depuis le backend
 - Les services, ce sont des données de sessions qui sont généralement en rapport avec l'utilisateur
 - Les templates, permet de gérer l'interface utilisateur

Nous devons donc faire une application où le commerçant pourra en interne mettre à disposition les sections et les produits à mettre en vente sur l'application, il pourra aussi donc préparer les commandes des clients en planifiant le retrait.

les pages :
/index : permet de se connecter
/board : tableau de bord
/logout : permet de se déconnecter
/order : permet de voir la liste des commandes
/sections : permet de voir la liste des sections
/sections/add/ : permet d'ajouter une section
/sections/addProduct : permet d'ajouter un produit
/sections/delete/x : permet de supprimer une section
/sections/edit/x : permet de modifier une section
/sections/edit/x/addProduct : permet d'ajouter un produit directement dans une section
/sections/edit/x/delete : permet de supprimer un produit
/sections/edit/x/edit : permet de modifier un produit

# tds

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd tds`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
