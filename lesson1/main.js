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


mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

alert("Ваш бюджет на 1 день: " + BudgetDay);
console.log(mainList);