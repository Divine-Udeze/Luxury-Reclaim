const texts = [
  "Timeless Luxury",
  "Modern Elegance",
  "Refined Craftsmanship",
  "Silent Wealth"
];

let i = 0;

setInterval(() => {
  const subtitle = document.getElementById("subtitle");

  subtitle.style.opacity = 0;

  setTimeout(() => {
    i = (i + 1) % texts.length;
    subtitle.textContent = texts[i];
    subtitle.style.opacity = 0.7;
  }, 700);

}, 3500);