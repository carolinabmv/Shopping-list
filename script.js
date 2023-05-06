// // inputsArr.forEach((input) => input.addEventListener('click', () => input.parentElement.classList.toggle('done')));

// function addItems() {
//   let item = document.querySelector('.enter-item').value;
//   item = item.replace(item[0], item[0].toUpperCase());

//   if (item) {
//     const ul = document.querySelector('ul');
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));
//     ul.appendChild(li);

//     const list = document.querySelectorAll('li');

//     list.forEach(function (item) {
//       item.addEventListener('click', function () {
//         item.classList.toggle('done');
//       });
//     });
//   }

//   document.querySelector('.enter-item').value = '';
// }

// const enterItem = document.querySelector('.enter-item');

// enterItem.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') addItems();
// });

// const button = document.querySelector('button');
// button.addEventListener('click', addItems);

// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(function (button) {
//   button.addEventListener('click', function () {
//     this.classList.toggle('blue');
//   });
// });
const enterBtn = document.querySelector('.add-btn');
const enterInputEl = document.querySelector('.enter-input');
const ul = document.querySelector('ul');

function strikeOut() {
  this.parentElement.classList.toggle('done');
}
function deleteItem() {
  const li = this.parentElement;
  li.parentNode.removeChild(li);
}
function strike() {
  let itemsList = document.querySelectorAll('.check');
  itemsList.forEach(function (item) {
    item.addEventListener('click', strikeOut);
  });
}
function remove() {
  let closeBtns = document.querySelectorAll('.close-btn');
  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', deleteItem);
  });
}

strike();
remove();

// addEvent(list);

function addNewItem() {
  let item = enterInputEl.value;
  if (item) {
    item = item.replace(item[0], item[0].toUpperCase());

    const checkInput = document.createElement('input');
    checkInput.setAttribute('type', 'checkbox');
    checkInput.setAttribute('class', 'check');

    const closeIcon = document.createElement('i');
    closeIcon.setAttribute('class', 'fa-solid fa-xmark fa-xs');
    const close = document.createElement('a');
    close.setAttribute('href', '#');
    close.setAttribute('class', 'close-btn');
    close.appendChild(closeIcon);

    const li = document.createElement('li');
    li.appendChild(checkInput);
    li.appendChild(document.createTextNode(` ${item}`));
    li.appendChild(close);
    ul.appendChild(li);

    enterInputEl.value = '';
  }

  strike();
  remove();
}

enterBtn.addEventListener('click', addNewItem);

enterInputEl.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addNewItem();
});
