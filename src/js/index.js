import '../scss/style.scss';
import Swiper from 'swiper';

const breakpoint = window.matchMedia('(min-width: 440px)');

let brandsSwiper = undefined;
let techSwiper = undefined;
let priceSwiper = undefined;


const breakpointChecker1 = function() {
  if (breakpoint.matches === true) {
    if (brandsSwiper !== undefined) brandsSwiper.destroy(true, true);

    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper(brandsSwiper, '.brands .swiper-container');
  }
};

const breakpointChecker2 = function() {
  if (breakpoint.matches === true) {
    if (techSwiper !== undefined) techSwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper(techSwiper, '.tech .swiper-container');
  }
};

const breakpointChecker3 = function() {
  if (breakpoint.matches === true) {
    if (priceSwiper !== undefined) priceSwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper(priceSwiper, '.price .swiper-container');
  }
};

const enableSwiper = function(swiperName, swiperClass) {
  swiperName = new Swiper(swiperClass, {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 20,
      slidesPerView: 'auto',

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
};

breakpoint.addListener(breakpointChecker1);
breakpoint.addListener(breakpointChecker2);
breakpoint.addListener(breakpointChecker3);
breakpointChecker1();
breakpointChecker2();
breakpointChecker3();

const serviceReadmore = document.querySelector('.service__button');
const serviceText = document.querySelector('.service__text2');

serviceReadmore.addEventListener('click', function(){
  serviceText.classList.toggle('service__text--visibility');
});

const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const iconButtons = document.querySelectorAll('.button-icon');
const modalPhone = document.querySelector('.modal-phone');
const modalChat = document.querySelector('.modal-chat');
const modalOverlay = document.querySelector('.modal-overlay');

for(let i = 0; i < iconButtons.length; i++){
  iconButtons[i].addEventListener("click", function() {
    console.log("clicked " + iconButtons[i].dataset.icon);

    switch (iconButtons[i].dataset.icon) {
      case "burger":
        sidebar.classList.toggle('sidebar--show');
        break;
      case "repair":
        //console.log( 'repair' );
        break;
      case "checkstatus":
        //console.log( 'checkstatus' );
        break;
      case "sidebar-close":
        sidebar.classList.toggle('sidebar--show');
        break;
      case "search":
        console.log( 'search' );
        break;
      case "phone":
        modalPhone.classList.add('modal-phone--show');
        modalOverlay.classList.add('overlay--show');
        break;
      case "phone-close":
        modalPhone.classList.remove('modal-phone--show');
        modalOverlay.classList.remove('overlay--show');
        break;
      case "chat":
        modalChat.classList.add('modal-chat--show');
        modalOverlay.classList.add('overlay--show');
        break;
      case "chat-close":
        modalChat.classList.remove('modal-chat--show');
        modalOverlay.classList.remove('overlay--show');
        break;
      case "profile":
        console.log( 'profile' );
        break;
      default:
        console.log( "Нет таких значений" );
    }
  });
};

const brandsCollection = document.querySelector('.brands__container');
const brandsToggleButton = document.querySelector('.brands__button-show-hide');
const brandsButtonTextShow = brandsToggleButton.querySelector('.button-show-hide__textShow');
const brandsButtonTextHide = brandsToggleButton.querySelector('.button-show-hide__textHide');

brandsToggleButton.addEventListener('click', function(){
  brandsCollection.classList.toggle('brands__container--overflow');
  brandsToggleButton.classList.toggle('button-show-hide--icon-arrowsup');
  brandsToggleButton.classList.toggle('button-show-hide--icon-arrowsdown');
  brandsButtonTextShow.classList.toggle('button-show-hide__textShow--visibility');
  brandsButtonTextHide.classList.toggle('button-show-hide__textHide--visibility');
});

const techCollection = document.querySelector('.tech__container');
const techToggleButton = document.querySelector('.tech__button-show-hide');
const techButtonTextShow = techToggleButton.querySelector('.button-show-hide__textShow');
const techButtonTextHide = techToggleButton.querySelector('.button-show-hide__textHide');

techToggleButton.addEventListener('click', function(){
  techCollection.classList.toggle('tech__container--overflow');
  techToggleButton.classList.toggle('button-show-hide--icon-arrowsup');
  techToggleButton.classList.toggle('button-show-hide--icon-arrowsdown');
  techButtonTextShow.classList.toggle('button-show-hide__textShow--visibility');
  techButtonTextHide.classList.toggle('button-show-hide__textHide--visibility');
});

modalOverlay.addEventListener('click', function() {
  modalPhone.classList.remove('modal-phone--show');
  modalChat.classList.remove('modal-chat--show');
  modalOverlay.classList.remove('overlay--show');
});
