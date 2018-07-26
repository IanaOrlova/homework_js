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


  // заполняем массив случайными числами  //

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function generateRandomArray(min, max, quantity) {

    var result = [];

    for (var i = 0; i < quantity; i++) {
        result[i] = getRandomNumber(min, max);
    }

    return result;

}

var testArray = generateRandomArray(min, max, quantity);

console.log("Начальный массив  " + testArray);



// функция для определения положительного или отрицательного числа //

function isPositive(x) {
    if (x >= 0) {
        return true;
    }

    return false;
}



// заполняем массив с true или false   //


function filter(fn, ar){

    var arrTrueFalse = [];

    for (var i =0; i < ar.length; i++)
    {
        if (fn(ar[i]))
            arrTrueFalse.push(ar[i]);
    }
    return  arrTrueFalse;

}


var filterArray = filter(isPositive, testArray);

console.log("Массив обработанный фильтром  " + filterArray);



