"use strict";
const $input = document.getElementById('text-input');
const $addBtn = document.getElementsByClassName('btn adding')[0];
const $deleteBtn = document.getElementsByClassName('btn deleting')[0];
const $listItem = document.getElementById('list-item');
const $item = document.getElementsByTagName('li')

$addBtn.addEventListener('click', () => {
    if ($input.value !== "" && $item.length < 11) {
        const newElement = document.createElement('li');
        newElement.innerHTML = $input.value;
        $listItem.appendChild(newElement);
        $input.value = "";

        const newItem = document.getElementsByTagName('li')
        const checkIcon = document.createElement('span');
        checkIcon.innerHTML = 'done'
        checkIcon.classList.add('material-symbols-outlined', 'done')

        const remIcon = document.createElement('span');
        remIcon.innerHTML = 'delete'
        remIcon.classList.add('material-symbols-outlined', 'delete');

        newElement.appendChild(checkIcon);
        newElement.appendChild(remIcon);

        checkIcon.addEventListener('click', () => {
            newElement.classList.add('checked');
        })
        remIcon.addEventListener('click', () => {
            $listItem.removeChild(newElement)
        })
    } else if ($item.length === 11) {
        alert('これ以上追加できません。')
        $input.value = "";
    } else if ($input.value === "") {
        alert('何も入力されていません。')
    }
})

$deleteBtn.addEventListener('click', () => {
    $input.value = '';
})
