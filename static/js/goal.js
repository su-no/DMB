const fadeEls = document.querySelectorAll('.fade-in');
const fadeEl = document.querySelector('.goal__wrapper');

// gsap
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간 , 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

//totop
const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
