window.addEventListener('DOMContentLoaded', function() {
	//modal
	let popupBtn = document.querySelector('.popup-btn'),
			overlay = document.querySelector('.overlay'),
			main = document.querySelector('.main'),
			custom = document.querySelector('.custom'),
			customInfo = document.querySelector('.custom-info'),
			customChar = document.querySelector('.custom-char'),
			customStyle = document.querySelector('.custom-style');

	popupBtn.addEventListener('click', function() {
		overlay.style.display = "none";
		main.style.display = "none";
		custom.style.display = "flex";
		customInfo.style.display = "block";
		customChar.style.display = "block";
		customStyle.style.display = "block";
	});

	//Cards
	let btn = document.getElementById("ready"),
			mainCards = document.querySelector('.main-cards'),
			mainCardsItem = document.getElementsByClassName('main-cards-item')[1];
			mainItem = document.getElementsByClassName('main-cards-item'),
			cardCond = mainCardsItem.cloneNode(true),
			nameCond = cardCond.querySelector('.name'),
			ageCond = cardCond.querySelector('.age'),
			bioCoud = cardCond.querySelector('.bio'),
			viewsCoud = cardCond.querySelector('.views'),
			sexCoud = cardCond.querySelector('.sex'),

			nameValue = document.getElementById('name'),
			ageValue = document.getElementById('age'),
			bioValue = document.getElementById('bio'),
			selectValue = document.getElementById('select'),
			sexValue = document.getElementsByName('sex');

			


	btn.addEventListener('click', () => {
		custom.style.display = "none";
		main.style.display = "block";
		mainCardsItem.parentNode.insertBefore(cardCond, mainCardsItem.nextSibling);
		
	});
	
	customInfo.addEventListener('change', () => {
		let name = nameValue.value,
				age = ageValue.value,
				bio = bioValue.value,
				select = selectValue.value,
				personEasy = document.getElementsByClassName('person-easy')[0];
				for(let i = 0; i < sexValue.length; i++) {
					if(document.getElementsByName('sex')[i].checked == true) {
				 			var sex = sexValue[i].value;
						}
				}
		nameCond.textContent = name;
		ageCond.textContent = age;
		bioCoud.textContent = bio;
		viewsCoud.textContent = select;
		sexCoud.textContent = sex;
		if(sex == 'Мужской') {
			personEasy.style.cssText = 'background: url("") center no-repeat;'
		}
	});
	
});