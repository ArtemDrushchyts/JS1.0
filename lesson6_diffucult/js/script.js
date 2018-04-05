let openBtn = document.getElementById('open-btn');

let nameValue = document.getElementsByClassName('name-value')[0];

let budgetValue = document.getElementsByClassName('budget-value')[0];

let goodsValue = document.getElementsByClassName('goods-value')[0];

let itemsValue = document.getElementsByClassName('items-value')[0];

let employersValue = document.getElementsByClassName('employers-value')[0];

let discountValue = document.getElementsByClassName('discount-value')[0];

let isopenValue = document.getElementsByClassName('isopen-value')[0];

let goodsItem = document.getElementsByClassName('goods-item');

let goodsBtn = document.getElementsByTagName('button')[1];
let budgetBtn = document.getElementsByTagName('button')[2];
let employersBtn = document.getElementsByTagName('button')[3];

let chooseItem = document.querySelector('.choose-item');

let timeValue = document.querySelector('.time-value');

let budget = document.querySelector('#budget');

let employersItem = document.querySelectorAll('.hire-employers-item');


 let money,
 		 price;


openBtn.addEventListener('click', () => {
		money = prompt('Ваш бюджет?', '');

		 while (isNaN(money) || money === "" || money === null) {
		 		money = prompt('Ваш бюджет?', '');
		 }
		 budgetValue.textContent = money;

		 nameValue.textContent = prompt('Название вашего магазина?', '').toUpperCase();
		 
});


goodsBtn.addEventListener('click', () => {
	 		for (let i = 0; i < goodsItem.length; i++) {
			let a = goodsItem[i].value
			
			if ((typeof(a)) === 'string'  && (typeof(a)) !== null &&  a.length < 50 ) {
				console.log("Все верно!");
				mainList.shopGoods[i] = a;
				goodsValue.textContent = mainList.shopGoods;
			} else {
				i = i -1;
			}
		}
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;
		if (isNaN(items) && items != "" ) {
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();

		itemsValue.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if (time < 0 ) {
					console.log('Такого не может быть!');
					mainList.open = false;
			} else if (time > 8 && time < 20) {
					console.log('Время работать!');
					mainList.open = true;
					}		else if (time < 24) {
							console.log('Уже слишком поздно!');
							mainList.open = false;
							}		else {
									console.log('В сутках только 24 часа!');
									mainList.open = false;
									};
			if( mainList.open == true) {
				isopenValue.style.backgroundColor = 'green'
			} else {
				isopenValue.style.backgroundColor = 'red'
			}
});

budgetBtn.addEventListener('click', () => {
	budget.value = money/30;
});

employersBtn.addEventListener('click', () => {
	for (let i = 0; i < employersItem.length; i++) {
			let name = employersItem[i].value;
			mainList.employers[i] = name;
			employersValue.textContent += mainList.employers[i] + ", ";
		}
});

var mainList = {
	Budget: money,
	ShopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	
	makeDiscount: function makeDiscount() {
	if (mainList.discount == true) {
			price = (price/100)*80;
		}
	}
	

};


console.log(mainList);