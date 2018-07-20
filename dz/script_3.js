"use strict";

// Написать функцию, которая принимает число от 0 до 10000 и сообщает, сколько в нем тысяч, сотен, десятков и единиц.

var number = "";
var thousand, hundred, ten, units ;

do { number = +prompt("Введите число от 0 до 10000");
}
while (number <0 || isNaN(number)) ;


function degree(n) {

    for(var i = 0; i<=n; i++) {
        units = (n / 1);

        ten = (n / 10);

        hundred = (n / 100);

        thousand= (n / 1000);


    }
    return console.log("В вашем числе "+(Math.floor(thousand))+" тысяч, ",(Math.floor(hundred))+" сотен, ",
        (Math.floor(ten))+" десятков, ",(Math.floor(units))+"единиц .")
}

degree(number);


alert("В вашем числе "+(Math.floor(thousand))+" тысяч, "+(Math.floor(hundred))+" сотен, "+(Math.floor(ten))+
    " десятков, "+(Math.floor(units))+" единиц. ") ;
