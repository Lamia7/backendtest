# README #

Ceci est un home test orienté backEnd pour le process de bruce.work

## enoncé

Le but de l'exercice est de creer une fonction qui verifie que les titres de sejour d'un candidat, couvrent bien l'ensemble de la période de la mission. c'est a dire, que pour chaque jour de la mission, il y a bien un titre de sejour qui couvre la mission

La fonction appelée, sera la fonction [verify](./src/index.ts), qui prends en argument :

- un objet [Mission](./src/frame.ts) qui a pour propriétés dateStart et dateEnd
- un tableau d'objets [TitreDeSejour](./src/frame.ts) qui a (aussi) pour propriétés dateStart et dateEnd

La fonction demandée devra retourner un boolean en fonction du resultat.

__nota__ : Les valeurs dateStart et dateEnd sont considérées 'incluses', c'est a dire que si une dateEnd est au 24 Juillet, on considère que le titre ou mission comprend cette journée.

## instructions

1. cloner ce repo
2. `npm ci` pour installer les dépendances
3. `npm run build` pour build le projet (`npm run winbuild` on windows)
4. `npm run verify` pour lancer le test de verification (`npm run winverify` on windows)


Merci de bien vouloir nous répondre en reprenant le projet et en le commitant sur le Git de votre choix.

Vous êtes libre d'utiliser n'importe quel librairie, architecture de fichier ou tout outil qui vous sera utile.

Si vous n'êtes pas à l'aise avec le typescript, vous pouvez ecrire en vanillaJS votre code.

A noter que les tests de verification ne couvrent pas l'ensemble des cas possible.

Bonne chance.