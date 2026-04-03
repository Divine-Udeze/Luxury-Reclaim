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

// Load cart items
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
function loadCart(){
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if(cart.length===0){
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "";
    return;
  }

  cart.forEach((item,index)=>{
    total += item.price;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `<span>${item.name} - $${item.price}</span> <button onclick="removeItem(${index})">Remove</button>`;
    cartItemsContainer.appendChild(div);
  });

  cartTotal.textContent = `Total: $${total}`;
}
window.addEventListener("DOMContentLoaded", loadCart);

// Remove item
function removeItem(index){
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  loadCart();
}

// Checkout button
const checkoutBtn = document.getElementById("checkout-btn");
if(checkoutBtn){
  checkoutBtn.addEventListener("click", ()=>{
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(cart.length===0){
      alert("Your cart is empty.");
      return;
    }
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart");
    updateCartCount();
    loadCart();
  });
}