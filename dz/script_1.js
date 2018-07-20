"use strict";


// 1. Написать функцию filter, которая принимает массив и функцию-фильтр. Результат работы - новый массив, полученный
// путем применения функции-фильтра к каждому элементу исходного массива. Функция - фильтр принимает один аргумент и
// возвращает  true или false.



do {   var min = +prompt("Введите первое положительное или отрицательное число ");
}
while (isNaN(min)) ;

do { var max = +prompt("Введите второе положительное или отрицательное число ");
}
while (isNaN(max)) ;

do { var quantity = +prompt("Введите количество чисел в массиве ");
}
while (isNaN(max)) ;

var arrTrueFalse = [];
//   заполняем массив случайными числами  //

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomNumber(min, max);


var result = [];
function generateRandomArray(min, max, quantity) {


    for (var i = 0; i < quantity; i++) {
        result[i] = getRandomNumber(min, max);
    }

    return console.log(result);

}

generateRandomArray(min, max, quantity);

// функция для определения положительного или отрицательного числа //

function isPositive(x) {
    if (x >= 0) {
        return true;
    }

    return false;
}

isPositive(result);


// заполняем массив с true или false   //


function getNewArray(fn, ar){

    for (var i =0; i < ar.length; i++)
    {
        arrTrueFalse[i] = fn(ar[i]);
    }
    return console.log( arrTrueFalse);

}
getNewArray(isPositive, result);

alert(arrTrueFalse);




