


// Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».
// Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».


"use strict";

var Name = prompt( "Каково \"официальное\" название Javascript" );
if ( Name == "ECMAScript" ){

    alert( "Верно" );

}else {

    alert( "Не знаете? \"ECMAScript\" !" );
}
