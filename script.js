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

const addNewItem = () => {
  let item = enterInputEl.value;
  item = item.replace(item[0], item[0].toUpperCase());

  const checkInput = document.createElement('input');
  checkInput.setAttribute('type', 'checkbox');
  checkInput.setAttribute('class', 'check');
  checkInput.addEventListener('click', function () {
    strikeOut(this);
  });

  const closeIcon = document.createElement('i');
  closeIcon.setAttribute('class', 'fa-solid fa-xmark fa-xs');
  const close = document.createElement('a');
  close.setAttribute('href', '#');
  close.setAttribute('class', 'close-btn');
  close.append(closeIcon);
  close.addEventListener('click', function () {
    deleteItem(this);
  });

  const li = document.createElement('li');
  li.append(checkInput);
  li.append(document.createTextNode(` ${item}`));
  li.append(close);
  ul.append(li);

  enterInputEl.value = '';
};

enterBtn.addEventListener('click', () => {
  if (enterInputEl.value !== '') addNewItem();
});

enterInputEl.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addNewItem();
});
