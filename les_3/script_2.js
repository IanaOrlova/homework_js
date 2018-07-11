
// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
// ucFirst("вася") == "Вася";
// ucFirst("") == ""; // нет ошибок при пустой строке



"use strict";

 var str = (prompt("Напишите строку с маленькой буквы"));
 
 function ucFirst() {
     if (!str) return str;
     return str[0].toUpperCase()+str.substring(1);}

console.log(ucFirst());

alert(ucFirst());