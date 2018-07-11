
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
//     Пример вызовов:
//     min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


"use strict";
var a = +prompt("first");
var b = +prompt("second");

function min(a , b) {
    if (a>b){
        return(alert(b));
    }else {return(alert(a))}
}

min(a,b);
