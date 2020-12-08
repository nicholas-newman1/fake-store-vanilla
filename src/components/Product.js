import { parseRequestUrl } from '../utils.js';

const Product = {
  render: async () => {
    const request = parseRequestUrl();
    const res = await fetch(`https://fakestoreapi.com/products/${request.id}`);
    const product = await res.json();

    return `<div class="product container">
              <img class="product__img" src='${product.image}' alt=${
      product.title
    }/>
              <div class="product__info-container">
                <h1 class="product__title">${product.title}</h1>
                <h2 class="product__price">$${product.price.toFixed(2)}</h2>
                <p class="product__description">${product.description}</p>
                <button class="product__btn">
                  Add To Cart
                </button>
                </div>
              </div>
            </div>`;
  },
};

export default Product;
