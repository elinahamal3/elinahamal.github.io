/* --- Typing Animation --- */
const words = ["Web Developer", "Frontend Expert", "UI/UX Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const textElement = document.getElementById("typing-text");

  // If the element isn't found yet, wait 100ms and try again
  if (!textElement) {
    setTimeout(typeEffect, 80);
    return;
  }

  const currentWord = words[wordIndex];

  // Handle typing and deleting
  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Adjust speed
  let typeSpeed = isDeleting ? 60 : 120;

if (!isDeleting && charIndex === currentWord.length) {
  typeSpeed = 600;
  isDeleting = true;
} else if (isDeleting && charIndex === 0) {
  isDeleting = false;
  wordIndex = (wordIndex + 1) % words.length;
  typeSpeed = 260;
}

  setTimeout(typeEffect, typeSpeed);
}

// Start the effect immediately
typeEffect();

/* --- Dark Theme Toggle --- */
const themeButton = document.getElementById("theme-button");
if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeButton.classList.toggle("fa-sun");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light",
    );
  });
}

// Load saved theme on startup
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  if (themeButton) themeButton.classList.add("fa-sun");
}

/* --- ScrollReveal (Optional Fix) --- */
// Make sure this is BELOW the typing effect in your file
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1300,
  delay: 80,
  reset: true,
});
sr.reveal(".hero-content, .section-title");
sr.reveal(".about-card, .find-me-card", { origin: "left" });
sr.reveal(".skills-card, .contact-form", { origin: "right" });
sr.reveal(".stat-card", { interval: 100 });
