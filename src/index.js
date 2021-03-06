const toggleButton = document.querySelector('#button');
const buyButton = document.querySelectorAll('.buy');
const buttons = [...buyButton];

import './styles/styles.css';

toggleButton.addEventListener('click', toggle);
buttons.forEach((btn) => {
  btn.addEventListener('click', buy);
});

let state = {
  positionEnd: false,
  annual: true,
  monthly: false,
};

function toggle(e) {
  const current = e.target;
  if (state.positionEnd === false) {
    state.positionEnd = true;
    state.annual = false;
    state.monthly = true;
    toggleButton.style.justifyContent = 'end';
  } else {
    state.positionEnd = false;
    state.annual = true;
    state.monthly = false;
    toggleButton.style.justifyContent = 'start';
  };
};

// const templateModal = ``;

function buy(event) {
  console.log(event);
  const modal = document.createElement('div');
  modal.classList.add('modal');
  // modal.innerHTML = templateModal;

  document.body.appendChild();
};
