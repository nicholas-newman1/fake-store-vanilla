import Products from '../Products/Products';
import './productsPreview.scss';

const ProductsPreview = {
  after_render: () => {
    Products.after_render();
  },
  render: async (limit) => {
    return /*html*/ `
      <div class="products-preview">
        ${await Products.render('', limit)}
        <a class="products-preview__link" href="/#/products">
          <button class="products-preview__btn btn btn--black">
            View All Products
          </button>
        </a>
      </div>
    `;
  },
};

export default ProductsPreview;
