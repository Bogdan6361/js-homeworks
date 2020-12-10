//1
let a = "hello js";
console.log("a=" + a);
let b = 100;
console.log("b=" + b);
let c = 5.5;
console.log("c=" + c);
let d = true;
console.log("d=" + d);
const COLOR = "red";
console.log(COLOR);
//1*
let a1 = 3;
let h = 4;
let s = (1 / 2) * a1 * h;
console.log(s);
//2
let m = 2;
let sm = m * 100;
let d1 = m * 39.37;
console.log(m + " метров = " + sm + " сантиметров или " + d1 + " дюймов.")
//3
for (let i = 1; i <= 9; i++) {
	str = i * 9;
	console.log(i + "*9=" + str);
}
//4
const M = 45; // цена за 100 грамм
let gram = M / 100; // цена за 1 грамм
// спросить желаемый вес пиццы
let ves_pizzy = prompt('Введите желаемый вес пиццы в граммах');
let sum = ves_pizzy * gram;
let result = 0;
if (ves_pizzy > 1000 || sum > 500) {
	result = sum - (sum * 0.03);
} else {
	result = sum;
}
alert("Цена за 1 г = " + gram + "\nВес пиццы = " + ves_pizzy + " г\nЦена без скидки " + sum + " грн.\nЦена со скидкой 3%: " + result + " грн.");
//5
let n = 2;
for (let i = 1; i < 10; i++) {

	console.log(Math.pow(n, i));
}
//6
let summa = 0;
for (let num = 1; num < 30; num++) {
	if (num % 2) {
		summa = summa + num;
		console.log(num);
	}
}
console.log(summa);
//7
let question = prompt('Как называется наша планета?');
let answer = "земля";
if (question.toLowerCase() == answer) {
	alert('Правильно!');
} else {
	alert('Неправильно!');
}