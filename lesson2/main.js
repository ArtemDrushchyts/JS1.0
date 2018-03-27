var money = +prompt('Ваш бюджет?');
var name = prompt('Название вашего магазина?');


var employers = {};

var BudgetDay = money/30;

var mainList = {
	Budget: money,
	ShopName: name,
	shopGoods: [],
	employers: {},
	open: false
};

for (let i = 0; i < 3; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string'  && (typeof(a)) !== null && a != '' && a.length < 50 ) {
		console.log("Все верно!");
		mainList.shopGoods[i] = a;
	} else {
		console.log("Неверно");
	}
}


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

alert("Ваш бюджет на 1 день: " + BudgetDay);
console.log(mainList);