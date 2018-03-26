var Budget = +prompt('Ваш бюджет?');
var ShopName = prompt('Название вашего магазина?');
var shopGoods = [prompt('Какой тип товаров будем продавать?'), 
								prompt('Какой тип товаров будем продавать?'),
								prompt('Какой тип товаров будем продавать?')];

var employers = {};

var BudgetDay = Budget/30;
var open = confirm("Магазин открыт?");

alert("Ваш бюджет на 1 день: " + BudgetDay);

var mainList = {
	Budget,
	ShopName,
	shopGoods,
	employers,
	open
};
console.log(mainList);