// Перепишите if с использованием оператора '?':
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }

"use strict";

var a = ( +prompt( "Введите занчение а" )) ;
var b = ( +prompt( "Введите значение b" ));

var result = ( a+b<4 )? "Мало" : "Много";

alert( result );