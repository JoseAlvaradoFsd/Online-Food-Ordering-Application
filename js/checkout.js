// This is my checkout.js

import { getCart } from './cart.js';

const form = document.querySelector("#checkout-form");
const confirmation = document.querySelector("#confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cart = getCart();
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Simulate order submission
  localStorage.removeItem("cart");
  confirmation.classList.remove("hidden");
  form.reset();
});