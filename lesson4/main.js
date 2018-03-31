 let money,
	 	name,
 		time,
 		price = 100;

function start() {
		 money = prompt('Ваш бюджет?', '');

		 while (isNaN(money) || money === "" || money === null) {
		 		money = prompt('Ваш бюджет?', '');
		 }

		 name = prompt('Название вашего магазина?', '').toUpperCase();

		 time = 21;

}
//start();

var employers = {};


var mainList = {
	Budget: money,
	ShopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товаров будем продавать?", '');
			
			if ((typeof(a)) === 'string'  && (typeof(a)) !== null && a != '' && a.length < 50 ) {
				console.log("Все верно!");
				mainList.shopGoods[i] = a;
			} else {
				i = i -1;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0 ) {
					console.log('Такого не может быть!');
			} else if (time > 8 && time < 20) {
					console.log('Время работать!');
					mainList.open = true;
					}		else if (time < 24) {
							console.log('Уже слишком поздно!');
							}		else {
									console.log('В сутках только 24 часа!');
									}
	},
	budgetBay: function budgetBay() {
		var BudgetDay = money/30;
		alert("Ваш бюджет на 1 день: " + BudgetDay);
	},
	makeDiscount: function makeDiscount() {
	if (mainList.discount == true) {
			price = (price/100)*80;
		}
	},
	empl: function empl() {
		for (let i = 1; i < 5; i++) {
			let nameEmployee = prompt("Имя сотрудника?", '');
			mainList.employers[i] = nameEmployee;
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую товары", "");
		while (!isNaN(items) || items === "" || items === null) {
	 		 items = prompt("Перечислите через запятую товары", "");
		}

		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt("Подождите еще ", "")); 
		mainList.shopItems.sort();
		
	},
	overkill: function overkill () { 
		mainList.shopItems.forEach(function (item,i,arr) {
	
		alert("У нас вы можете купить: " + (i+1) + ": " + item);
	
		});
	}
};



for (var prop in mainList) {
	console.log("Наш магазин включает в себя: " + prop);
}

console.log(mainList);