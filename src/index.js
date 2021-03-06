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

console.log(freeCard, proCard, enterpriseCard);

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

buttons.forEach((btn) => {
  btn.addEventListener('click', buy);
});

function insertImages() {
  let svgPlanets = [free, pro, enterprise];
  planets.forEach((planet, index) => {
    console.log(planet, index);
    console.log(svgPlanets[index]);
    planet.src = svgPlanets[index];
  });
}

arrows.forEach((arrow, index) => {
  arrow.addEventListener('click', () => {
    changeCard(index);
    console.log(state.count);
  });

  arrow.addEventListener('touchstart', () => {
    changeCard(index);
    console.log(state.count);
  });
});

window.addEventListener('resize', (e) => {
  if (window.screen.width >= 1024) {
    freeCard.style.display = 'block';
    proCard.style.display = 'block';
    enterpriseCard.style.display = 'block';
  } else {
    freeCard.style.display = 'block';
    proCard.style.display = 'none';
    enterpriseCard.style.display = 'none';

    console.log(window.screen.orientation.type === 'landscape-primary');
    if (window.screen.orientation.type === 'landscape-primary') {
      freeCard.style.display = 'flex';
      proCard.style.display = 'none';
      enterpriseCard.style.display = 'none';
    };
  };

  // if(window.screen.orientation) {

  // }
});

function changeCard(index) {
  if (window.screen.width < 1023) {
    if (index === 1) {
      state.count += 1;
      if (state.count > 2) {
        state.count = 2;
      }
    }

    if (index === 0) {
      state.count -= 1;
      if (state.count < 0) {
        state.count = 0;
      }
    }

    if (state.count === 0) {
      if(window.screen.orientation.type === 'landscape-primary') {
        freeCard.style.display = 'flex';
      } else {
        freeCard.style.display = 'block';
      }
      proCard.style.display = 'none';
      enterpriseCard.style.display = 'none';
    }

    if (state.count === 1) {
      if(window.screen.orientation.type === 'landscape-primary') {
        proCard.style.display = 'flex';
      } else {
        proCard.style.display = 'block';
      }
      freeCard.style.display = 'none';
      enterpriseCard.style.display = 'none';
    }

    if (state.count === 2) {
      if(window.screen.orientation.type === 'landscape-primary') {
        enterpriseCard.style.display = 'flex';
      } else {
        enterpriseCard.style.display = 'block';
      }
      proCard.style.display = 'none';
      freeCard.style.display = 'none';
    }
  }
}

function toggle(e) {
  console.log(e);
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

function buy(event) {
  console.log(event);
  const modal = document.createElement('div');
  modal.classList.add('modal');
  // modal.innerHTML = templateModal;
  // document.body.appendChild();
}
