let cart = JSON.parse(localStorage.getItem("cart")) || [];

// CART SYSTEM
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// CART COUNT
function updateCartCount() {
  const count = document.getElementById("cartCount");
  if (count) count.innerText = cart.length;
}

// SUBTITLE ROTATION
const texts = [
  "Timeless Luxury",
  "Modern Elegance",
  "Silent Wealth",
  "Refined Craftsmanship"
];

let i = 0;

setInterval(() => {
  const subtitle = document.getElementById("subtitle");
  subtitle.style.opacity = 0;

  setTimeout(() => {
    i = (i + 1) % texts.length;
    subtitle.textContent = texts[i];
    subtitle.style.opacity = 0.7;
  }, 600);

}, 3500);

// SCROLL
function scrollToBrands() {
  document.getElementById("brands").scrollIntoView({
    behavior: "smooth"
  });
}

// INIT
updateCartCount();