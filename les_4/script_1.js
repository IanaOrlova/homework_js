// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
//
//
// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []
// Обрати внимание: функция не должна изменять переданный ей массив:
//
//
//     var arr = [1, 2, 3];
// console.log(map(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]
//

"use strict";

var array = [1,2,3,4,5];



function minus(a) {return a-2;}


function map(minus, array) {
    var redoneArr =[];
    for (var i=0; i < array.length; i++){
        redoneArr[i]= minus(array[i]);
    }
    return redoneArr;
}


alert(map(minus,array));
alert(array);
console.log(redoneArr);

