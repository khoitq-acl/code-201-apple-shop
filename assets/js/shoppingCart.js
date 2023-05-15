let shoppingCart = {
  cart: {},

  addToCart(itemData) {
    if (this.cart.hasOwnProperty(itemData.id)) {
      this.cart[itemData.id] += 1;

    } else {
      this.cart[itemData.id] = 1;

    }

    console.log(this.cart)
    this.updateAddToCartButtonBadge();

  },

  addEventAddToCartButton(button, itemData) {

    button.onclick = function () {
      shoppingCart.addToCart(itemData);

    }

  },

  updateAddToCartButtonBadge() {
    let cartItems = Object.entries(this.cart);

    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i];

      let button = document.querySelector(`#${cartItem[0]} .add-to-cart`);

      if (button) {
        let badge = button.querySelector('.badge');

        if (!badge) {
          badge = document.createElement('span');

          badge.setAttribute('class', 'badge');

          button.appendChild(badge);
        }

        badge.innerText = cartItem[1];

      }

    }

  }

}