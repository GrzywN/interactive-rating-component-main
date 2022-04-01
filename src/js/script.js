const inputElements = {
  1: document.querySelector('#rating-1'),
  2: document.querySelector('#rating-2'),
  3: document.querySelector('#rating-3'),
  4: document.querySelector('#rating-4'),
  5: document.querySelector('#rating-5'),
};

const labelElements = {
  1: document.querySelector('.card__label[for="rating-1"]'),
  2: document.querySelector('.card__label[for="rating-2"]'),
  3: document.querySelector('.card__label[for="rating-3"]'),
  4: document.querySelector('.card__label[for="rating-4"]'),
  5: document.querySelector('.card__label[for="rating-5"]'),
};

const formElement = document.querySelector('.card__form');
const frontCardElement = document.querySelector('.card__front');
const innerCardElement = document.querySelector('.card__inner');
const ratingElement = document.getElementById('selected-rating');

let selectedRating;

const displayThankYouSite = () => {
  ratingElement.innerText = `${selectedRating}`;
  frontCardElement.style.pointerEvents = 'none';
  frontCardElement.style.opacity = '0';
  innerCardElement.style.transform = 'rotateX(180deg)';
};

for (const property in inputElements) {
  inputElements[property].checked = false;
  inputElements[property].addEventListener('change', () => {
    for (const property in labelElements) labelElements[property].dataset.active = 'false';
    selectedRating = property;
    labelElements[property].dataset.active = 'true';
  });
}

for (const property in labelElements) {
  labelElements[property].addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      for (const property in labelElements) labelElements[property].dataset.active = 'false';
      selectedRating = property;
      labelElements[property].dataset.active = 'true';
    }
  });
}

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  if (selectedRating != null) displayThankYouSite();
});
