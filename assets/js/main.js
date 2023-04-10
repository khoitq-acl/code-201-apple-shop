(function () {


  const applyTemplate = (template, obj) => {
    var regex = /{{(.*?)}}/g;

    const textContent = template.replace(regex, function (match, capture) {
      return obj[capture] || "";
    });
    var wrapper = document.createElement('div');
    wrapper.innerHTML = textContent;
    return wrapper.children;
  }


  const convertListToDOM = (selector, list, template) => {
    const container = document.querySelector(selector);
    list.map((item, _) => {
      const children = applyTemplate(template, item);

      for (let child of children) {
        container.appendChild(child)
      }

    })
  }


  (function renderHeader() {

    convertListToDOM('nav.menu', [
      {
        href: "#macbook",
        text: 'Macbook'
      },
      {
        href: "#iphone",
        text: 'iPhone'
      },
      {
        href: "#ipad",
        text: 'iPad'
      },
      {
        href: "#airpods",
        text: 'Airpods'
      },
    ],
      `<a href="{{href}}">{{text}}</a>`)
  })();


  (function renderLastest() {
    convertListToDOM('section.lastest .items', [
      {
        tag: `APPLE WATCH SERIES 8`,
        title: `A healthy leap ahead.`,
        description: 'From $399 or $16.62/mo.per month for 24 mo',
        thumpnail: `/assets/images/lastest/iwatch.jpeg`,
        theme: 'dark'
      },
      {
        tag: `MACBOOK PRO 14” AND 16”`,
        title: `Mover. Maker. Boundary breaker. `,
        description: 'From $1999 or $166.58/mo.per month for 12 mo',
        thumpnail: `/assets/images/lastest/macbook.jpeg`,
        theme: 'dark'
      },
      {
        tag: `IPAD`,
        title: `Lovable. Drawable. Magical. `,
        description: 'From $449 or $37.41/mo.per month for 12 mo',
        thumpnail: `/assets/images/lastest/ipad.jpeg`,
        theme: 'light'
      },
      {
        tag: `Pre-order now`,
        title: `iPhone 14<br />Hello Yellow.`,
        description: 'From $799.00 or $33.29/mo.per month for 24 mo ',
        thumpnail: `/assets/images/lastest/iphone-14-yellow.jpeg`,
        theme: 'light'
      },

      {
        tag: `IPHONE 14 PRO`,
        title: `Pro. Beyond.`,
        description: 'From $999 or $41.62/mo.per month for 24 mo',
        thumpnail: `/assets/images/lastest/phone-list.jpeg`,
        theme: 'dark'
      },

    ],
      `
      <article class="item item--lastest item--{{theme}}">
        <div class="item--lastest__content " >
          <p class="item--lastest__tag">{{tag}}</p>
          <p class="item--lastest__title">{{title}}</p>
          <p class="item--lastest__description">{{description}}</p>
        </div>
        <img src="{{thumpnail}}"
        alt="thumpnail {{title}}" class="item--lastest__thumpnail">
      </article>
      `
    )

  })();


  const productTemplate = `
  <article class="item item--product">
    <img src="{{thumpnail}}"
      alt="thumpnail {{title}}" class="item--product__thumpnail">
     <p class="item--product__title">{{title}}</p>
    <p class="item--product__price">{{price}}</p>
  </article>
 
  `;


  (function renderLastest() {
    convertListToDOM('section#macbook .items', [
      {
        title: `Macbook pro 16"`,
        price: '$1399.00',
        thumpnail: `/assets/images/macbook/macbook-pro-16.png`,
      },
      {
        title: `Macbook pro 14"`,
        price: '$1399.00',
        thumpnail: `/assets/images/macbook/macbook-pro-14.png`,
      },
      {
        title: `Macbook pro 13"`,
        price: '$1399.00',
        thumpnail: `/assets/images/macbook/macbook-pro-13.png`,
      },
      {
        title: `iMac"`,
        price: '$1399.00',
        thumpnail: `/assets/images/macbook/imac.png`,
      },
      {
        title: `iMac mini`,
        price: '$1399.00',
        thumpnail: `/assets/images/macbook/macmini.png`,
      },

    ],
      productTemplate
    )

  })();

  (function renderLastest() {
    convertListToDOM('section#iphone .items', [
      {
        title: `iPhone 14 pro black`,
        price: '$99.00',
        thumpnail: `/assets/images/iphone/iphone-14-pro-black.jpeg`,
      },
      {
        title: `iPhone 14 pro orange`,
        price: '$99.00',
        thumpnail: `/assets/images/iphone/iphone-14-pro-orange.jpeg`,
      },
      {
        title: `iPhone 14 red`,
        price: '$99.00',
        thumpnail: `/assets/images/iphone/iphone-14-red.jpeg`,
      },
      {
        title: `iPhone 14 sky`,
        price: '$99.00',
        thumpnail: `/assets/images/iphone/iphone-14-sky.jpeg`,
      },
      {
        title: `iPhone 14 yellow`,
        price: '$99.00',
        thumpnail: `/assets/images/iphone/iphone-14-yellow.jpeg`,
      },

    ],
      productTemplate
    )

  })();


  (function renderLastest() {
    convertListToDOM('section#ipad .items', [
      {
        title: `iPad Air`,
        price: '$399.00',
        thumpnail: `/assets/images/ipad/ipad-air.png`,
      },
      {
        title: `iPad Gen 9`,
        price: '$399.00',
        thumpnail: `/assets/images/ipad/ipad-gen9.png`,
      }, {
        title: `iPad Gen 10`,
        price: '$399.00',
        thumpnail: `/assets/images/ipad/ipad-gen10.png`,
      }, {
        title: `iPad Mini`,
        price: '$399.00',
        thumpnail: `/assets/images/ipad/ipad-mini.png`,
      }, {
        title: `iPad Pro`,
        price: '$399.00',
        thumpnail: `/assets/images/ipad/ipad-pro.png`,
      },

    ],
      productTemplate
    )

  })();

  (function renderLastest() {
    convertListToDOM('section#airpods .items', [
      {
        title: `AirPods Gen 2`,
        price: '$99.00',
        thumpnail: `/assets/images/airpods/airpods-gen2.png`,
      },
      {
        title: `AirPods Gen 3`,
        price: '$99.00',
        thumpnail: `/assets/images/airpods/airpods-gen3.png`,
      },
      {
        title: `AirPods Max`,
        price: '$99.00',
        thumpnail: `/assets/images/airpods/airpods-max.png`,
      },
      {
        title: `AirPods Pro`,
        price: '$99.00',
        thumpnail: `/assets/images/airpods/airpods-pro.png`,
      },

    ],
      productTemplate
    )

  })();

})()