// Loader
window.addEventListener("load", () => {
  gsap.to("#loader", {opacity:0, duration:1.5, delay:1, onComplete:()=>{document.getElementById("loader").style.display="none";}});
});

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = document.getElementById("cart-count");
  if(count) count.textContent = cart.length;
}
window.addEventListener("DOMContentLoaded", updateCartCount);

// Contact form submission
const contactForm = document.getElementById("contact-form");
if(contactForm){
  contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}

// Hero / Contact animations
gsap.from(".contact h2",{y:50, opacity:0, duration:1});
gsap.from(".contact p",{y:30, opacity:0, duration:1, delay:0.2});
gsap.from("#contact-form",{y:20, opacity:0, duration:1, delay:0.4, stagger:0.2});