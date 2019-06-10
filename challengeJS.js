// Bienvenue à ce premier challenge.
// Vous afficherez les resultats dans le terminal avec la commande:
// 'node <nom du ficher>'
// Pour que les resultats soient visible dans le terminal, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(fonction());
// ex: console.log(nom de la variable);
// Lorque vous avez validé un exercice, mettez le en commentaire !!




//Additionnez ces deux termes et stockez le résultat dans une variable
//puis l'afficher
const num1 = "4";
const num2 = "5";
//TODO

const num1 = "4";
const num2 = "5";

var n1 = parseInt (num1);
var n2 = parseInt (num2);
	var result = (n1 + n2);
	console.log(result)


//Variables et opérateurs
//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.

var v1 = parseInt (4);
var v2 = parseInt (5);
var vA = v1 + v2;
console.log(vA);



//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2

const villes = ['Marseille', 'Paris', 'Londres', 'Dublin', 'Berlin'];

console.log(villes [3]);

const ajout = villes.unshift('Rome');

const suppr = villes.splice(2,1);

console.log(villes);;


//Les boucles
//
//Boucler sur le tableau 'array1' afin de monter chaque
//éléments au carré et afficher le tableau.

const array1 = [2, 4, 8];

let result = array1.map(x => x*x);
console.log (result);
//TODO


// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat

const promo = [12, 13, 17, 3, 14, 18];

let sum = promo.reduce((a, b)=> a + b); 
let moyenne = sum/ promo.length;
console.log(moyenne);

// Afficher la date d'aujourd'hui sous la forme:
// "Nous somme le [jour/mois/année] et il est [heure/minute]"
// Afficher ensuite "bonjour" si il est en 7h du matin et 17h
// et "bonsoir" s'il est entre 17h et 00H

let today = new Date();
var jo = today.getDate();
var mo = today.getMonth();
var an = today.getFullYear();


function zero(x) {
	if (x < 10) {
		x = "0" + x;
	} return x;
}
	jo = zero(jo);
	mo = zero(mo);
	
var toD = jo + "/" + mo + "/" + an;
var hr = today.getHours();
var mn = today.getMinutes();
var sc = today.getSeconds();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	console.log("Nous sommes le " +(toD)+ " et il est " + (time));


	if (hr < 17 && hr >= 7){
		console.log("Bonjour");
	}
	else if (hr >= 17 && hr < 24){
		console.log("Bonsoir");
	}
	else {
		console.log("ZzzzZZzz");
	}
	
//les conditions
//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18

var age = 24
	if (age >= 18){
		console.log("Peut voter");
	}

	else {
		console.log("Ne peut pas voter");
	}


//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
const add = (num1, num2) => {

var result = num1 + num2;
	return result;
};

	const n1 = 3;
	const n2 = 4;
	result = add (n1, n2);

console.log(result);





//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.

const square = (number) => {
 	return (Math.pow(number, 2));
};

console.log(square(6));



// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.

const beatles = ["paul", "john", "ringo", "george"];

const beatlesl = beatles.map(listy => {
    return listy.toUpperCase();
})
	console.log(beatlesl);



//Créez un tableau nommé tab dont le premier
//élément est -2, le deuxième 3 et le troisième 4
//Créez une fonction qui soustrait chaque éléments du tableau au suivant.

var tab = [-2, 3, 4];
let ressous; 
const soustrait = (tableau) => {

ressous = tab.reduce((x, y) => y - x);
	return ressous;
};
soustrait (tab);

console.log(ressous);






//Créez une fonction qui renvoie la somme de chaque éléments du
//tableau si celui-ci est supérieur à 0.
const array2 = [-2, 4, -5, 3, 6];
const addPositiveNumber = (tableau) => {




  
};




//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.

const périmetreCercle = (r) => {
    return 2 * Math.PI * r;
};

	console.log(périmetreCercle(5));


//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"

const mot = 'simplon';
function capitalize(word){
    
    const firstl = word[0].toUpperCase();
   	const reste = word.substr(1).toLowerCase();
    const final = firstl + reste;
    
    return final;
};
console.log(capitalize(mot))


//Odd or Even
//Créez une fonction qui prend un nombre en paramètre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.



//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
//Aide : join(), split(), reverse()
const reverseWord = (word) => {
  //TODO
};


//créez une fonction qui renvoie la somme de tableau
const nombres = ["3", "5", "6", "2"];
