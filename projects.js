new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});

let cc = document.querySelector('#cc-btn');
let adv = document.querySelector('#adv-btn');
let bb = document.querySelector('#bb-btn');
let type = document.querySelector('#type-btn');
let duck = document.querySelector('#duck-btn');

cc.addEventListener('click', function() {
  window.location.href = 'https://github.com/cung1234/int-u2-project-starter-code-3';
});

adv.addEventListener('click', function() {
  window.location.href = 'https://github.com/cung1234/int-u3-project-starter-codes';
});

bb.addEventListener('click', function() {
  window.location.href = 'https://github.com/cung1234/int-u4-project-23-24-starter-code';
});

type.addEventListener('click', function() {
  window.location.href = 'https://github.com/cung1234/speed-typing-demo';
});

duck.addEventListener('click', function() {
  window.location.href = 'https://py3.codeskulptor.org/#user310_EqverBirrsBRpQn.py';
});