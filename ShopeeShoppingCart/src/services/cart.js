async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index === -1) {
        return;
    }
    userCart.splice(index, 1);
}

async function removeItemByIndex(userCart, index) {
    const deleteIndex = index - 1;
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((cartItem) => cartItem.name === item.name);

    if (indexFound === -1) {
        console.log("Item not found in cart");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity--;
        return;
    }

    if (userCart[indexFound].quantity === 1) {
        deleteItem(userCart, item.name);
        return;
    }
}

async function calculateTotal(userCart) {
    const total = userCart.reduce((acc, item) => acc + item.subtotal(), 0);
    console.log("Shopee Cart TOTAL IS : " + total);
}

async function displayCart(cart) {
    console.log("Your Cart:");
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price} x ${item.quantity} = $${item.subtotal()}`);
    });
}

export { addItem, deleteItem, removeItemByIndex, calculateTotal, displayCart,removeItem };
