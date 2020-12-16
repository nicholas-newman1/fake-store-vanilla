import Products from './Products.js';

const ProductsPreview = {
  after_render: () => {
    Products.after_render();
  },
  render: async (limit) => {
    return `
      <section class='products-preview container'>
        ${await Products.render('', limit)}
        <a class='products-preview__link' href='/#/products'>
          <button class='products-preview__btn btn btn--black'>View All Products</button>
        </a>
      </section>
    `;
  },
};

export default ProductsPreview;
