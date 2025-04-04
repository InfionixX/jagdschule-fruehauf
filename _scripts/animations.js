document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in-training");

    function checkVisibility() {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                    element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in-course");

  function checkVisibility() {
      fadeElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
                  element.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in-testimonials");

  function checkVisibility() {
      fadeElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
                  element.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});


document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".profile");
  
    // Intersection Observer für jedes Bild
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Bild nach einer Verzögerung anzeigen
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 500); // Verzögerung von 0.5 Sekunden für jedes Bild
          }
        });
      },
      { threshold: 0.3 } // 30% der Bilder müssen sichtbar sein
    );
  
    profiles.forEach(profile => {
      observer.observe(profile); // Jedes Bild wird überwacht
    });
  });