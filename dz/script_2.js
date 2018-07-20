// 2. Написать функцию, которая принимает год и сообщает високосный он или нет. Валидация данных необходима.

"use strict";




do {  var year = +prompt("введите год от 1600");
}
while (year<1600 || isNaN(year)) ;

console.log(year);


function min(x) {
    if (x%4 === 0 && x%100 !== 0 || x%400 === 0 ){
        return(alert("Этот год високосный"));
    }else   {return(alert("Этот год невисокосный "))}
}

min(year);