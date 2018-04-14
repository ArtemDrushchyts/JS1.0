'use strict';
function modal() {

			let more = document.querySelector('.more'),
				descriptionBtn = document.querySelectorAll('.description-btn'),
				overlay = document.querySelector('.overlay'),
				close = document.querySelector('.popup-close');

				f = function() {
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
}


module.exports = modal;