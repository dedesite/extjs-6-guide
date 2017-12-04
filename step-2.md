# Etape 2 : formulaires et ViewModel

## Création d'un formulaire

Le but est de créer un formulaire qui s'affichera dans la partie principale de
notre application. On va utiliser pour cela un panel avec un layout de type form
en partant du squelette de base créé dans l'étape 1.

Il faudra créer :

* Un champ "Nombre de W/h consommés /j" de type number, d'une valeur minimale de
	0 et maximal de 50000
* Un champ "Nb. de jours d'autonomie", valeur par défaut 3, min 1, max 6
* Un champ "Utilisation d'un onduleur ?" de type checkbox
* "Profondeur maximale de décharge des batteries", défaut 50, min 0, max 90
* "Voltage des batteries", de type spinner, défaut 12, step 6, min 6, max 24
* "Capacité des batteries en Ah", default 100, min 10, max 1000

Puis ensuite on va rajouter un champs Label (qui ne fera pas partie du layout
form), qui affichera pour l'instant : "<strong>Nombre de batteries nécessaires :
4</strong>" (on fait un peu d'HTML)

## Définition d'un ViewModel

### Le `bind`

Le viewModel permet de "binder" l'affichage ou les propriétés des composants sur
des changements de valeur. Ici, ce qu'on cherche à faire c'est déclencher un
recalcul du nombre de batteries nécessaires dès qu'une des variables du
formulaire à changée.

On pourrait faire ça avec un ViewController et écouter sur les événements change
mais je me dis que c'est pas mal de passer par un ViewModel pour ça.

Pour que l'affichage du label fasse appel à un viewModel, on va légèrement
modifier la définition de son champs html on passe de ça :

```js
html: "<strong>Nombre de batteries nécessaires : 4</strong>";
```

à ça :

```js
bind: {
	html: "<strong>Nombre de batteries nécessaires : {updateBatteryNumbers}
}
```

Ce qui est entre accolade s'appelle une formulas. C'est une fonction (qu'on va
définir) qui sera appelé automatiquement qu'une des variables qu'elle utilise
changera de valeur.

### Les `formulas`

La syntaxe des formulas est pas des plus évidentes et j'invite à lire les guides
d'architecture "View Models & bindings" et "View Model internals" pour
comprendre un peu plus de quoi il retourne. C'est assez obscure au début, puis
après ça fait sens, même si c'est pas génial comme syntaxe...

On pourrait créer un fichier à part pour le `ViewModel` mais pour l'instant on
ne veut avoir qu'une formulas donc on va la définir dans notre vue.

Il faut rajouter à la déclaration de notre Application, les éléments suivants :

```js
viewModel: {
	formulas: {
		updateBatteryNumbers: {
			/** Code de la formulas **/
		}
	}
}
```

Bien que la syntaxe mise en avant dans la documentation pour les formulas est de
ce type (syntaxe implicite) :

```js
name: function (get) {
    var fn = get('firstName'), ln = get('lastName');
    return (fn && ln) ? (fn + ' ' + ln) : (fn || ln || '');
}
```

Je préconise d'utiliser une syntaxe bien moins sympa mais qui évite de gros
soucis (explications oral du formateur recquise mais disons que le
`get('firstName')` qu'on voit plus haut fait des choses assez horribles).

L'idée c'est de définir les dépendances de notre formula avant la fonction elle
même. Dans notre cas, notre formula dépend de tous les champs de notre
formulaire, il faut donc tous les lister en utilisant la `reference` qu'on leur
aura attribué. C'est ce que l'on appel le binding implicite.

Exemple :

```js
something: {
    bind: {
        firstName: '{firstName.value}', // On récupère la valeur du champs de formulaire firstName
        lastName: '{lastName.value}'
    },
    get: function (params) {
        return params.firstName + params.lastName; // Evite d'avoir à utiliser la fonction `get`
    }
}
```

Note : pour les checkbox c'est pas `value` mais `checked` qu'on doit utiliser.

Note 2 : Le calcul pour le nombre de batteries peut être fournit si vous voulez.
