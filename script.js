const enterBtn = document.querySelector('.add-btn');
const enterInputEl = document.querySelector('.enter-input');
const ul = document.querySelector('ul');
let closeBtns = document.querySelectorAll('.close-btn');
let itemsList = document.querySelectorAll('.check');

function strikeOut(item) {
  item.parentElement.classList.toggle('done');
}

function deleteItem(btn) {
  const li = btn.parentElement;
  li.parentElement.removeChild(li);
}

itemsList.forEach((item) =>
  item.addEventListener('click', function () {
    strikeOut(this);
  })
);
closeBtns.forEach((btn) =>
  btn.addEventListener('click', function () {
    deleteItem(this);
  })
);

function newList() {
  itemsList = document.querySelectorAll('.check');
  closeBtns = document.querySelectorAll('.close-btn');
  const lastItemPosition = itemsList.length - 1;
  const lastItem = itemsList[lastItemPosition];
  const lastCloseBtn = closeBtns[lastItemPosition];
  lastItem.addEventListener('click', function () {
    strikeOut(this);
  });
  lastCloseBtn.addEventListener('click', function () {
    deleteItem(this);
  });
}

const addNewItem = () => {
  let item = enterInputEl.value;

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
  newList();
};

enterBtn.addEventListener('click', () => {
  if (enterInputEl.value !== '') addNewItem();
});

enterInputEl.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addNewItem();
});
