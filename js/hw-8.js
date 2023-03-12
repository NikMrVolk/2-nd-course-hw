// Exercise №1
// =======================================================================================================================

// const getResult = (yourArr, callback) => {
// 	if (Number.isInteger(callback(yourArr))) {
// 		console.log(callback(yourArr));
// 	} else {
// 		console.log(`Your entered number isn't integer`);
// 	}
// }

// const mult = (arr) => arr.reduce((prev, el) => prev * el);
// const sum = (arr) => arr.reduce((prev, el) => prev + el);

// getResult([3, 4, 1, 9], mult);
// getResult([3, 4, 1, 9], sum);

// =======================================================================================================================



// Exercise №2
// =======================================================================================================================

// const users = [
// 	{ name: 'Jon', age: 22 },
// 	{ name: 'Richard', age: 18 },
// 	{ name: 'Anton', age: 32 },
// 	{ name: 'Lida', age: 23 },
// 	{ name: 'Bob', age: 44 }
// ];

// const getSortedArrayObj = (yourArrWithObjects) => {
// 	yourArrWithObjects.sort((a, b) => a.age - b.age);
// }

// getSortedArrayObj(users);

// =======================================================================================================================



// Exercise №3
// =======================================================================================================================

// const arr = [1, '4', false, 9, 'two', true];

// const each = (yourArr, callback) => {
// 	console.log(callback(yourArr));
// }

// const turnOverArr = (arr) => arr.reverse();

// const conversionToNumber = (arr) => {
// 	arr = arr.filter((el) => isNaN(el) === false);
// 	return arr.map(el => +el);
// }

// =======================================================================================================================



// Exercise №4
// =======================================================================================================================

// const dateOutput = () => {
// 	console.log(Date());
// 	const idInterval = setInterval(() => {
// 		console.log(Date());
// 	}, 3000);
// 	setTimeout(() => {
// 		clearTimeout(idInterval);
// 		console.log('30 second ended');
// 	}, 30000);
// }

// dateOutput();


// =======================================================================================================================


// Exercise №5
// =======================================================================================================================

// const calling = () => {
// 	console.log('Звоню!')
// };

// const beeps = (callback) => {
// 	setTimeout(() => {
// 		console.log('Идут гудки...');
// 		callback(talk);
// 	}, 1000);
// }

// const talk = () => {
// 	console.log('Разговор')
// }

// calling();
// beeps(talk);


// =======================================================================================================================
