import '../scss/style.scss';
import Swiper from 'swiper';

const brandsSwiper = new Swiper('.brands .swiper-container', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 20,
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    520: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});

const techSwiper = new Swiper('.tech .swiper-container', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 20,
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const priceSwiper = new Swiper('.price .swiper-container', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

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

modalOverlay.addEventListener('click', function() {
  modalPhone.classList.remove('modal-phone--show');
  modalChat.classList.remove('modal-chat--show');
  modalOverlay.classList.remove('overlay--show');
});



