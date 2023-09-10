window.addEventListener("load", windowLoad);
window.addEventListener("scroll", pageScroll);

function windowLoad() {
  document.documentElement.classList.add("loaded");

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
        delay: 4500,
      },
      speed: 800,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
    });
  }

  if (document.querySelector(".slider-portfolio")) {
    new Swiper(".slider-portfolio", {
      navigation: {
        nextEl: '.slider-portfolio__button-next',
        prevEl: '.slider-portfolio__button-prev',
      },
      pagination: {
        el: '.slider-portfolio__pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 15,
      grid: {
        fill: "row",
        rows: 2,
      },
      speed: 800,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          grid: {
            fill: "row",
            rows: 2,
          },
        },
        570: {
          slidesPerView: 2,
          spaceBetween: 15,
          grid: {
            fill: "row",
            rows: 2,
          },
        },
        768: {
          slidesPerView: 3,
          grid: {
            fill: "row",
            rows: 2,
          },
          spaceBetween: 20
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            fill: "row",
            rows: 2,
          },
        }
      }
    });
  }
}

function pageScroll() {
  scrollY > 50
    ? document.querySelector(".header").classList.add("scroll")
    : document.querySelector(".header").classList.remove("scroll");
}

const menuList = document.querySelector(".menu__list");
const menuBtn = document.querySelector(".menu__burger");

menuBtn.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("lock");
  menuList.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

const menuLink = document.querySelectorAll(".menu__link");

menuLink.forEach(link => {
  link.addEventListener("click", function () {
    document.querySelector("body").classList.remove("lock");
    menuList.classList.remove("active");
    menuBtn.classList.remove("active");
  })
})