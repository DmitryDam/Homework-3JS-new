// Task 1

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

var arrAlphabet = alphabet.split('');
// Методом split() из строки делаем массив 

console.log(arrAlphabet);

var row1 = arrAlphabet.slice(0,12);
var row2 = arrAlphabet.slice(12,23);
var row3 = arrAlphabet.slice(23,35);
// Методом slice() вырезаем из массива 3 отдельных массива
console.log(row1);
console.log(row2);
console.log(row3);

var stringrow1 = row1.join(", ");
var stringrow2 = row2.join(", ");
var stringrow3 = row3.join(", ");
// Методом join() делаем из массивов 3 строки с разделителем , . 
console.log(`Символы первого ряда клавиатуры: ${stringrow1}`);
console.log(`Символы второго ряда клавиатуры: ${stringrow2}`);
console.log(`Символы третьего ряда клавиатуры: ${stringrow3}`);

var keyboard = [];

keyboard.push(row1);
keyboard.push(row2);
keyboard.push(row3);

console.log(keyboard);

var hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];
var javascript = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];
var trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];

console.log(`Первое слово: ${hello}`);
console.log(`Второе слово: ${javascript}`);
console.log(`Третье слово: ${trainer}`);
