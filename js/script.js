window.addEventListener("load", windowLoad);

function windowLoad() {
  if (document.querySelector(".slider-hero")) {
    new Swiper(".slider-hero", {
      direction: "vertical",
      loop: true,
      simulateTouch: false,
      pagination: {
        el: ".slider-hero__pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        },
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      autoplay: {
        delay: 3000,
      },
      speed: 800,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
    });
  }
}