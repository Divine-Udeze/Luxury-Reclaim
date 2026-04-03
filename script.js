// Loader
window.addEventListener("load", () => {
  gsap.to("#loader", {opacity:0, duration:1.5, delay:1, onComplete:()=>{document.getElementById("loader").style.display="none";}});
});

// Scroll to Brands
function scrollToBrands() { gsap.to(window, {duration:1.2, scrollTo:"#brands", ease:"power2.inOut"}); }

// CART
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = document.getElementById("cart-count");
  if(count) count.textContent = cart.length;
}
window.addEventListener("DOMContentLoaded", updateCartCount);
window.addToCart = function(name, price){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  gsap.fromTo("#cart-count", {scale:1},{scale:1.3,duration:0.3,yoyo:true,repeat:1});
}

// HERO Animation
gsap.from(".hero-text h1",{y:80,opacity:0,duration:1.5});
gsap.from(".hero-text button",{y:50,opacity:0,duration:1.2,delay:0.5,ease:"power2.out"});

// Brands → Subcategories → Products
const brands = {"Prada":["Shirts","Pants","Hoodies","T-Shirts","Accessories"],"Louis Vuitton":["Shirts","Pants","Hoodies","T-Shirts","Accessories"],"Gucci":["Shirts","Pants","Hoodies","T-Shirts","Accessories"],"Balenciaga":["Shirts","Pants","Hoodies","T-Shirts","Accessories"]};
const products = {
  "Prada":{"Shirts":[{name:"Luxury Shirt", price:450,img:"assets/shirt.jpg"}],"Pants":[{name:"Designer Pants", price:320,img:"assets/pants.jpg"}],"Hoodies":[{name:"Prada Hoodie", price:600,img:"assets/hoodie.jpg"}]},
  "Louis Vuitton":{"Shirts":[{name:"LV Shirt", price:500,img:"assets/shirt2.jpg"}]},
  "Gucci":{"Shirts":[{name:"Gucci Shirt", price:520,img:"assets/shirt3.jpg"}]},
  "Balenciaga":{"Shirts":[{name:"Balenciaga Shirt", price:550,img:"assets/shirt4.jpg"}]}
};

const brandCards = document.querySelectorAll(".brand-card");
const subcategoriesSection = document.getElementById("subcategories");
const subcatGrid = document.querySelector(".subcat-grid");
const selectedBrandTitle = document.getElementById("selected-brand-title");
const productsSection = document.getElementById("products");
const productsTitle = document.getElementById("products-title");
const productsGrid = document.querySelector(".products .grid");

brandCards.forEach(card=>{
  card.addEventListener("click",()=>{
    const brand = card.dataset.brand;
    selectedBrandTitle.textContent = brand;
    subcatGrid.innerHTML = "";
    brands[brand].forEach(subcat=>{
      const div = document.createElement("div");
      div.classList.add("subcat-card");
      div.textContent = subcat;
      div.addEventListener("click", ()=>showProducts(brand,subcat));
      subcatGrid.appendChild(div);
    });
    subcategoriesSection.style.display="block";
    productsSection.style.display="none";
    gsap.from(subcatGrid.children,{opacity:0,y:30,stagger:0.1,duration:0.5});
  });
});

function showProducts(brand,subcat){
  productsTitle.textContent = `${brand} - ${subcat}`;
  productsGrid.innerHTML = "";
  const items = products[brand][subcat] || [];
  items.forEach(item=>{
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img src="${item.img}" /><p>${item.name}</p><button onclick="addToCart('${item.name}',${item.price})">Add</button>`;
    productsGrid.appendChild(card);
  });
  productsSection.style.display="block";
  gsap.from(productsGrid.children,{opacity:0,y:50,stagger:0.1,duration:0.6});
}