# Octavia

## Front Quasar
## Installation Windows / MacOS

Pour pouvoir faire l'installation , il va vous falloir quelque pré requis.
Il vous faut node et npm d'installer disponnible en cli.

[Node](https://nodejs.org/en/ "Node")

Une fois que c'est bon il va falloir installer les cli de vuejs et quasar

`npm install -g vue-cli`

`npm install -g quasar-cli`

Quand c'est ok clonez le projet
Il a 2 façons de build le projet.

### Dev

Pour le dev du coup au quotidien, il faut faire dans le projet

`quasar dev`

ça va lancer une compilation et dès qu'un chanegement est fait dans le code ça relance un build auto en faisant passer le linter.
C'est ce qu'il faudra utiliser au quotidien.
Une fois la compilation terminée, le site se lance tout seul et sinon il est sur localhost:8080 par défaut. 

### Prod

Une fois qu'on sera en prod

`quasar build `

Et la ça génère tout comme il faut

## Connexion au Back

On passe par Axios pour faire les requêtes API. Il y a un fichier de conf qui s'appelle config.js et dedans vous aller voir une constante baseUrl. Il vous suffit de modifier l'url par c'elle généré par Laragon. Attention à ne plus commit votre config sauf au besoin.

## Outils de dev

Pour débuguer VueJS le mien est d'installer [Extension Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd "Extension Chrome"). ça rajoute un onglet dans la console chrome. Dedans vous aurez accès au component ainsi qu'à l'état du store en temps réel.
 
 
