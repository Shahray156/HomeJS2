//1.
let password = 'пароль';
let welcome = prompt("Введите пароль");
if (password ='пароль') {
    alert("Пароль введен верно");
  }  else { 
    alert("Пароль введен неправильно");
}

//2.

let num = 5;
if (num > 0 && num < 10) {
alert("Верно");
} else {
 alert("Неверно");
}

//3.
let d = 44;
let e = 107;
if (d > 100 || e > 100) {
    alert("Верно");
} else {
    alert("Неверно");
}

// 4.

let a = "2";
let b = "3";
alert(Number (a) + Number (b));

//5.

let monthNumber = 12
switch (monthNumber) {
	case '1':
    case '2':
    case '12':
		console.log('Это зима');
		break;
	case '3':
    case '4':
    case '5':
		console.log('Это весна');
		break;
	case '6':
    case '7':
    case '8':
		console.log('Это лето');
		break;  
    case '9':
    case '10':
    case '11':
        console.log('Это осень');
		break;  
	default: console.log('Такого месяца, к сожалению,нет');
		break;
}

// 7.

let meaning = prompt('Пожалуйста, введите любое число');
console.log(isNaN(meaning));

if (meaning % 2 == 0) {
    alert("Число четное");
} else {
    alert("Число нечетное");
}

// 8.

let clientOS = prompt("Вы используете Android или iOS?")
if (clientOS == "Android") {
    alert("Установите версию приложения для Android по ссылке");
 } else if (clientOS == "iOS") {
    alert("Установите версию приложения для iOS по ссылке");
 } else {
    alert("Error");
 }


// 9.

let clientDeviceYear = 2015;
let device = prompt ("Вы используете Android или iOS?");

if (device == "Android"  && clientDeviceYear < 2015) {
    alert("Установите облегченную версию приложения для Android по ссылке");
}
    if (device == "iOS" && clientDeviceYear <= 2015) {
       alert("Установите облегченную версию приложения для iOS по ссылке");
    } else {
        alert("Можете установить последнюю версию по ссылке");
}
