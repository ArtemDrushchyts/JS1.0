var num = 33721;
var mult = 1;

var arr = String(num).split('');
for (var i = 0; i < arr.length; i++) {
	mult *= arr[i];
}
console.log(mult);

alert(mult**3);


// alert( eval(num.toString().split('').join('*')) ); еще один вариант