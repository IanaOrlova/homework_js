
// Медиана


// var usersByDay = [1, 7, 16, 22,35, 40, 45];
// console.log(usersByDay);
//
// if (usersByDay.length % 2 !== 0) {
//     var medianIndex = (usersByDay.length - 1) / 2;
//     console.log(medianIndex);
//     var median = usersByDay[medianIndex];
//     console.log(median);
// } else {
//     var leftIndex = usersByDay.length / 2 - 1;
//     var rightIndex = usersByDay.length / 2;
//     console.log(leftIndex, rightIndex);
//     var median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
//     console.log(median);
// }

// 'use strict';
// var
//     upperLimit,
//     simpleNumberString,
//     x;
// upperLimit = +prompt('Введите максимальную границу для поиска простых чисел','');
//
// if (upperLimit) {
//     simpleNumberString = "1";
//     for (var i = 2; i < upperLimit+1; i++) {
//         simpleNumber(i)
//     }
//     console.log(simpleNumberString);
//     alert('В указаных границах найдены следующие простые числа: ' + simpleNumberString);
//
// } else alert('Введено неверное значение');
//
//
// function simpleNumber(number) {
//     for (var i = number-1; i > 1; i--) {
//         if (!(number%i)) number = false;
//     }
//     if (number) simpleNumberString += ' ' + number;
//     console.log(number);
// }


var showTim = function (time) {
    console.log('Текущее время: ' + time);
};

showTim(3);
showTim(16);
