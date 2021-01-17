import ProductListing from '../ProductListing/ProductListing';
import './products.scss';

const Products = {
  after_render: () => {
    const addToCartBtns = [
      ...document.getElementsByClassName('product-listing__btn'),
    ];
    addToCartBtns.forEach((btn) =>
      btn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        window.location.hash = `/cart/${id}`;
      })
    );
  },
  render: async (category, limit) => {
    let url = 'https://fakestoreapi.com/products';
    if (category) url += `/category/${category}`;
    const res = await fetch(url);
    const products = await res.json();

    return /*html*/ `
      <ul class="products">
        ${products
          .map((product, i) => {
            if (!limit) return ProductListing.render(product);
            if (i < limit) return ProductListing.render(product);
          })
          .join('')}
      </ul>
    `;
  },
};

export default Products;
