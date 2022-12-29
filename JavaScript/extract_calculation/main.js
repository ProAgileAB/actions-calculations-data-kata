// Part of an imaginary web shop application using jQuery (yes!) to manipulate the DOM

// Global variables
let shopping_cart = []; // action (global variable)
let shopping_cart_total = 0; // action (global variable)

/*
This function is called 'here and there' in the code base, when re-calculating the
Cart Total Price is deemed necessary, e.g. when adding an item to the cart, or
clicking + icon on an already existing item.
 */
function calc_cart_total() { // action (contains actions)
    shopping_cart_total = 0;
    for (var i = 0; i < shopping_cart.length; i++) {
        var item = shopping_cart[i];
        shopping_cart_total += item.price;
    }
    set_cart_total_dom();
    update_shipping_icons();
    update_tax_dom();
}

// Updates the Cart Total Price DOM element
function set_cart_total_dom() { // action
    // findCartTotalDOMElement omitted from exercise code
    findCartTotalDOMElement().innerText = '' + shopping_cart_total;
}

function update_shipping_icons() { // action
    // Omitted from exercise; updates DOM elements (img's) to tell customer if there is free shipping or not
}

function update_tax_dom() { // action
    // Omitted from exercise; updates DOM element for tax total (moms/VAT)
}
