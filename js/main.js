const counters = document.querySelectorAll(".numero");
const speed = 150; // Quanto maior, mais lento

const startCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Ativar quando a seção aparecer na tela.
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      startCounters();
    }
  },
  { threshold: 0.5 },
);
const secaoEstatisticas = document.querySelector(".estatisticas");
if (secaoEstatisticas) {
  observer.observe(secaoEstatisticas);
}
//Menu hamburguer menu//

function menuOnClick() {
  const navList = document.querySelector(".nav-list");
  const icon = document.querySelector(".menu-bar i");

  if (navList && icon) {
    navList.classList.toggle("active");

    if (navList.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");

      if (!icon.classList.contains("fa-xmark")) {
        icon.classList.add("fa-times");
      }
    } else {
      icon.classList.remove("fa-xmark", "fa-times");
      icon.classList.add("fa-bars");
    }
  }
}
