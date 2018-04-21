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
			photoCoud = cardCond.querySelector('.photo'),
			phot = cardCond.querySelector('.photo-2'),

			nameValue = document.getElementById('name'),
			ageValue = document.getElementById('age'),
			bioValue = document.getElementById('bio'),
			selectValue = document.getElementById('select'),
			sexValue = document.getElementsByName('sex'),
			personEasy = document.getElementsByClassName('person-easy')[0];
			personEasy.style.cssText = 'background: url("img/construct-5.png") center no-repeat; background-size: 70%;';
			
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
		nameCond.textContent = name;
		ageCond.textContent = age;
		bioCoud.textContent = bio;
		viewsCoud.textContent = select;
		sexCoud.textContent = sex;

	});

	let radio = document.querySelector('.radio');

	radio.addEventListener('change', () => {
			if(sexValue[0].checked) {
			personEasy.style.cssText = 'background: url("img/construct-5.png") center no-repeat; background-size: 70%;';
			preview.style.backgroundImage = 'url("img/construct-5.png")';
		} else {
			personEasy.style.cssText = 'background: url("img/construct-1.png") center no-repeat; background-size: 70%;';
			preview.style.backgroundImage = `url("img/construct-1.png")`
		}
	
	});

	//slider
	let preview = document.getElementsByClassName('preview')[0],
			prev = document.getElementsByClassName('prev')[0],
			next = document.getElementsByClassName('next')[0],
			slideIndex = 5;
			preview.style.backgroundImage = `url("img/construct-6.png")`;
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

				var a = `url("img/construct-${slideIndex}.png")`;
				preview.style.backgroundImage = a;
				phot.style.cssText = `background: url("img/construct-${slideIndex}.png") center no-repeat; 
				background-size: contain;`;
				personEasy.style.backgroundImage = `url("img/construct-${slideIndex}.png")`;
			}	
		function plusSlides (n) {
			showSlides(slideIndex +=n)
		}

		function currentSlide(n) {
			
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
		})
});