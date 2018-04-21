window.addEventListener('DOMContentLoaded', function() {

let list = document.querySelector('.dod');

let list2 = list.cloneNode(true);

list.parentNode.insertBefore(list2, list.nextSibling);

list2.textContent = "как дела";

});


		// random
		function random100() {
  	let n1 = Math.ceil(Math.random()*99);
 	  let n2 = Math.ceil(Math.random()*(100-n1));
    let n3 = 100 - n1 - n2;
    console.log(n1 + " " + n2 + " " + n3);
	  }
	  random100();