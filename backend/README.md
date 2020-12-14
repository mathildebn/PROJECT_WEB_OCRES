#Backend

Membres de l'équipe

BUONO Mathilde DIALLO Nivine LEYGUE Marie TD04A

Répartition des tâches :

La répartition est restée la même que pour le front :

	Mathilde : Todolist, Budget, BudgetMois
	Marie : Weather, Recipes, News
	Nivine : Horloge, Calendrier, Musique

#Documentation

Il faut avoir installé plusieurs librairies :

axios
lodash
mongoose
cors
homebrew (sur mac)
npm install --save-dev nodemon


Dans package.json : 

À ajouter en dessous de la ligne : "start": "node ./bin/www"
 la ligne : "startdev": "nodemon ./bin/www »

Dans le dossier bin, dans le fichier www, il faut modifier le port : passer de 3000 à 3001 (ligne 15)

Pour lancer le projet backend, effectuer la commande :
	npm run startdev


#Difficultés :

Il a été difficile de manipuler des données de Mongodb avec la librairie Recharts.

#Lien Trello : https://trello.com/b/JEUZo6I4/back