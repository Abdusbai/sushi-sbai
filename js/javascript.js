const Button = document.querySelector(".btn-mobile");
const header = document.querySelector(".header");
const button_menu = document.getElementsByName("menu-outline")[0];
const nav = document.querySelectorAll(".LK");
const hero = document.querySelector(".header");

Button.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const obs = new IntersectionObserver(
  function (entr) {
    const ent = entr[0];

    if (!ent.isIntersecting) {
      document.querySelector(".nav").classList.add("sticky");
      button_menu.classList.add("color-333");
      for (var i = 0; i < nav.length; i++) {
        nav[i].classList.add("color-333");
      }
    } else {
      document.querySelector(".nav").classList.remove("sticky");
      for (var i = 0; i < nav.length; i++) {
        nav[i].classList.remove("color-333");
        button_menu.classList.remove("color-333");
      }
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(hero);

nav.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (
      link.classList.contains("nav-link") ||
      link.classList.contains("btn-menu")
    )
      header.classList.toggle("nav-open");
  });
});

const yearC = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearC.textContent = currentYear;
