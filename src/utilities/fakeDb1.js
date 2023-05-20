const addToDb1 = (id) => {

    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    } else {
        shoppingCart = {}
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

        //localStorage.setItem(id, newQuantity)
    } else {
        //localStorage.setItem(id, 1)
    }



}

export {
    addToDb1
}