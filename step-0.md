La Maison autonome
====================

## Étape 0 : Hello world et linter

* Installez Sencha Cmd
* Copiez le sdk extjs dans un répertoire comme cela
	`C:\Users\Myname\sencha-sdks\ext-6.5.1`
* Configurer sencha cmd afin qu'il sache où trouver le SDK `sencha config --prop
	sencha.sdk.path=C:\Users\Me\sencha-sdks --save`
* Allez dans le répertoire de l'application
* Créez votre application : `sencha app init --ext@6.5.2 --modern
	App`
* Lancez votre application : `sencha app watch`
* Configurez votre éditeur de texte avec prettier :
    * `npm install -g prettier`
    * installer le bon plugin pour votre éditeur https://prettier.io/docs/en/editors.html
    * Configurer la bonne indentation (2 espaces, pas de tab). Peu importe ce que vous préférez, l'idée c'est d'avoir un code consistant avec le reste de la
 communauté Js et autant avoir la même configuration qu'un maximum de gens,
 même si ce n'est pas la config par défaut de ExtJs...
    * Ajouter aussi le "format on save" c'est plus pratique
* Configurez votre éditeur de texte avec ESLint
    * `npm install -g eslint`
    * installer le bon plugin pour votre éditeur : https://eslint.org/docs/user-guide/integrations
* Ouvrez votre navigateur à cette adresse : `http://localhost:1841/`
* Faire en sorte que ESLint ne vous dise plus rien :)
