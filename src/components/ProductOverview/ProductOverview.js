import { getProduct } from '../../js/api.js';
import { parseRequestUrl } from '../../js/utils.js';
import './productOverview.scss';

const ProductOverview = {
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

    ProductOverview.category = product.category;

    return `
      <div class="product-overview">
        <img 
          class="product-overview__img" 
          src='${product.image}' 
          alt=${product.title}
        />
        <div class="product-overview__info-container">
          <h1 class="product-overview__title">${product.title}</h1>
          <h2 class="product-overview__price">$${product.price.toFixed(2)}</h2>
          <p class="product-overview__description">${product.description}</p>
          <button 
            id="add-to-cart" 
            class="btn" 
            data-id=${product.id}
          >
            Add To Cart
          </button>
        </div>
      </div>`;
  },
};

export default ProductOverview;
