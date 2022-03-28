const inputElements = {
  1: document.querySelector('#rating-1'),
  2: document.querySelector('#rating-2'),
  3: document.querySelector('#rating-3'),
  4: document.querySelector('#rating-4'),
  5: document.querySelector('#rating-5'),
};

const labelElements = {
  1: document.querySelector('.rating-component__label[for="rating-1"]'),
  2: document.querySelector('.rating-component__label[for="rating-2"]'),
  3: document.querySelector('.rating-component__label[for="rating-3"]'),
  4: document.querySelector('.rating-component__label[for="rating-4"]'),
  5: document.querySelector('.rating-component__label[for="rating-5"]'),
};

const formElement = document.querySelector('.rating-component__form');
const componentElement = document.querySelector('.rating-component');

function renderThankYouSite(element, rating) {
  element.dataset.submited = 'true';
  element.innerHTML = `
  <img src="images/illustration-thank-you.svg" alt="" class="rating-component__illustration" />
  <div class="rating-component__you-selected">You selected ${rating} out of 5</div>
  <h1 class="rating-component__header rating-component__header--center">Thank you!</h1>
  <p class="rating-component__p rating-component__p--center">
  We appreciate you taking the time to give a rating. If you ever need
  more support, don’t hesitate to get in touch!
  </p>
  `;
}

let selectedRating;

for (const property in inputElements) {
  inputElements[property].checked = false;
  inputElements[property].addEventListener('change', () => {
    for (const property in labelElements)
      labelElements[property].dataset.active = 'false';
    selectedRating = property;
    labelElements[property].dataset.active = 'true';
  });
}

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  if (selectedRating != null)
    renderThankYouSite(componentElement, selectedRating);
});
