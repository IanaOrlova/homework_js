// Свойство с наибольшим значением
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
//
//     Если объект пустой, то пусть он выводит «нет сотрудников».
// Например:
//     "use strict";
//
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
// //... ваш код выведет Петя

"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var name = "";
var maxSalaries = 0;

for(var key in salaries) {
    if ( maxSalaries<salaries[key]){
        maxSalaries=salaries[key];
        name=key;
        }
}





alert("Самая большая зарплату у "+ name+" "+maxSalaries);