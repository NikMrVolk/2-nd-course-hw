// Exercise №1
// =======================================================================================================================

// let myString = 'Hello world';

// The first way

// let myNewString = myString.toUpperCase();
// console.log(myNewString);


// The second way

// const uperText = (yourString) => yourString.toUpperCase();
// console.log(uperText(myString));

// =======================================================================================================================



// Exercise №2
// =======================================================================================================================

// const myArr1 = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const myArr2 = ['яблоко', 'груша', 'гриб', 'огурец'];
// const myArr3 = ['Дом', 'Банк', 'Больница', 'Театр'];

// let myString1 = 'ко';
// let myString2 = 'гру';
// let myString3 = 'Кино';

// const searchStart = (arr, string) => arr.map(el => el.toLowerCase()).filter(el => el.startsWith(string.toLowerCase()));

// =======================================================================================================================



// Exercise №3
// =======================================================================================================================

// const myNumber = 32.58884;

// const myNumberToLesserPresence = Math.floor(myNumber);
// const myNumberToGreaterWhole = Math.ceil(myNumber);
// const myNumberToNearestInteger = Math.round(myNumber);

// =======================================================================================================================

// Exercise №4
// =======================================================================================================================

// const myArr = [52, 53, 49, 77, 21, 32];

// const smallestNumberArray = myArr.reduce((prev, el) => Math.min(prev, el));
// const largestNumberArray = myArr.reduce((prev, el) => Math.max(prev, el));

// =======================================================================================================================



// Exercise №5
// =======================================================================================================================

// const showRandomNumber = (minValue, maxValue) => {
// 	console.log(Math.round(Math.random() * (maxValue - minValue) + minValue));
// }

// showRandomNumber(1, 10);

// =======================================================================================================================



// Exercise №6
// =======================================================================================================================

// const myNumberForArr = 100;

// const getRandomArrNumbers = number => {
// 	const myArr = [];

// 	for (let index = 0; index < Math.floor(number / 2); index++) {
// 		myArr.push(Math.round(Math.random() * number));
// 	}

// 	console.log(myArr);
// }

// getRandomArrNumbers(myNumberForArr);

// =======================================================================================================================



// Exercise №7
// =======================================================================================================================

// const outputIntermediateNumber = (numberStartRange, numberEndRange) => {
// 	console.log(Math.round(Math.random() * (numberEndRange - numberStartRange) + numberStartRange));
// }

// =======================================================================================================================



// Exercise №8
// =======================================================================================================================

// let currentDate = new Date();
// console.log(currentDate)

// =======================================================================================================================



// Exercise №9
// =======================================================================================================================

// let currentDate = new Date();
// console.log(currentDate);

// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);

// =======================================================================================================================



// Exercise №10
// =======================================================================================================================

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// 	"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();

// const shawRussianDate = (yourDate) => {
// 	console.log(`Дата: ${yourDate.getDate()} ${months[yourDate.getMonth()]} ${yourDate.getFullYear()}`);
// 	console.log(`Время: ${yourDate.getHours()} ${yourDate.getMinutes()} ${yourDate.getSeconds()}`);
// }

// shawRussianDate(myDate);

// =======================================================================================================================



// Exercise №11
// =======================================================================================================================

const rememberWords = () => {
	let arrWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	arrWords = arrWords.sort(() => Math.random() - 0.5).join(' ');
	alert(arrWords);

	arrWords = arrWords.toLowerCase()
	arrWords = arrWords.split(' ');

	const firstFruit = prompt('Какой фрукт был назван первым?').toLowerCase();
	const secondFruit = prompt('Какой фрукт был назван последним?').toLowerCase();

	if (firstFruit === arrWords[0] && secondFruit === arrWords.splice(-1).toString()) {
		alert('Вы угадали!');
	} else if (firstFruit === arrWords[0] || secondFruit === arrWords.splice(-1).toString()) {
		alert('Вы были близки к победе!');
	} else {
		alert('Вы ответили неверно!');
	}
}



// =======================================================================================================================