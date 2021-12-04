(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  const body = document.querySelector('body');

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });


  handlerEscModalClose();
})();

// const activeSlide = document.querySelector('active-slide');
// const sliderLines = document.querySelector('slider-lines-icon');

// if (activeSlide === true) {
//   sliderLinesIcon.classList.add("active-line");
//   }

// const btnForward = document.querySelector(".hero-section__btn__forward");
// const btnBack = document.querySelector(".hero-section__btn__back");




// Реализация закрытия модалки при клике в бекдроп
const menuBtnRef = document.querySelector('[data-menu-button]');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');

backdrop.addEventListener('click', onBackdropClick);
function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onModalClose();
  }
}

// Функция закрытия модального окна при нажатии на Esc
function handlerEscModalClose() {
  window.addEventListener('keydown', onEsckeyClick);
  function onEsckeyClick(evt) {
    if (evt.code === 'Escape') {
      onModalClose();
    }
  }
}
// Функция закрытия модального окна и снятия всех классов
const mobMenu = document.querySelector("[the-menu]");

function onModalClose() {
  
  backdrop.classList.add('is-hidden');
  mobMenu.classList.toggle('is-open');

  body.classList.remove('modal-open');

}

// закрытие модального окна при клике по элементам навигации
const mainModalMenuListItems = document.querySelector('.mobile-nav');
mainModalMenuListItems.addEventListener('click', onMainMenuItemsClick);


function onMainMenuItemsClick(evt) {
  if (!evt.target.classList.value === 'mobile-nav__item') {
    return;
  }
  onModalClose();
}

const onlineBtn = document.querySelector('.mobile-menu__modal-btn');
onlineBtn.addEventListener('click', onOnlineBtnClick);
function onOnlineBtnClick(evt) {
  if (!evt.target.classList.value === 'footer') {
    return;
  }
  onModalClose();
}