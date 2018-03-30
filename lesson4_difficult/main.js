let arr = [];

function massiv() {
	let countMassiv = prompt("Сколько массивов включить?", "");

	for(let i = 0; i < countMassiv.length; i++) {
		arr.push([i]);
		// for (j=0; j < 5; j++) {
		// 	arr[i].push(j);
		// } 
	}
	console.log(arr);
}
massiv();
