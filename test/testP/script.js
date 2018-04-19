window.addEventListener('DOMContentLoaded', function() {

let list = document.querySelector('.dod');

let list2 = list.cloneNode(true);

list.parentNode.insertBefore(list2, list.nextSibling);

list2.textContent = "как дела";

});