## ES6

### "strict mode";

strict mode non fonctionne pas avec `callParent` car en interne il utilie
`Function.caller` qui ne fait plus partie du `strict mode`

Utiliser de préférence :

`this.superclass.nomDeFonction.apply(this, arguments);`

## Route ?

Est-ce que dès qu'on a un viewController dans le code la route s'active ?

Comment fait-on pour activer la bonne vue ?

## Documentation

ATTENTION au flag `classic` _C_ et `modern` _M_

## Debugger application

Possibilité de mettre `debugger;` dans un `XTemplate`

Utiliser la console pour récupérer des composants de vues, des stores

Etre sur une build `debug`

Utiliser
[disableCaching](http://docs.sencha.com/extjs/6.0.0/classic/Ext.Loader.html#cfg-disableCaching)
dans `Ext.Loader` pour ne pas avoir de cache et ne pas avoir `?dc=1234567` à la
fin de l'url pour pouvoir reload la page sans break point.

Ou alors mettre `?disableCacheBuster#home` à la fin de l'url

## Pivot Grid

"Condense" plusieurs données dans un format plus compréhensible

## Grille

Attention les renderer et les tpl ne marche que pour les types de cellule par
defaut

Attention à bien mettre cell: {encodeHtml: false}

Est-ce que les `renderer` sont appelé après que le store d'une `grid` soit
appelé ?

Volonté de faire :

* du tri
* de la recherche
* des filtres personnalisés
* de la pagination
* des renderer
* des checkbox
* gestion des clicks sur cellules
* gestion de couleurs sur lignes et colonnes
* pouvoir grouper des éléments de la grilles
* pouvoir déplier le contenu d'une grille

Mettre la grille en editable

En modern :

```js
plugins: {
  grideditable: true;
}
```

En classic :

```js
editable: true;
```

## XTemplate

Comment les écrires ?

Possibilité d'avoir des fonctions helpers

Les différents controles (if etc.)

Utiliser les string literal pour le multiligne

## Vue

Expliquer qu'on peut définir des options par défaut dans la vue comme ça on
limite ce que l'on écrit.

* Bien comprendre le lien entre vue, ViewModel et les records

## Formulaires

Validation

* Simple, juste un message

* Regex, pour des cas plus complexes

* `VTypes` pour réutiliser des validateurs

Attention : `loadRecord` n'existe plus en `modern`, utiliser un ViewModel avec
record dedans

Parler des

## Model

* Pour définir un type de tri différent pour une donnée

```js
name: 'status',
sortType: function (status) {
  // We want this order : up, down, unknow
  switch (status.state) {
  case 'up':
    return 'a';
  case 'down':
    return 'b';
  case 'unknow':
    return 'c';
  default:
    return 'd';
  }
}
```

* idProperty

* calculate

* convert

- customTypes

- validation

```js
{
  name: 'nsrpcIneligibilityReasons',
  statics: {
    messages: {
      'unsupported-fw-version': _('Version not supported. Minimum version: {version}', {
        version: '2.4.0'
      }),
      'disconnected-fw': _('Firewall is disconnected')
    }
  },
  // transform the key (as rawly served by the server) into an object
  // with a field and a message associated.
  convert: function (reasons) {
    return mapReasons(this.statics.messages, reasons);
  },
  persist: false
}
```

## Store

Pour récupérer un singleton Ext.getStore("iddustore")

Attention à l'événement `load` qui est pas déclenché si le store est déjà `load`

Utilisation de `Promise`

Comment promisifié le load ? => `SecurityTabController.js`

Comment faire des store partagés mais sur lesquels on applique des filtres
spécifiques (sharedStore ?)

## Proxy

Bien parler du `reader`

## Exercices

TODO

* Avoir une interface qui mix modern et classic

* Avoir des champs calculés dans le modèle (sans doute mieux que le ViewModel
  pour le calcul de la batterie)
* Gérer les routes
* Gérer les events dans un ViewController
* Créer un évènement personnalisé
* Création d'un TreeList

- Créer un override
- Modifier le thème
- Internationnaliser l'application
- Créer un widget personnalisé
- Le mettre dans un package et l'utiliser dans l'application

DONE

* Rajouter des XTemplate dans la grille
* Avoir une interface responsive

FINISH

## Override

Conseil : faire des overrides spécifique à la version d'ExtJs et mettre des
erreurs si la version à changée

## Controller

Comment faire pour que le this des `control` ne soit plus `Window` mais le
`ViewController`
