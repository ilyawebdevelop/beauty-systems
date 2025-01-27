import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import AirDatepicker from 'air-datepicker';
import "./modules/bootstrap.bundle.min.js";
import "./modules/select2.min.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});


$(document).ready(function () {
  $('.formSelect').select2();
});

// air datepicker
// init air calendar
let dp = new AirDatepicker('#calendarEl', {
  multipleDates: true,
  toggleSelected: false,
  onChangeView() {
    // Disable all 12th dates in month
    hideInfoEvent();
    eventShow();
  },
  onChangeViewDate() {
    setTimeout(function () {
      hideInfoEvent();
      eventShow();
    }, 100);
  }
});


// get selectedDates Array;
// let dpSelectedArray = ;
if (document.querySelector('#calendarEl')) {
  let date = new Date('2024-12-25');
  let date_2 = new Date('2024-12-15');
  let date_3 = new Date('2024-12-06');
  dp.selectDate([date, date_2, date_3]);
}

function eventShow() {
  let airDatepickerCells = document.querySelectorAll('.air-datepicker-cell.-day-.-selected-');
  airDatepickerCells.forEach(el => {
    el.addEventListener('click', () => {
      airDatepickerCells.forEach(elem => {
        elem.classList.remove('cell-show-message');
      });
      el.classList.add('cell-show-message');
      let infoCol = document.querySelector('.eventRegister');
      infoCol.classList.remove('d-none');
      infoCol.classList.add('d-block');
    });
  });
}
eventShow();

function hideInfoEvent() {
  let infoCol = document.querySelector('.eventRegister');
  infoCol.classList.add('d-none');
  infoCol.classList.remove('d-block');
}

// hideInfoEvent();
let eventRegisterClose = document.querySelector('.eventRegisterClose');
eventRegisterClose?.addEventListener('click', () => {
  hideInfoEvent();
  let airDatepickerCells = document.querySelectorAll('.air-datepicker-cell.-day-.-selected-');
  airDatepickerCells.forEach(el => {
    el.classList.remove('cell-show-message');
  });

});


// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Wrap every letter in a span
// var textWrapper = document.querySelector('.introSlideTitleBottom .h1');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// anime.timeline({ loop: false })
//   .add({
//     targets: '.introSlideTitleBottom .letter',
//     opacity: [0, 1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i + 1)
//   }).add({
//     targets: '.introSlideTitleBottom .h1',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
// Инициализация слайдера introSlider
const introSlider = document.querySelector('.introSlider');
var mySwiperIntro = new Swiper(introSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  loop: true,
  on: {
    slideChange: function () {
      const index_activeSlide = this.activeIndex;
      const index_realSlide = this.realIndex;
      const activeSlide = this.slides[index_activeSlide];
      const realSlide = this.slides[index_realSlide];
      // Wrap every letter in a span
      let textWrapper = activeSlide.querySelector('.introSlideTitleBottom .h1');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      anime.timeline({ loop: false })
        .add({
          targets: activeSlide.querySelectorAll('.introSlideTitleBottom .h1 .letter'),
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 550,
          delay: (el, i) => 150 * (i + 1)
        });

      anime.timeline({ loop: false })
        .add({
          targets: realSlide.querySelectorAll('.introSlideTitleBottom .h1 .letter'),
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    },
  },
  // autoplay: {
  //   delay: 5000,
  // },
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: document.querySelector('.introSlider .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

let introSliderNavNextArray = document.querySelectorAll('.introSlide .navArrowNext');
introSliderNavNextArray.forEach(el => {
  el.addEventListener('click', () => {
    mySwiperIntro.slideNext()
  });
});
setTimeout(function () {

  // Инициализация слайдера introEventSlider
  const introEventSlider = document.querySelector('.introEventSlider');
  var mySwiperEventSlider = new Swiper(introEventSlider, {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: document.querySelector('.introEventSlider .navArrowPrev'),
      nextEl: document.querySelector('.introEventSlider .navArrowNext'),
    },
  });


}, 100);



// Инициализация слайдера productCardSlider
document.querySelectorAll('.productCardSlider').forEach(n => {
  const mySwiperProductCard = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    pagination: {
      el: n?.closest('.productCard').querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
  });
});

// Инициализация слайдера catalogSlider
document.querySelectorAll('.catalogSlider').forEach(n => {
  const mySwiperCatalog = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 50,
    speed: 600,
    loop: false,
    pagination: {
      el: n?.querySelector('.catalogSliderPagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 40,
      },
      1400: {
        spaceBetween: 50,
      }
    },
  });
});

// Инициализация слайдера galLgSlider
document.querySelectorAll('.galLgSlider').forEach(n => {
  const mySwiperGalLg = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 600,
    pagination: {
      el: n?.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
      },
      576: {
        spaceBetween: 50,
      },
    },
  });
});

// Инициализация слайдера videoSlider
document.querySelectorAll('.videoSlider').forEach(n => {
  const mySwiperVideo = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 25,
    speed: 600,
    pagination: {
      el: n?.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 40,
      },
      1400: {
        spaceBetween: 50,
      }
    },
  });
});

// Инициализация слайдера partnersSlider
document.querySelectorAll('.partnersSlider').forEach(n => {
  const mySwiperPartners = new Swiper(n, {
    slidesPerView: 'auto',
    spaceBetween: 40,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: n?.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
      },
      576: {
        spaceBetween: 40,
      },
    },
  });
});

// Инициализация слайдера blogSlider
document.querySelectorAll('.blogSlider').forEach(n => {
  const mySwiperBlog = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 600,
    pagination: {
      el: n?.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера teamSlider
document.querySelectorAll('.teamSlider').forEach(n => {
  const mySwiperTeam = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 600,
    pagination: {
      el: n?.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера finishedSlider
document.querySelectorAll('.finishedSlider').forEach(n => {
  const mySwiperFinished = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 50,
    speed: 600,
    pagination: {
      el: n?.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1401: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
});

// Инициализация слайдера smiSlider
document.querySelectorAll('.smiSlider').forEach(n => {
  const mySwiperSmi = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 600,
    pagination: {
      el: n?.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    },
  });
});

// Инициализация слайдера priceSlider
document.querySelectorAll('.priceSlider').forEach(n => {
  const mySwiperPrice = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 600,
    pagination: {
      el: n?.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    },
  });
});

// Инициализация слайдера productSlider
const productSlider = document.querySelector('.productSlider');
var mySwiperProduct = new Swiper(productSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: document.querySelector('.productSlider .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
  thumbs: { // указываем на превью слайдер
    swiper: {
      el: document.querySelector('.productThumbSlider'),
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 600,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          spaceBetween: 8,
        },
        576: {
          spaceBetween: 10,
        },
        1200: {
          spaceBetween: 16,
        },
      },
    }
  },
});

// Инициализация слайдера reviewsSlider
document.querySelectorAll('.reviewsSlider').forEach(n => {
  const mySwiperReviews = new Swiper(n, {
    slidesPerView: 2,
    spaceBetween: 25,
    speed: 600,
    pagination: {
      el: n?.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
});

const mediaQueryMin992 = window.matchMedia('(min-width: 992px)');
if (mediaQueryMin992.matches) {
  // Инициализация слайдера reviewsSliderSm
  document.querySelectorAll('.reviewsSliderSm').forEach(n => {
    const mySwiperReviewsSm = new Swiper(n, {
      slidesPerView: 3,
      spaceBetween: 25,
      speed: 600,
      pagination: {
        el: n?.querySelector('.swiper-pagination'),
        clickable: true,
        type: 'bullets',
      },
      navigation: {
        prevEl: n.querySelector('.navArrowPrev'),
        nextEl: n.querySelector('.navArrowNext'),
      },
    });
  });
}


// loadmore text
let jsShowMore = document.querySelectorAll('.js-show-more');
jsShowMore.forEach(el => {
  el.addEventListener('click', () => {
    let contentHidden = el.closest('.cardText').querySelector('.content');
    contentHidden.classList.toggle("content--hidden");
    contentHidden.classList.toggle("content--visible");
    el.style.display = 'none';
  });
});

const mediaQuery991 = window.matchMedia('(max-width: 991px)');

if (mediaQuery991.matches) {
  // Инициализация слайдера reviewsSlider
  document.querySelectorAll('.advSlider').forEach(n => {
    const mySwiperAdvItem = new Swiper(n, {
      slidesPerView: 2,
      spaceBetween: 20,
      speed: 600,
      pagination: {
        el: n?.querySelector('.swiper-pagination'),
        clickable: true,
        type: 'bullets',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  });
}

let searchInputEach = document.querySelectorAll('.searchInputW input');
searchInputEach.forEach(el => {
  let elClose = el.closest('.searchInputW').querySelector('.removeTextBtn');
  el?.addEventListener("input", (input) => {
    if (el.value != '') {
      elClose.classList.add('active');
    } else {
      elClose.classList.remove('active');
    }
  });
  elClose?.addEventListener('click', () => {
    el.value = '';
    el.focus();
    elClose.classList.remove('active');
  });
});

//отключаем зум колёсиком мышки
let mapIframe = document.querySelector('.mapIframe');
let mapAction = document.querySelector('.mapAction');

mapAction?.addEventListener('click', () => {
  mapIframe.classList.add('onScroll');
});

document.addEventListener('click', e => {
  if (mapAction) {
    let target = e.target;
    let its_map = target == mapAction || mapAction.contains(target);

    let menu_is_active = mapIframe.classList.contains('onScroll');


    if (!its_map && menu_is_active) {
      mapIframe?.classList.remove('onScroll');
    }
  }

})

function findOffset(element) {

  if (mediaQuery991.matches) {
    var top = 400, left = 0;
  } else {
    var top = 800, left = 0;
  }

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left
  };
}

window.onload = function () {
  var stickyHeader = document.getElementById('header-fixed');
  var headerOffset = findOffset(stickyHeader);

  window.onscroll = function () {
    // body.scrollTop is deprecated and no longer available on Firefox
    var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (bodyScrollTop > headerOffset.top) {
      stickyHeader.classList.add('fixed');
    } else {
      stickyHeader.classList.remove('fixed');
    }
  };

};


// Burger
const btnMenuArray = document.querySelectorAll('.hamburger');
const menu = document.querySelector('.headerMobMenu');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');
const searchW = document.querySelector('.headerFixSearchW');
// const menuSearchBtn = document.querySelector('.menuSearchBtn');
const searchBtn = document.querySelector('.searchBtn');
const headerFixCloseBtn = document.querySelector('.headerFixCloseBtn');
let blogSearchBtn = document.querySelector('.blogSearchBtn');
let blogSearchW = document.querySelector('.blogSearchW');




setTimeout(function () {
  let blogSort = document.querySelector('.blogSort+.select2');
  blogSearchBtn?.addEventListener('click', () => {
    blogSearchBtn.classList.toggle('active');
    blogSearchW.classList.toggle('active');
    blogSort.classList.toggle('active');
  });
}, 100);

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const toggleSearch = function () {
  searchW.classList.toggle('active');
}
const searchClose = function () {
  toggleSearch();
}
const menuClose = function () {
  bodyOverflow();
  toggleMenu();
}

btnMenuArray.forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
    bodyOverflow();
  });
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

searchBtn?.addEventListener('click', function (e) {
  toggleSearch();
});
headerFixCloseBtn?.addEventListener('click', function (e) {
  searchClose();
});


function openSearch() {
  let headerSearch = document.querySelector('.headerSearch');
  headerSearch.classList.add('active');
}
function closeSearch() {
  let headerSearch = document.querySelector('.headerSearch');
  headerSearch.classList.remove('active');
}


let headerSearchBtnAll = document.querySelectorAll('.header-action-btn');
headerSearchBtnAll.forEach(el => {
  el.addEventListener('click', () => {
    openSearch();
  });
});



document.addEventListener('click', e => {
  let headerSearch = document.querySelector('.headerSearch');
  let headerSearchBtn = document.querySelector('.headerSearchBtn');
  let headerFixedSearchBtn = document.querySelector('.header-fixed-search-btn');
  let headerMobileSearchBtn = document.querySelector('.headerMobMenu-search-btn');

  let target = e.target;
  let its_Search = target == headerSearch || headerSearch.contains(target);
  let its_HeaderSearchBtn = target == headerSearchBtn || headerSearchBtn.contains(target);
  let its_headerFixedSearchBtn = target == headerFixedSearchBtn || headerFixedSearchBtn.contains(target);
  let its_headerMobileSearchBtn = target == headerMobileSearchBtn || headerMobileSearchBtn.contains(target);
  // let its_SearchBtn = target == headerSearch || headerSearch.contains(target);
  if (!its_Search && !its_HeaderSearchBtn && !its_headerFixedSearchBtn && !its_headerMobileSearchBtn) {
    closeSearch();
  }

});

// open and close widget
function toggleShowWidget(array) {
  array.forEach(el => {
    let parent = el.closest('.widget-item');
    let action = parent.querySelector('.widget-action');
    el.addEventListener('click', () => {
      action.classList.toggle('active');
      parent.classList.toggle('active');
      el.classList.toggle('active');
    });
  });
}
let widgetBtnArray = document.querySelectorAll('.widget-btn');
let widgetCartBtnArray = document.querySelectorAll('.widget-cart-btn');

toggleShowWidget(widgetBtnArray);
toggleShowWidget(widgetCartBtnArray);

let widgetVideo = document.querySelector('.widget-video');


widgetVideo.addEventListener('click', () => {
  widgetVideo.classList.toggle('active');
  let playerCaptions = document.querySelector('#player-widget');
  playerCaptions.play();

});


