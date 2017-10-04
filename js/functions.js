function RectangleLargerSide( width, height ) {
	/* Le bord plus longue d'un rectangle */
	if (width>height){
		return width;
	}
	return height;
	// return Math.max (width, height);
}

function TriangleLargestSide( a, b, c ) {
	/* Le bord le plus longue d'un triangle */
	// 	if (a >= b && a >= c){
	// 		return a;
	// 	};
	// 	if (b >= a && b >= c){
	// 		return b;
	// 	};
	// 	else (c >= a && c >= b)
	// 	return Math.max (a, b, c);
	// }
	return Math.max (a, b, c);
}

function checkIfRectangleIsSquare( width, height ) {
	/* vérifie si rectangle est carré */
	return width===height;
}

function checkIfHrefStartsWithHash( string ) {
	/* vérifie si le lien commence par hash (#) */
	// if (string.charAt(0)==="#"){
	// 	return true;
	// }
	// else {
	// 	return false;
	// }
	if (string.startsWith("#")){
		return true;
	}else{
		return false;
	}
}

function checkIfFileIsPNGFile( string ) {
	/* vérifie si le fichier est un png */
	if (string.endsWith(".png") || string.endsWith(".PNG")){
		return true;
	}else{
		return false;
	}
}

function selectElementsStartingWithA(array) {
	/* choisis tous les élémenent commencant par a ou A */
	var tab = [];
	for (i=0; i < array.length; i++){
		var elementarray = array[i];
		if (elementarray.charAt(0)==="a" || elementarray.charAt(0)==="A"){
			tab.push(elementarray);
		}
	}
	return tab;
}

function allElementsExceptFirstThree(array) {
	/* choisis tous les élémenent sauf les trois premières */
	var tab = [];
	for (var i=3; i<array.length; i++){
		tab.push(array[i]);
	}
	return tab;
}

function addElementToBeginning(array, element) {
	/* ajout un élément au début du tableau array */
	// array.splice(0, 0, "element");
	array.unshift(element);
	return array;
};

function removeElementAtGivenPosition(array, position) {
	/* supprime l'élément en position donnée */
	array.splice(position, 1);
	return array;
};

function removeLastElement(array) {
	/* supprime le dernier 'élément */
	// array.splice(array.length - 1, 1);
	array.pop();
	return array;
};

function makeNegative(number) {
	/* un nombre négative (ex. 5 -> -5, mais -5 -> -5) */
	if (number > 0){
		number *= -1;
	};
	return number;
};

function sumNumbers(array) {
	/* calcule la somme de tous les éléments dans le tableau */
	var result = 0;
	for (var i=0; i<array.length; i++){
		result += array[i];
	}
	return result;
};

function calculateAverage(array) {
	/* calcule la moyenne de tous les éléments dans le tableau */
	var result = 0;
	for (var i=0; i<array.length; i++){
		result += array[i];
	}
	result /= array.length;
	return result;
};

function longestWord(array) {
	/* choisis le mot le plus longue dans le tableau */
	var mot = 0;
	var mots = "";
	for (var i=0; i<array.length; i++) {
		if(array[i].length > mot){
			mot = array[i].length;
			mots = array[i];
		};
	}
	return mots;
};

function getAllLetters(array) {
	/* liste en ordre alphabétique toutes les lettres utilisées (sans répetitions) */
	return;
};

function reverseString(string) {
	/* renverse l'ordre des signes dans un string */
	return;
};

function checkIfPalindrome(string) {
	/* vérifie si le texte se lit pareil dans 2 sens (gauche->droit et droit->gauche) */
	return;
};

function checkIfOdd(integer) {
	/* vérifie si le nombre et impair */
	return;
};

function checkIfMultipleOfSeven(integer) {
	/* vérifie si le nombre et  */
	return;
};

function factorial(number) {
	/* Calcule le */
	return;
};

function convertIntegerToBinaryString(integer) {
	return;
};

function convertBinaryToBase10(string) {
	return;
};

function convertIntegerToHexadecimal(integer) {
	return;
};

function convertHexadecimalToInteger(string) {
	return;
};
