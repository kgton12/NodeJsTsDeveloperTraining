import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const cart = [];
const myWhishlist = [];

(async function main() {
    console.log("welcome to the your Shoppee Cart");

    const item1 = await createItem("hotwheels ferrari", 20.99, 2);
    const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

    await cartService.addItem(cart, item1);
    await cartService.addItem(myWhishlist, item2);

    await cartService.displayCart(cart);

    await cartService.calculateTotal(cart);

    await cartService.deleteItem(cart, item1.name);

    await cartService.calculateTotal(cart);
})();
