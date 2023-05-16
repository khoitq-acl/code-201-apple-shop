let shoppingCart = {
  cart: {},

  init() {

    this.updateAddToCartButtonBadge();
  },

  addToCart(itemData) {
    if (this.cart.hasOwnProperty(itemData.id)) {
      this.cart[itemData.id] += 1;

    } else {
      this.cart[itemData.id] = 1;

    }

    this.updateAddToCartButtonBadge();

  },

  removeFromCart(itemData) {
    if (this.cart.hasOwnProperty(itemData.id)) {
      this.cart[itemData.id] -= 1;

    }

    if (this.cart[itemData.id] <= 0) {
      delete this.cart[itemData.id];

    }

    this.updateAddToCartButtonBadge();

  },

  addEventAddToCartButton(button, itemData) {

    button.onclick = function () {
      shoppingCart.addToCart(itemData);

    }

  },

  updateAddToCartButtonBadge() {

    let cartItems = Object.entries(shoppingCart.cart);

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

  },

}

