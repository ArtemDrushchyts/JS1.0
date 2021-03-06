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
			mainCardsItem = document.getElementsByClassName('main-cards-item')[1],
			mainItem = document.getElementsByClassName('main-cards-item'),
			cardCond = mainCardsItem.cloneNode(true),
			nameCond = cardCond.querySelector('.name'),
			ageCond = cardCond.querySelector('.age'),
			bioCoud = cardCond.querySelector('.bio'),
			viewsCoud = cardCond.querySelector('.views'),
			sexCoud = cardCond.querySelector('.sex'),
			photoCoud = cardCond.querySelector('.photo'),
			phot = cardCond.querySelector('.photo-2'),

			nameValue = document.getElementById('name'),
			ageValue = document.getElementById('age'),
			bioValue = document.getElementById('bio'),
			selectValue = document.getElementById('select'),
			sexValue = document.getElementsByName('sex'),
			personEasy = document.getElementsByClassName('person-easy')[0];

			
			let resultСount = document.getElementsByClassName('result-count'),
					progressBar1 = document.getElementsByClassName('progress-bar-1')[0],
					progressBar2 = document.getElementsByClassName('progress-bar-2')[0],
					progressBar3 = cardCond.getElementsByClassName('progress-bar-2')[0];
			

	btn.addEventListener('click', () => {
		custom.style.display = "none";
		main.style.display = "block";
		mainCardsItem.parentNode.insertBefore(cardCond, mainCardsItem.nextSibling);
		for(let i = 0; i < 3; i++) {
		resultСount[i].textContent = '0%';
		}
		progressBar1.style.cssText = 'height: 0;';
		progressBar2.style.cssText = 'height: 0;';
		progressBar3.style.cssText = 'height: 0;';

	});

	function Year(i, s1, s2, s5) {
    if (0 == i)
        return '';
 
    let a = i % 100, b = a % 10;
    return i + ' ' + ((b >= 5 || 0 == b || a >= 11 && a <= 19) && s5 || 1 == b && s1 || s2 );
	};
	
	customInfo.addEventListener('change', () => {
		let name = nameValue.value,
				age = ageValue.value,
				bio = bioValue.value,
				select = selectValue.value;
				
				for(let i = 0; i < sexValue.length; i++) {
					if(document.getElementsByName('sex')[i].checked === true) {
				 			var sex = sexValue[i].value;
						}
				}
		if (isNaN(name) || name === '') {
		nameCond.textContent = name;
		} else {
			alert('Некорректно введено имя!');
			nameCond.textContent = '';
		}

		if (!isNaN(age)) {
 		ageCond.textContent = Year(age, 'год', 'года', 'лет');
 		} else {
 			alert('Некорректно введен возрост! Нужно вводить числовые значения!');
 		}
		bioCoud.textContent = bio;
		viewsCoud.textContent = select;
		sexCoud.textContent = sex;

	});

	let radio = document.querySelector('.radio'),
			slideIndex = 5;

	radio.addEventListener('change', () => {
			if(sexValue[0].checked) {
			personEasy.style.cssText = 'background: url("img/construct-5.png") center no-repeat; background-size: 70%;';
			preview.style.backgroundImage = 'url("img/construct-5.png")';
			phot.style.cssText = `background: url("img/construct-5.png") center no-repeat; 
				background-size: contain;`;
			slideIndex = 5;

		} 
			if(sexValue[1].checked) {
			personEasy.style.cssText = 'background: url("img/construct-1.png") center no-repeat; background-size: 70%;';
			preview.style.backgroundImage = `url("img/construct-1.png")`;
			phot.style.cssText = `background: url("img/construct-1.png") center no-repeat; 
				background-size: contain;`;
			slideIndex = 1;
		}
	
	});

	//slider
	let preview = document.getElementsByClassName('preview')[0],
			prev = document.getElementsByClassName('prev')[0],
			next = document.getElementsByClassName('next')[0];

			preview.style.backgroundImage = `url("img/construct-5.png")`;
			showSlides(slideIndex);

			function showSlides(n) {
				if (n > 4 && sexValue[1].checked) {
				slideIndex = 1;
				}
				if (n < 1 && sexValue[1].checked) {
					slideIndex = 4;
				}
				
				if (n > 8 && sexValue[0].checked) {
				slideIndex = 5;
				}

				if (n < 5 && sexValue[0].checked) {
					slideIndex = 8;
				}


				preview.style.backgroundImage = `url("img/construct-${slideIndex}.png")`;
				phot.style.cssText = `background: url("img/construct-${slideIndex}.png") center no-repeat; 
				background-size: contain;`;
				personEasy.style.backgroundImage = `url("img/construct-${slideIndex}.png")`;
			}	
		function plusSlides (n) {
			showSlides(slideIndex +=n)
		}


		prev.addEventListener('click', function(){
			plusSlides(-1);
		});

		next.addEventListener('click', function(){
			plusSlides(1);
		});

		// Reset result
		
		let reset = document.getElementById('reset');

		reset.addEventListener('click', () => {
		main.style.display = "none";
		custom.style.display = "flex";
		customInfo.style.display = "block";
		customChar.style.display = "block";
		customStyle.style.display = "block";
		});

		// election

		let voting = document.getElementById('voting');

		voting.addEventListener('click', () => {
			let n1 = Math.ceil(Math.random()*98);
 	  	let n2 = Math.ceil(Math.random()*(99-n1));
    	let n3 = 99 - n1 - n2;
    	let n5 = 1;
			
			resultСount[0].textContent = `${n1 + n5}%`;
			resultСount[1].textContent = `${n2 + n5}%`;
			resultСount[2].textContent = `${n3 + n5}%`;
			progressBar1.style.cssText = `height: ${n1 + n5}%;`;
			progressBar2.style.cssText = `height: ${n2 + n5}%;`;
			progressBar3.style.cssText = `height: ${n3 + n5}%;`;

			let max = Math.max(n1,n2,n3);
			if(max == n1){
				mainItem[0].classList.add('main-cards-item-active');
			} else {
				mainItem[0].classList.remove('main-cards-item-active');
			}
			if (max == n2) {
				mainItem[1].classList.add('main-cards-item-active');
			} else {
				mainItem[1].classList.remove('main-cards-item-active');
			}
			if (max == n3) {
				mainItem[2].classList.add('main-cards-item-active');
			} else {
				mainItem[2].classList.remove('main-cards-item-active');
			}
			
	  });

		// crime

		let crime = document.getElementById('crime');

		crime.addEventListener('click', () => {
			let n1 = Math.ceil(Math.random()*73);
 	  	let n2 = Math.ceil(Math.random()*(74-n1));
    	let n3 = 74 - n1 - n2;
    	let n4 = 25;
    	let n5 = 1;
    	resultСount[0].textContent = `${n1 + n5}%`;
			resultСount[1].textContent = `${n2 + n5}%`;
			resultСount[2].textContent = `${n3 + n4 + n5}%`;
			progressBar1.style.cssText = `height: ${n1 + n5}%;`;
			progressBar2.style.cssText = `height: ${n2 + n5}%;`;
			progressBar3.style.cssText = `height: ${n3 + n4 + n5}%;`;
			
			let max = Math.max(n1,n2,n3+n4);
						if(max == n1){
				mainItem[0].classList.add('main-cards-item-active');
			} else {
				mainItem[0].classList.remove('main-cards-item-active');
			}
			if (max == n2) {
				mainItem[1].classList.add('main-cards-item-active');
			} else {
				mainItem[1].classList.remove('main-cards-item-active');
			}
			if (max == (n3 + n4)) {
				mainItem[2].classList.add('main-cards-item-active');
			} else {
				mainItem[2].classList.remove('main-cards-item-active');
			}
		});



});