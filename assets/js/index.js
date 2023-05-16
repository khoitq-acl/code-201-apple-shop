// render categories data
const categoriesData = defaultCategories;

const categoriesItemsData = defaultData;


/*
  attributes: [
    {"name":"class","value": "item item--product"}, 
    {"name":"src","value": "./assets/images/macbook/macbook-pro-16.png"}
  ]
*/
function customElement(tagName, attributes, content) {
  let element = document.createElement(tagName);

  const attrLength = attributes.length;

  for (let i = 0; i < attrLength; i++) {
    const attribute = attributes[i];
    element.setAttribute(attribute.name, attribute.value);
  }

  if (content) {
    element.innerHTML = content;
  }

  return element;
}




/*
  <a href="#macbook">Macbook</a>
*/
function renderHeaderMenu(menuItems) {
  const menuItemsContainer = document.querySelector('header.header .menu__items');

  if (menuItemsContainer) {
    menuItemsContainer.innerHTML = '';

    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];

      const menuItemElement = customElement(
        'a',
        [{ name: 'href', 'value': `#${menuItem.toLowerCase()}` }],
        menuItem
      );

      menuItemsContainer.appendChild(menuItemElement);
    }

  }

}

// render menu header
const menuItemsData = defaultCategories;
renderHeaderMenu(menuItemsData);

function renderCategories(categoriesInputData) {
  const container = document.querySelector('main');

  if (container) {
    for (let i = 0; i < categoriesInputData.length; i++) {
      const categoryData = categoriesInputData[i];

      let category = customElement('section', [{ name: 'id', value: categoryData.toLowerCase() }]);
      container.appendChild(category);

      let title = customElement('h1', [{ name: 'class', value: 'title' }], categoryData);
      category.appendChild(title);

      let items = customElement('div', [{ name: 'class', value: 'items' }]);
      category.appendChild(items);

      renderCategoryItems(categoryData);
    }

  }

}




function renderCategoryItems(categoryData) {
  const categoryId = categoryData.toLowerCase();

  const container = document.querySelector(`#${categoryId} .items`);

  if (container) {
    const categoryItems = categoriesItemsData[categoryId];

    for (let i = 0; i < categoryItems.length; i++) {
      const categoryItem = categoryItems[i];

      const item = productItem(categoryItem);
      container.appendChild(item);


    }

  }

}

/*
<article class="item item--product">
  <img src="./assets/images/macbook/macbook-pro-16.png"
    alt="thumpnail Macbook pro 16" class="
    item--product__thumpnail">
  <p class="item--product__title">Macbook pro 16"</p>
  <div class="item--product__detail">
    <p class="item--product__price">$1399.00</p>
    <a class="add-to-cart">
      <img src="/static/image/general/add_to_cart.png" alt="add to cart Macbook pro 16"/>
    </a>
  </div>
  
</article>
*/
function productItem(itemData) {
  let article = customElement('article', [{ name: 'class', value: 'item item--product' }, { name: 'id', value: itemData.id }]);

  let img = customElement('img', [
    { name: 'class', value: 'item--product__thumpnail' },
    { name: 'alt', value: `Thumpnail ${itemData.name}` },
    { name: 'src', value: itemData.img }
  ]);
  article.appendChild(img);

  let title = customElement('p', [
    { name: 'class', value: 'item--product__title' }
  ], itemData.name);
  article.appendChild(title);

  let detail = customElement('div', [
    { name: 'class', value: 'item--product__detail' }
  ]);
  article.appendChild(detail);

  let price = customElement('p', [
    { name: 'class', value: 'item--product__price' }
  ], `$${itemData.price}`);
  detail.appendChild(price);


  // shopping cart
  let addToCart = customElement('a', [
    { name: 'class', value: 'add-to-cart' }
  ]);
  detail.appendChild(addToCart);

  let addToCartImg = customElement('img', [
    {
      name: 'src', value: '/assets/images/general/add_to_cart.png',

    }, {
      name: 'alt', value: `add to cart ${itemData.name}`
    }
  ]);
  addToCart.appendChild(addToCartImg);

  shoppingCart.addEventAddToCartButton(addToCart, itemData);

  return article;
}

renderCategories(categoriesData);

shoppingCart.init();