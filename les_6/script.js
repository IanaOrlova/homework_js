


// Создайте <div>, который при нажатии Ctrl+E превращается в <textarea>.
//
// Изменения, внесенные в поле, можно сохранить обратно в <div> сочетанием клавиш Ctrl+S, при этом <div> получит в виде
// HTML содержимое <textarea>.
//
// Если же нажать Esc, то <textarea> снова превращается в <div>, изменения не сохраняются



"use strict";


document.onkeydown = function(e) {
    if (e.keyCode === 27) {
        cancel();
    }

    if ( e.ctrlKey && e.keyCode === 69 )  {
        edit();
    }

    if (e.ctrlKey && e.keyCode === 83 ) {
        save();
    }
};

function edit() {
    div_text.style.display = 'none';
    area.style.display = 'block';

}

function save() {
    area.style.display = 'none';
    div_text.innerHTML =  div_text.innerHTML + area.value;
    div_text.style.display = 'block';
}

function cancel() {
    area.style.display = 'none';
    div_text.style.display = 'block';
}