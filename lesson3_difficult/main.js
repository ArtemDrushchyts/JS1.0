let str = 'урок-3-был слишком легким';
console.log(str);
function letFirst() {
	return str[0].toUpperCase() + str.slice(1);
}
console.log(letFirst(str));
let newLine = str.split('“').join(' ').split('”').join(' ').split('-').join(' ');
console.log(newLine);

let easy = newLine.substring(19, 25).split('им').join('о');
console.log(easy);


let arr = [20, 33, 1, 'Человек', 2, 3];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
		if (!isNaN(arr[i]) === true) {
			var sqr =  arr[i]**3;
			newArr.push(sqr);
		}
}
console.log(newArr);
 sum = 0;
for (let i = 0; i < newArr.length; i++) {
	sum += newArr[i];
	console.log(sum);
}
console.log(sum);
console.log(Math.sqrt(sum));
