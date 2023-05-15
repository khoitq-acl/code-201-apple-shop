// render categories data
const categoriesData = defaultCategories;

const categoriesItemsData = defaultData;

shoppingCart.init();

let cart = {

  items: {},

  init() {
    this.getItemsData();

    this.renderCart();

  },

  getItemsData() {
    let itemsCategories = Object.values(categoriesItemsData);

    this.items = {};

    for (let i = 0; i < itemsCategories.length; i++) {
      let itemsCategory = itemsCategories[i];

      for (let j = 0; j < itemsCategory.length; j++) {
        let item = itemsCategory[j];

        this.items[item['id']] = item;

      }

    }

  },

  /*
        <article class="cart-item">
          <div class="cart-item__thumpnail">
            <img src="/assets/images/airpods/airpods-gen2.png" class=" " alt="">
          </div>
          <div class="cart-item__info">
            <h2>123123123123</h2>
            <div class="quantity">
              <button class="mins">-</button>
              <span>2</span>
              <button class="plus">+</button>
            </div>
          </div>
          <div class="cart-item__price">123</div>
        </article>
  */
  renderCart() {
    let container = document.querySelector('.cart .cart__list');

    let cartItems = Object.entries(shoppingCart.cart);

    container.innerHTML = '';


    if(cartItems.length == 0){
      container.innerHTML = `<i>No Data</i>`;
    }

    for (let i = 0; i < cartItems.length; i++) {
      let cartItem = cartItems[i];

      let cartItemInfo = this.items[cartItem[0]];

      let cartItemElement = document.createElement('article');
      cartItemElement.setAttribute('class', "cart-item");


      cartItemElement.innerHTML = `
        <div class="cart-item__thumpnail">
          <img src="${cartItemInfo.img}" class=" " alt="Thumpnail ${cartItemInfo.name}">
        </div>
        <div class="cart-item__info">
          <h2>${cartItemInfo.name}</h2>
          <div class="quantity">
            <button class="mins">-</button>
            <span>${cartItem[1]}</span>
            <button class="plus">+</button>
          </div>
        </div>
        <div class="cart-item__price">$${(cartItemInfo.price * cartItem[1]).toLocaleString()}</div>
      `;

      let plusButton = cartItemElement.querySelector(`.plus`);
      plusButton.onclick = function(){
        shoppingCart.addToCart(cartItemInfo);

        cart.renderCart();

      }

      let minsButton = cartItemElement.querySelector(`.mins`);
      minsButton.onclick = function(){
        shoppingCart.removeFromCart(cartItemInfo);

        cart.renderCart();
        
      }

      container.appendChild(cartItemElement);
    }

  }

}

cart.init();