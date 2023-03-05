// Exercise №1
// =======================================================================================================================

// The first way Function Declaration

// function showLessNumber(numberOne, numberTwo) {
// 	if (numberOne < numberTwo) {
// 		return numberOne;
// 	} else {
// 		return numberTwo;
// 	}
// }

// The second way Function Expression

// const showLessNumber = function (numberOne, numberTwo) {
// 	if (numberTwo < numberOne) {
// 		return numberTwo;
// 	} else {
// 		return numberOne;
// 	}
// }

// The third way Arrow Functions

// const showLessNumber = (numberOne, numberTwo) => {
// 	if (numberTwo < numberOne) {
// 		return numberTwo;
// 	} else {
// 		return numberOne;
// 	}
// }

// =======================================================================================================================

// Exercise №2
// =======================================================================================================================

// The first way Function Declaration

// function determiningParityNumber (yourNumber) {
// 	if (yourNumber % 2 === 0) {
// 		return 'Even Number';
// 	} else {
// 		return 'Odd number';
// 	}
// }

// The second way Function Expression

// const determiningParityNumber = function (yourNumber) {
// 	if (yourNumber % 2 === 0) {
// 		return 'Even Number';
// 	} else {
// 		return 'Odd number';
// 	}
// }

// The third way Arrow Functions

// const determiningParityNumber = (yourNumber) => {
// 	if (yourNumber % 2 === 0) {
// 		return 'Even Number';
// 	} else {
// 		return 'Odd number';
// 	}
// }

// =======================================================================================================================

// Exercise №3
// =======================================================================================================================

// Part One

// const showNumberSquared = (yourNumber) => {
// 	console.log(yourNumber * yourNumber);
// }

// Part TWo

// const returnSquareNumber = (yourNumber) => yourNumber * yourNumber;

// =======================================================================================================================

// Exercise №4
// =======================================================================================================================

// const sayHelloUser = () => {
// 	let yourAge = +prompt('Enter your age', '17');
// 	if (yourAge >= 0 && yourAge <= 12) {
// 		alert('Hello, friend!');
// 	} else if (yourAge > 12) {
// 		alert('Welcome!')
// 	} else {
// 		alert('You entered the wrong age');
// 	}
// }

// =======================================================================================================================

// Exercise №5
// =======================================================================================================================

// const checkingAndMultiplyingNumbers = (yourNumberOne, yourNumberTwo) => {
// 	if (isNaN(yourNumberOne) || isNaN(yourNumberTwo)) {
// 		return "One or Two your number isn't a number";
// 	} else {
// 		return yourNumberOne * yourNumberTwo;
// 	}
// }

// =======================================================================================================================

// Exercise №6
// =======================================================================================================================

// const checkingAndRisingNumberCube = () => {
// 	let yourNumber = +prompt('Enter your number', '4');
// 	if (!isNaN(yourNumber)) {
// 		return `${yourNumber} when cubed it equals ${yourNumber ** 3}`;
// 	} else {
// 		return "Argument passed is not a number";
// 	}
// }

// =======================================================================================================================

// Exercise №7
// =======================================================================================================================

const playInSeasons = (yourNumberMonth) => {
	if ((yourNumberMonth >= 1 && yourNumberMonth <= 2) || yourNumberMonth === 12) {
		return 'Winter';
	} else if (yourNumberMonth >= 3 && yourNumberMonth <= 5) {
		return 'Spring';
	} else if (yourNumberMonth >= 6 && yourNumberMonth <= 8) {
		return 'Summer';
	} else if (yourNumberMonth >= 9 && yourNumberMonth <= 11) {
		return 'Autumn';
	} else {
		return 'You entered not correct value.'
	}
}

// =======================================================================================================================