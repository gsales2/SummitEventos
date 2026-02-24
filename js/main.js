const counters = document.querySelectorAll('.numero');
const speed = 150; // Quanto maior, mais lento

const startCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
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
const observer = new IntersectionObserver((entries) => {
  if(entries[0].isIntersecting) {
    startCounters();
  }
}, { threshold: 0.5 });

observer.observe(document.querySelector('.estatisticas'));