# README #

Ceci est un home test orienté backEnd pour le process de bruce.work

## enoncé

Le but de l'exercice est de creer une fonction qui verfie que les titres de sejour d'un candidat, couvrent bien al période de la mission.

La fonction appelée, sera la fonction [verify](./src/index.ts), qui prends en argument :
- un objet [mission](./src/frame.ts) qui a pour propriétés dateStart et dateEnd
- un tableau d'objets [TitreDeSejour](./src/frame.ts) qui a (aussi) pour propriétés dateStart et dateEnd

La fonction demandé devra retourner un boolean en fonction du resultat.

__nota__ : Les valeurs dateStart et dateEnd sont considérées 'incluses', c'est a dire que si une dateEnd est au 24 Juillet, on considère que le titre ou mission comprend cette journée.

## instructions

1. cloner ce repo
2. `npm ci` pour installer les dépendances
3. `npm run build` pour build le projet
4. `npm run verify` pour lancer le test de verification


Merci de bien vouloir nous répondre en reprenant le projet et en le commitant sur le Git de votre choix.

Vous êtes libre d'utiliser n'importe quel librairie, architecture de fichier ou tout outil qui vous sera utile.

Si vous n'êtes pas à l'aise avec le typescript, vous pouvez ecrire en vanillaJS votre code.