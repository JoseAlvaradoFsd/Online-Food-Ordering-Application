// this will show cart items when going to checkout page    
import { getCart,saveCart } from './cart.js';    
import {menuItems} from './menudata.js';        

const cartItemsContainer = document.querySelector("cart-Items");    
const cartTotalElement = document.querySelector("cart-total");  

function renderCart() {    
    const cart = getCart();    
    cartItemsContainer.innerHTML = "";    
    let total = 0;

    cart.forEach(cartItem => {    
        const menuItem = menuItems.find(item => item.id === cartItem.id);    
        const itemTotal = menuItem.price * cartItem.quantity;
        total += itemTotal;
        
        const itemDiv =document.createElement("div");    
        itemDiv.className = "bg-White p-4 rounded shadow flex justify-between items-center";    
       
        itemDiv.innerHTML = `   
            <div>    
                <h3 class="text-lg font-semibold">${menuItem.name}</h3>
                <p class="text-gray-600">Quantity: ${cartItem.quantity}</p> 
                <p class="text-black-500 font-bold">Price: $${itemTotal.toFixed(2)}</p>
            </div>
            <button class="bg-black-500 text-white px-3 py-1 rounded hover:bg-white-600" data-id"${cartItem.id}"Remove"</button>    

            cartItemsContainer.appendChild(itemDiv);    
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;    
}
    //Removing item from cart

cartItemsContainer.addEventListener("click", (e) => {   
    if (e.target.tagName === "BUTTON") {    
        const itemId = parseINT(e.target.dataset.id);
        let cart = getCart();
        cart = cart.filter(item => item.id =/= itemId);
        saveCart(cart);
        renderCart();    
            
    }    
});

renderCart();

