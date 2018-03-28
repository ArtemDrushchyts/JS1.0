let str = 'урок-3-был слишком легким';
console.log(str);
function letFirst() {
	return str[0].toUpperCase() + str.slice(1);
}
console.log(letFirst(str));

console.log(str.split('“').join(' ').split('”').join(' ').split('-').join(' '));

let lesson3 = str.replace('легким');
console.log(lesson3)


let arr = [20, 33, 1, 'Человек', 2, 3];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
		var sqr =  arr[i]**3;
		newArr.push(sqr);
}
 sum = 0;
for (let i = 0; i < newArr.length; i++) {
	sum += i;
	console.log(sum);
}
console.log(sum);
