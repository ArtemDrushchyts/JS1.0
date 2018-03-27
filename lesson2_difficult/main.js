var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
var day = new Date();
for (i = 0; i < week.length; i++) {
	
	if (i > 4) {
		document.write(week[i].bold() + '<br \/>' );
	}
	else if (i == day.getDay() - 1) {
		document.write(week[i].italics() + '<br \/>' );
	} else {
		document.write(week[i] + '<br \/>' );
	}
}


var arr = ["365", "457", "777", "475", "888", "997", "333"];

for (i = 0; i < arr.length; i++) {
	if (arr[i].substring(0,1) == 3 || arr[i].substring(0,1) == 7) {
		console.log(arr[i]);
	}
}