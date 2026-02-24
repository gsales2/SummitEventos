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

// Ativar quando a seção aparecer na tela (Intersection Observer)
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      startCounters();
    }
  },
  { threshold: 0.5 },
);

observer.observe(document.querySelector(".estatisticas"));

//Menu hamburguer menu//

function menuOnClick() {
  const navList = document.querySelector(".nav-list");
  const icon = document.querySelector(".menu-bar i");

  if (navList && icon) {
    navList.classList.toggle("active");

    // Verifica se o menu abriu
    if (navList.classList.contains("active")) {
      // Tenta o xmark, se não, tenta o times
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");

      // Caso seu Font Awesome seja antigo e o xmark falhe:
      if (!icon.classList.contains("fa-xmark")) {
        icon.classList.add("fa-times");
      }
    } else {
      // Volta para o hambúrguer
      icon.classList.remove("fa-xmark", "fa-times");
      icon.classList.add("fa-bars");
    }
  }
}
