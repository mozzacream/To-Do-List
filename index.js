"use strict";
const $input = document.getElementById('text-input');
const $addBtn = document.getElementsByClassName('btn adding')[0];
const $deleteBtn = document.getElementsByClassName('btn deleting')[0];
const $listItem = document.getElementById('list-item');

$addBtn.addEventListener('click', () => {
    if ($input.value !== "") {
        const newElement = document.createElement('li');
        // newElement.innerHTML = "running";
        newElement.innerHTML = $input.value;
        $listItem.appendChild(newElement);
        $input.value = "";

        const newItem = document.getElementsByTagName('li')
        const checkIcon = document.createElement('span');
        checkIcon.innerHTML = 'done'
        checkIcon.classList.add('material-symbols-outlined', 'done')

        const remIcon = document.createElement('span');
        remIcon.innerHTML = 'delete'
        remIcon.classList.add('material-symbols-outlined', 'delete')

        for (let i = 0; i < newItem.length; i++) {
            newItem[i].appendChild(checkIcon);
            newItem[i].appendChild(remIcon);
        }
        const checkBtn = document.getElementsByClassName('done');
        for (let i = 0; i < checkBtn.length; i++) {
            checkBtn[i].addEventListener('click', () => {
                newItem[i].classList.add('checked')
            })
        }
        const remBtn = document.getElementsByClassName('delete');
        for (let i = 0; i < remBtn.length; i++) {
            remBtn[i].addEventListener('click', () => {
                newItem[i].classList.add('remove')
            })
        }
    } else {
        alert('何も入力されていません。')
    }
})

$deleteBtn.addEventListener('click', () => {
    $input.value = '';
})

