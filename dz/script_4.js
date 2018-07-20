"use strict";

// ДЗ. Посчитать, сколько раз каждое слово используется в предложении. Простой вариант - слова состоят только из
// маленьких букв, знаков препинания нет, между словами строго один пробел.




var getText = prompt("Введите текст");

var getTextLowerCase = getText.toLocaleLowerCase();

getTextLowerCase = getTextLowerCase.replace(/[^A-Za-z\s]+/g, '');



var getTextLowerCaseArray = getTextLowerCase.split(" ");






for (var i = 0; i < getTextLowerCaseArray.length; i++) {

    var keys = getTextLowerCaseArray[i];

    if (getTextLowerCaseArray[keys] in getTextLowerCaseArray ) {

        getTextLowerCaseArray[keys] = getTextLowerCaseArray[keys] + 1;
    }
    else {
        getTextLowerCaseArray[keys] = 1;
    }
}

for ( keys in getTextLowerCaseArray){

    console.log(keys + ' : ' + getTextLowerCaseArray[keys]);
}


