// Создать программу, которая принимает значение от пользователя, а затем выводит случайное число от 1 до числа, что ввел пользователь.

"use strict";

 var number = ( +prompt( "Введите любое число больше 1" ));
 var min = 1;

function getRandomArbitrary( min, number ) {
    return Math.random() * ( number - min ) + min;
}

var res = getRandomArbitrary( min, number );

 if ( number == 1 ) {

 alert( "Введите любое число больше 1" );

 }else if (number == 0 ){

 alert( "Введите любое число больше 1" );

 } else { alert( res )

 }

 console.log( number );



