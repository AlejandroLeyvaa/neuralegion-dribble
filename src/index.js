import free from './planet_simple.svg';
import pro from './Planet_two_rings.svg';
import enterprise from './Solar_system.svg';
import './styles/styles.css';

const toggleButton = document.querySelector('#button');
const freeCard = document.querySelector('.free');
const proCard = document.querySelector('.pro');
const enterpriseCard = document.querySelector('.enterprise');
const buyButton = document.querySelectorAll('.buy');
const planetElements = document.querySelectorAll('.planet');
const arrowElement = document.querySelectorAll(
  '.next-buttons-container .button'
);

const buttons = [...buyButton];
const planets = [...planetElements];
const arrows = [...arrowElement];

let state = {
  positionEnd: false,
  count: 0,
  annual: true,
  monthly: false,
  free: true,
  pro: false,
  enterprise: false,
};

toggleButton.addEventListener('touchstart', toggle);
toggleButton.addEventListener('click', toggle);
window.addEventListener('load', insertImages);

// buttons.forEach((btn) => {
//   btn.addEventListener('click', buy);
// });

function insertImages() {
  let svgPlanets = [free, pro, enterprise];
  planets.forEach((planet, index) => {
    planet.src = svgPlanets[index];
  });
}

arrows.forEach((arrow, index) => {
  arrow.addEventListener('click', () => {
    setCount(index);
    condition();
    renderCard();
  });

  arrow.addEventListener('touchstart', () => {
    setCount(index);
    condition();
    renderCard();
  });
});

function setCount(index) {
  // Card Left

  if (index === 0) {
    state.count -= 1;
    if (state.count < 0) {
      state.count = 0;
    }
  }

  // Card Right

  if (index === 1) {
    state.count += 1;
    if (state.count > 2) {
      state.count = 2;
    }
  }
}

function condition() {
  switch (state.count) {
    case 0: {
      state.free = true;
      state.pro = false;
      state.enterprise = false;
      break;
    }
    case 1: {
      state.free = false;
      state.pro = true;
      state.enterprise = false;
      break;
    }
    case 2: {
      state.free = false;
      state.pro = false;
      state.enterprise = true;
      break;
    }
    default:
      state.free = true;
  }
}

function renderCard() {
  if (state.free) {
    freeCard.style.display = 'block';
  } else {
    freeCard.style.display = 'none';
  }

  if (state.pro) {
    proCard.style.display = 'block';
  } else {
    proCard.style.display = 'none';
  }

  if (state.enterprise) {
    enterpriseCard.style.display = 'block';
  } else {
    enterpriseCard.style.display = 'none';
  }
}

window.addEventListener('load', (e) => {
  state.count = 0;
  if (window.screen.width > 1023) {
    state.free = true;
    state.pro = true;
    state.enterprise = true;
  } else {
    state.free = true;
    state.pro = false;
    state.enterprise = false;
  }
});

window.addEventListener('resize', (e) => {
  if (window.screen.width > 1023) {
    state.count = 0;
    state.free = true;
    state.pro = true;
    state.enterprise = true;
  } else {
    state.count = 0;
    state.free = true;
    state.pro = false;
    state.enterprise = false;
  }
  renderCard();
});

// function changeCard(index) {
//   if(window.screen.width < 1023) {
//     if(index === 1) {
//       state.count+= 1;
//     if(state.count > 2) {
//       state.count = 2;
//     };
//   };

//   if(index === 0) {
//     state.count-= 1;
//     if(state.count < 0) {
//       state.count = 0;
//     };
//   };

//   if(state.count === 0) {
//     freeCard.style.display = 'block';
//     proCard.style.display = 'none';
//     enterpriseCard.style.display = 'none';
//   };

//   if(state.count === 1) {
//     freeCard.style.display = 'none';
//     enterpriseCard.style.display = 'none';
//     proCard.style.display = 'block';
//   };

//   if(state.count === 2) {
//     proCard.style.display = 'none';
//     freeCard.style.display = 'none';
//     enterpriseCard.style.display = 'block';
//   };
// };
// };

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
  }
}

// const templateModal = ``;

// function buy(event) {
//   const modal = document.createElement('div');
//   modal.classList.add('modal');
//   // modal.innerHTML = templateModal;
//   // document.body.appendChild();
// }
