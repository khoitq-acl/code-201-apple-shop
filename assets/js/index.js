/*

<article class="item item--product">
  <img src="/assets/images/macbook/macbook-pro-16.png"
    alt="thumpnail Macbook pro 16" class="
    item--product__thumpnail">
  <p class="item--product__title">Macbook pro 16"</p>
  <p class="item--product__price">$1399.00</p>
</article>
*/


/*
  attributes: [
    {"name":"class","value": "item item--product"}, 
    {"name":"src","value": "/assets/images/macbook/macbook-pro-16.png"}
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


function productItem() {

  let article = customElement('article', [{ name: 'class', value: 'item item--product' }]);

  let img = customElement('img', [
    { name: 'class', value: 'item--product__thumpnail' },
    { name: 'alt', value: 'thumpnail Macbook pro 16' },
    { name: 'src', value: '/assets/images/macbook/macbook-pro-16.png' }
  ]);

  article.appendChild(img);

  return article;
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


function renderCategories(categoriesData) {
  const container = document.querySelector('main');

  if (container) {
    for (let i = 0; i < categoriesData.length; i++) {
      const categoryData = categoriesData[i];

      category = createElement('section', [{ name: 'class', value: categoryData.toLowerCase() }]);

      container.appendChild(category);

    }

  }
}


// render categories data
const categoriesData = defaultData;
renderCategories(categoriesData);









