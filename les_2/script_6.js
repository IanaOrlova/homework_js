// Генератор случайных чисел: Имитация бросания двух игральных костей

"use strict";

var firstMin = 1;
var firstMax = 6;
var secondMin = 1;
var secondMax = 6;

function getRandomIntInclusive ( firstMin, firsMax ) {
    return Math.floor( Math.random() * ( firsMax - firstMin +1 ) + firstMin);
}


function getRandomIntInclusive ( secondMin, secondMax ) {
    return Math.floor(Math.random() * ( secondMax - secondMin +1 ) + secondMin);
}

var resFirst = getRandomIntInclusive ( firstMin, firstMax );

var resSecond = getRandomIntInclusive ( secondMin, secondMax );

alert(resFirst);
alert(resSecond);


// Имитация игры орел-решка


var head = 1;
var tail = 0;

function getRandomIntInclusive( head, tail ) {
    return Math.floor( Math.random() * ( head - tail +1 ))+ tail;
}

var result;

result = getRandomIntInclusive( head, tail );

if ( result == 1 ) {

    alert("Орел");

}else{

    alert("Решка");

}





