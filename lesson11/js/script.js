window.addEventListener('DOMContentLoaded', function() {
	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

			function hideTabContent(a) {
				for(let i = a; i < tabContent.length; i++) {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
				}
			}

			hideTabContent(1);

			function showTabContent(b) {
				if( tabContent[b].classList.contains('hide')) {
					hideTabContent(0);
					tabContent[b].classList.remove('hide');
					tabContent[b].classList.add('show');
				}
			}


		info.addEventListener('click', function(event) {
			let target = event.target;
			if(target.className == 'info-header-tab') {
				for (let i = 0; i < tab.length; i++) {
					if (target == tab[i]) {
						showTabContent(i);
						break;
					}
				}
			}
		});

		//  Timer

		let deadline = '2018-04-12';

		function getTimeRemaining(endtime) {
			let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60),
			minutes = Math.floor( (t/1000/60) % 60),
			hours = Math.floor( (t/(1000*60*60)) );

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		};

		function setClock(id, endtime) {
			let timer = document.getElementById(id),
					hours = timer.querySelector('.hours'),
					minutes = timer.querySelector('.minutes'),
					seconds = timer.querySelector('.seconds');

					function updateClock() {
						let t = getTimeRemaining(endtime);
						if (t.total > 0) {
						hours.innerHTML = t.hours;
						minutes.innerHTML = t.minutes;
						seconds.innerHTML = t.seconds;
					} else {
						hours.innerHTML = '00';
						minutes.innerHTML = '00';
						seconds.innerHTML = '00';
					}

						if (t.total <= 0) {
							clearInterval(timeInterval);
						} 
					};
					
					updateClock();
					
					let timeInterval = setInterval(updateClock, 1000);

		};

		setClock('timer', deadline);

		// scroll

		window.addEventListener('scroll', function(e) {
	  	let nav = document.querySelectorAll('[id^="nav"]');
	  	for (let i = 0; i < nav.length; i++) { 
	    document.querySelector('a[href="#' + nav[i].id + '"]');
	 	 	}
		}, false);

		let linkNav = document.querySelectorAll('[href^="#"]'),
    		V = 0.5;  
		for (let i = 0; i < linkNav.length; i++) {
			  	linkNav[i].onclick = function(){
			    let w = window.pageYOffset,
			        hash = this.href.replace(/[^#]*(.*)/, '$1'),
			        t = document.querySelector(hash).getBoundingClientRect().top,
			        start = null;
			    requestAnimationFrame(step);
			    function step(time) {
			      if (start === null) start = time;
			      let progress = time - start,
			          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
			      window.scrollTo(0,r);
			      if (r != w + t) {requestAnimationFrame(step);} else {location.hash = hash;}
			    }
			    return false;
			  };
		}
			
		// modal

		let more = document.querySelector('.more'),
				descriptionBtn = document.querySelectorAll('.description-btn'),
				overlay = document.querySelector('.overlay'),
				close = document.querySelector('.popup-close');

				let f = function() {
				this.classList.add('more-splash');
				overlay.style.display = "block";
				overlay.classList.add('animateTab')
				document.body.style.overflow = 'hidden';
			}

			for (let i = 0; i < descriptionBtn.length; i++) {
				descriptionBtn[i].addEventListener('click', f);
			}
			

			more.addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
			});
			close.addEventListener('click', function() {
			overlay.style.display = "none";
			more.classList.remove('more-splash');
			document.body.style.overflow = '';

			});

		// class option {
		// 	constructor(height, width, bg, fontSize, textAlign){
		// 		this.height = height;
		// 		this.width = width;
		// 		this.bg = bg;
		// 		this.fontSize = fontSize;
		// 		this.textAlign = textAlign;
		// 	}

		// 	newDiv() {
				
		// 		let div = document.createElement('div');
		// 		document.body.appendChild(div);
		// 		div.innerHTML = 'Добавим немного текста';
		// 		div.style.cssText=`height: ${this.height}px; \
		// 		width: ${this.width}px; \
		// 		background-color: ${this.bg}; \
		// 		font-size: ${this.fontSize}; \
		// 		text-align: ${this.textAlign}; \
		// 		`;
				
		// 	}
		// }
		// const objDiv = new option(400, 500, 'yellow', 25, 'center');

		// console.log(objDiv.newDiv());

		//form
		let message = new Object();
		message.loading = "Загрузка...";
		message.success = "Спасибо! Скоро мы с вами свяжимся";
		message.failure = "Что-то пошло не так...";

		let form = document.getElementsByClassName('main-form')[0],
				input = form.getElementsByTagName('input'),
				statusMessage = document.createElement('div');
				statusMessage.classList.add('status');

				form.addEventListener('submit', function(event) {
					event.preventDefault();
					form.appendChild(statusMessage);

					// ASAX
					let request = new XMLHttpRequest();
					request.open("POST", 'server.php');

					request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

					let formData = new FormData(form);

					request.send(formData);

					request.onreadystatechange = function() {
						if (request.readyState < 4) {
							statusMessage.innerHTML =  message.loading;
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								statusMessage.innerHTML = message.success;
								  //Добавляем контент на страницу
							}
							else {
								statusMessage.innerHTML = message.failure;
							}
						}
					}
					for (let i = 0; i < input.length; i++) {
						input[i].value = '';
						// очиста полей ввода
					}
				});
});
