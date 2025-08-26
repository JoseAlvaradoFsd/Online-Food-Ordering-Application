//js/renderMenu.js
import { menuItems } from './menudata.js';
const menuGrid = document.querySelector("menuGrid");

menuItems.forEach(item => {
    const card = document.createElement("div");
    card.classname= "bg-white rounded-lg shadow-md p-4";    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover mb-4 rounded">        
        <h3 class="text-xl font-semibold mt-4">${item.name}</h3>                    
        <p class="text-black-800">${item.description}</p>
        <p class="text-white-500 font-bold mt-2">$${item.price.toFixed(2)}</p>          
        <button class="mt4 bg-black-500 text-white px-4 py-2 rounded hover:bg-red-600" onclick="addtocart($[itemid}0">Add to Cart</button>])
        `;

    menuGrid.appendChild(card);
}); 
