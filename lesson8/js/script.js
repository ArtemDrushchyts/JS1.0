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

		let deadline = '2018-04-10';

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
					}
					
					updateClock();
					
					let timeInterval = setInterval(updateClock, 1000);

		};

		setClock('timer', deadline);
			
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


});
