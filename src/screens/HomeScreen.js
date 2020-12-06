import { products } from '../data.js';

const HomeScreen = {
  render: () => {
    return `
      <ul class='products container'>
        ${products
          .map(
            (product) => `
          <li class="product">
            <div class="product__img">
              <img
                src=${product.image}
              />
            </div>
            <div class="product__text">
              <h2 class="product__title">
                ${product.title}
              </h2>
              <h3 class="product__price">$${product.price}</h3>
            </div>
          </li>
        `
          )
          .join('')}
      </ul>
      
    `;
  },
};

export default HomeScreen;
