//js cart local storage  initialize empty cart
export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];}

    export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));}    

    //add item to cart
    export function addToCart(itemId) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: itemId, quantity: 1 });
    }           
    saveCart(cart);
    alert("Item added to cart!");
    }