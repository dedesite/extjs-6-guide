# Etape 1 : Comprendre les containers et les layouts

## Ajouter un joli titre et un menu

Sencha Cmd nous a créé une application minimaliste. C'est bien car cela évite de commencer avec trop de fichier et permet de faire ce que l'on veut par la suite, mais bon on va pas bien loin avec ça.

La première chose à faire c'est de créer une classe qui dérive de
`Ext.Application` afin de spécifier le fonctionnement de notre application.

Vous allez donc créer un dossier `app` dans lequel on mettra tous les fichiers relatif à notre application. C'est une convention en ext car il est possible de découper l'application en `packages` et dans ce cas là on aurait aussi un dossier du même nom.

Créer ensuite un fichier `Application.js` dedans et mettez ce contenu :

```js
"use strict";

Ext.define("App.Application", {
	extend: "Ext.app.Application",

	name: "App",

	requires: ["App.*"],
	launch() {
		Ext.Viewport.add({
			xtype: "panel",
			header: {
				title: "La maison autonome"
			},
			html: "Hello World!",
			padding: 20,
			items: [
				{
					xtype: "toolbar",
					docked: "left",
					items: [
						{
							xtype: "button",
							text: "Soleil"
						}
					]
				}
			]
		});
	}
});
```

Ouvrez votre navigateur... ça a tout de suite plus de gueule non ?

Pour des explications détaillées sur ce que fait ce code, vous pouvez lire [le guide que j'ai écris sur GitHub](https://github.com/dedesite/extjs-6-guide/wiki/Etape-1-:-Comprendre-les-containers-et-les-layouts#explication-du-code)

## Faire joujou avec les layouts

Maintenant que l'on sait créer un panel avec des items dedans, on va tout chambouler afin de jouer un peu avec le système de layout d'ExtJs et ainsi comprendre les différentes fonctionnalités de mise en page.

Pour cet exercice, on va modifier le thème par défaut d'ExtJs afin de rendre plus visible les différents panel et de réduire la taille de leur `header` pour pouvoir en mettre plus.

La première chose à faire est de créer un fichier `app/Application.scss` dans lequel on met ce contenu :

```css
$panel-header-background-color: grey;
$panel-border-color: red;
$panel-header-font-size: 10;
$panel-header-padding: 0px;
$panel-header-line-height: 0px;
$panel-header-min-height: 0px;
$panel-header-title-padding: 0px;
$panel-border-color: red;
``` 
Je ne rentrerai pas dans les détails sur ce que fais ce code, on verra les thèmes plus tard.

Ensuite, vous allez modifier, temporairement, votre fichier `app/Application.js` pour enlever la `toolbar`, le `padding` et le contenu `html` de cette manière :

```js
Ext.Viewport.add({
	xtype: "panel",
	header: {
		title: "La maison autonome"
	},
	items: [
	]
});
```

Et à la place, on va rajouter toute sorte de panel avec des layouts spécifiques dedans.

Le but du jeu est d'avoir quelque chose qui ressemble à l'image se trouvant dans `img/layout_game.png`.

Pour vous aider, le type de layout utilisé ainsi que l'attribut flex est précisé dans le titre du panel.

Vous trouverez plus d'information sur les layouts dans la documentation.
- [Guide sur les layouts et containers](http://docs.sencha.com/extjs/6.5.2/guides/core_concepts/layouts.html) 
- [Doc API Ext.Container](http://docs.sencha.com/extjs/6.5.2/modern/Ext.Container.html) 
- [Doc API de Ext.layout.Auto (classe mère de tous les layouts)](http://docs.sencha.com/extjs/6.5.2/modern/Ext.layout.Auto.html)  
- [Doc API de Ext.layout.Box (utilisée pour les HBox et VBox)](http://docs.sencha.com/extjs/6.5.2/modern/Ext.layout.Box.html)

Pour le premier panel, celui que vous avez déjà, il faudrait donc rajouter l'élément suivant :
```js
layout: {
	type: "vbox"
},
```

Ou tout simplement :
```js
layout: "vbox",
```

Pour que les bordures s'affichent, il faut aussi rajouter pour tous vos panels ça :
```js
border: true,
```

Quand il y a écrit `flex`, c'est que l'attribut `flex` a été renseigné de cette manière :
```js
flex: 1, // Il est possible de mettre un autre chiffre
```

La propriété `align` se précise dans la déclaration du layout de cette manière :
```js
layout: {
	type: "vbox",
	align: "center"
},
```

On verra les formulaires plus en détail après, mais voilà comment on défini un champs de formulaire :
```js
{
	xtype: "textfield",
	label: "Last Name"
},
```

Enfin, il est possible de définir toute votre interface dans une seule déclaration en précisant les sous-items de cette manière :
```js
items: [{
	xtype: "panel",
	...,
	items: [{
		xtype: "panel",
		...,
		items: [{
			...
		}]
	}]
}]
```

Happy hacking !