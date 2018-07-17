// Сумма свойств
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
//     Если объект пустой, то результат должен быть 0.
// Например:
//
//     "use strict";
//
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };

//... ваш код выведет 650



"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function sum(salaries) {
    var rez = 0;
    for(var key in salaries) {
        rez += salaries[key];
    }
    return rez;
}
alert("Сумма всех зарплат "+ sum(salaries));


