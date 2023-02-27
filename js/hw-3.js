
// Exercise №1
// =======================================================================================================================

// let password = 'password';
// let passwordUser = String(prompt('Please, enter password.'));

// The first way

// password === passwordUser ? console.log('Password entered correctly') : console.log('Password entered incorrectly');

// The second way

// if (password === passwordUser) {
// 	console.log('Password entered correctly');
// } else {
// 	console.log('Password entered incorrectly');
// }

// The third way

// switch (password) {
// 	case passwordUser:
// 		console.log('Password entered correctly');
// 		break;
// 	default:
// 		console.log('Password entered incorrectly');
// 		break;
// }

// =======================================================================================================================


// Exercise №2
// =======================================================================================================================

// let c = +prompt('Your integer', '1')

// The first way

// (c > 0 && c < 10) ? console.log('Right') : console.log('Wrong');

// The second way

// if (c > 0 && c < 10) {
// 	console.log('Right');
// } else {
// 	console.log('Wrong');
// }

// =======================================================================================================================


// Exercise №3
// =======================================================================================================================

// let d = +prompt('Enter first integer', '10');
// let e = +prompt('Enter second integer', '15');

// The first way

// (d > 100 || e > 100) ? console.log('Right') : console.log('Wrong');

// The second way

// if (d > 100 || e > 100) {
// 	console.log('Right');
// } else {
// 	console.log('Wrong');
// }

// =======================================================================================================================


// Exercise №4
// =======================================================================================================================

// let a = '2';
// let b = '3';

// The first way
// alert(+a + +b);

// The second way
// alert(Number(a) + Number(b));

// The third way
// alert(parseInt(a, 10) + parseInt(b, 10));

// =======================================================================================================================

// Exercise №5
// =======================================================================================================================

// let monthNumber = +prompt('Choose number month', '1');

// switch (monthNumber) {
// 	case 1:
// 	case 2:
// 	case 12:
// 		console.log('You choose winter month');
// 		break
// 	case 3:
// 	case 4:	
// 	case 5:
// 		console.log('You choose spring month');
// 		break
// 	case 6:
// 	case 7:
// 	case 8:
// 		console.log('You choose summer month');
// 		break
// 	case 9:
// 	case 10:
// 	case 11:
// 		console.log('You choose autumn month');
// 		break
// 	default:
// 		console.log('You choose uncorrect number month');
// 		break;
// }

// =======================================================================================================================

// Exercise №7
// =======================================================================================================================

// let yourNumber = prompt('Please, choose integer');

// if (isNaN(yourNumber)) {
// 	alert("You don't wright a number");
// } else {
// 	if (yourNumber % 2 === 0) {
// 		alert('You wright even number');
// 	} else {
// 		alert('You wright odd number');
// 	}
// }

// =======================================================================================================================

// Exercise №8
// =======================================================================================================================

// let clientOS = +confirm('Do you use Android?');

// if (clientOS === 0) {
// 	console.log('Install the iOS version of the app from the link');
// } else {
// 	console.log('Install the Android version of the app from the link');
// }

// =======================================================================================================================

// Exercise №9
// =======================================================================================================================

// let clientOS = +confirm('Do you use Android?');
// let clientDeviceYear = +prompt('Wright device year create')

// if (clientDeviceYear >= 2015) {
// 	if (clientOS === 0) {
// 		console.log('Install the iOS version of the app from the link');
// 	} else {
// 		console.log('Install the Android version of the app from the link');
// 	}
// } else {
// 	if (clientOS === 0) {
// 		console.log('Install the light version of the app for iOS from the link');
// 	} else {
// 		console.log('Install the lite version of the Android app from the link');
// 	}
// }

// =======================================================================================================================