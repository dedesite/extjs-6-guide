# La Maison autonome

# Etape 0 : Mise en place

* Installer Sencha Cmd
* Copier le sdk extjs dans un répertoire comme cela
	`C:\Users\Myname\sencha-sdks\ext-6.5.1`
* Configurer sencha cmd afin qu'il sache où trouver le SDK `sencha config --prop
	sencha.sdk.path=C:\Users\Me\sencha-sdks --save`
* Aller dans le repertoir de l'application
* Créer votre application : `sencha app init --ext@6.5.2 --modern
	AutonomousHouse`
* Lancer votre application : `sencha app watch`
* Configurer votre éditeur de texte avec prettier :
* npm install -g prettier
* installer le bon plugin pour votre éditeur :
	https://prettier.io/docs/en/editors.html
* Configurer la bonne indentation (2 espaces, pas de tab). Peu importe ce que
	vous préférez, l'idée c'est d'avoir un code consistant avec le reste de la
	communauté Js et autant avoir la même configuration qu'un maximum de gens,
	même si ce n'est pas la config par défaut de ExtJs...
* Ajouter aussi le "format on save" c'est plus pratique
* Faire en sorte que ESLint ne vous dise plus rien :)
