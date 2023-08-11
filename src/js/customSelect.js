function customSelect() {
  const inputs = document.querySelectorAll('.top-sellers-select-body-option-input');

  getSelect().addEventListener('click', isOpenSelect);
  inputs.forEach((input) => input.addEventListener('change', isValueSelect));
};

const getArrowSelect = () => {return document.querySelector('.top-sellers-select-header-arrow')};

const getHeaderSelect = () => {return document.querySelector('.top-sellers-select-header-name')};

const getSelect = () => {return document.querySelector('.top-sellers-select')};

function isOpenSelect() {
  this.classList.toggle('is-open');
  getArrowSelect().classList.toggle('is-open');
};

function isValueSelect(event) {
  const name = event.target.dataset.name;
  const option = event.target.closest('.top-sellers-select-body-option');

  getHeaderSelect().innerText = name;
  getSelect().classList.remove('is-open');
  getArrowSelect().classList.remove('is-open');
  document.querySelector('.top-sellers-select-body-option.active').classList.remove('active');
  option.classList.add('active');
};

customSelect();