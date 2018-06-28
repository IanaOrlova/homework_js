// Создать программу, которая принимает два значение от пользователя, а затем выводит случайное число от первого до второго числа, что ввел пользователь.

"use strict";


var min = ( prompt( "Введите минимальное число " ));
var max = ( +prompt( "Введите максимальное число " ));


function getRandomArbitrary( min, max ) {
    return Math.random() * ( max - min ) + min;
}

var res = getRandomArbitrary( min, max );

if ( min == null ) {

    alert( "Введите любое число" );

}if ( max == 0 ) {

    alert( "Введите любое число больше 0" );

}else {

    alert( res );

}

console.log( min );
console.log( max );

