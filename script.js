const typedText = document.querySelector(".typed-text");
  const cursor = document.querySelector(".cursor");
  const phrases = ["Web Developer", "Java Enthusiast", "Creative Thinker"];
  let phraseIndex = 0;
  let charIndex = 0;
  let typing = true;
  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];
    if (typing) {
      typedText.textContent = currentPhrase.slice(0, ++charIndex);
      if (charIndex === currentPhrase.length) typing = false;
    } else {
      typedText.textContent = currentPhrase.slice(0, --charIndex);
      if (charIndex === 0) {
        typing = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, typing ? 150 : 100);
  }
  typeLoop();
  ScrollReveal({ reset: true, distance: '60px', duration: 1000, delay: 100 });
  ScrollReveal().reveal('section', { origin: 'bottom', interval: 200 });
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  });