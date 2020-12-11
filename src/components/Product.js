import { getProduct } from '../api.js';
import { parseRequestUrl } from '../utils.js';

const Product = {
  category: '',
  after_render: () => {
    document.getElementById('add-to-cart').addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      document.location.hash = `/cart/${id}`;
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);

    if (product.error) {
      return `<div>${product.error}</div>`;
    }

    Product.category = product.category;

    return `<div class="product">
              <img class="product__img" src='${product.image}' alt=${
      product.title
    }/>
              <div class="product__info-container">
                <h1 class="product__title">${product.title}</h1>
                <h2 class="product__price">$${product.price.toFixed(2)}</h2>
                <p class="product__description">${product.description}</p>
                <button id="add-to-cart" class="product__btn" data-id=${
                  product.id
                }>
                  Add To Cart
                </button>
                </div>
              </div>
            </div>`;
  },
};

export default Product;
