let newLi = document.createElement('li');
let list = document.getElementsByClassName('menu');

let block = document.getElementsByTagName('li');

list[0].insertBefore(block[2], block[1]);



newLi.classList.add("menu-item");
newLi.textContent = "Пятый пункт";
list[0].appendChild(newLi);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = "Мы продаем только подлинную технику Apple";

let element = document.getElementsByClassName('adv');

element[0].parentNode.removeChild(element[0]);
let a = document.getElementById('prompt');
let text = prompt('Ваше отношение к техните apple?', '');

a.textContent = text;

