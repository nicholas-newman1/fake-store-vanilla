const CartItem = {
  render: (item) => {
    return `
      <li class="cart-item">
        <div class="cart-item__img-container">
          <img
            class="cart-item__img"
            src=${item.image}
            alt=${item.title}
          />
        </div>

        <div class="cart-item__content">
          <div class="cart-item__title-price-container">
            <h2 class="cart-item__title">
              <a class="cart-item__link" href="/#/product/${item.id}">
                ${item.title}
              </a>
            </h2>

            <span class="cart-item__price">$${item.price.toFixed(2)}</span>
          </div>
          <div class="cart-item__options">
            <label class="cart-item__label">
              Qty:
              <select class='cart-item__qty-select' data-id=${item.id}>
                ${[1, 2, 3, 4, 5]
                  .map((value) => {
                    return `
                  <option 
                    value=${value}
                    ${value === item.qty && 'selected'}
                  >
                    ${value}
                  </option>`;
                  })
                  .join('')}
              </select>
            </label>

            <button class="cart-item__delete" data-id=${item.id}>Delete</button>
          </div>
        </div>
      </li>    
    `;
  },
};

export default CartItem;
