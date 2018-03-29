 let money,
	 	name,
 		time,
 		price = 100;

function start() {
		 money = prompt('Ваш бюджет?');

		 while (isNaN(money) || money === "" || money === null) {
		 		money = prompt('Ваш бюджет?');
		 }

		 name = prompt('Название вашего магазина?').toUpperCase();

		 time = 21;

}
start();

var employers = {};


var mainList = {
	Budget: money,
	ShopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false

};

function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товаров будем продавать?");
			
			if ((typeof(a)) === 'string'  && (typeof(a)) !== null && a != '' && a.length < 50 ) {
				console.log("Все верно!");
				mainList.shopGoods[i] = a;
			} else {
				i = i -1;
			}
		}
}

chooseGoods();

// var n = 0;
// while(n < 3) {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	mainList.shopGoods[n] = a;
// 	n++;
// }

// var n = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
//  	mainList.shopGoods[n] = a;
//  	n++;
// } 
// while (n <3);
function workTime(time) {
		if (time < 0 ) {
				console.log('Такого не может быть!');
		} else if (time > 8 && time < 20) {
				console.log('Время работать!');
				}		else if (time < 24) {
						console.log('Уже слишком поздно!');
						}		else {
								console.log('В сутках только 24 часа!');
								}
}
workTime(18);

function budgetBay() {
	var BudgetDay = money/30;
	alert("Ваш бюджет на 1 день: " + BudgetDay);
}
budgetBay();

function discount() {
	var disc = confirm("У вас есть скидка");
		mainList.discount = disc;
	if (disc === true) {
		return alert(price/100*80);
		
	} else {
		return alert(price);
	}
}
discount();

function empl() {
	for (let i = 1; i < 5; i++) {
		let nameEmployee = prompt("Имя сотрудника?");
		mainList.employers[i] = nameEmployee;
	}
}
empl();

console.log(mainList);