const addToDb = (key, value) => {
    const exists = getStoredCart();
    exists[key] = value;
    updateDb(exists);
}

const getDb = () => localStorage.getItem('pricing_cart');

const updateDb = cart => {
    localStorage.setItem('pricing_cart', JSON.stringify(cart));
}

const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}
const removeFromDb = key => {
    const exists = getDb();
    if (!exists) return;

    const pricing_cart = JSON.parse(exists);
    delete pricing_cart[key];
    updateDb(pricing_cart);
}
const clearTheCart = () => {
    localStorage.removeItem('pricing_cart');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }