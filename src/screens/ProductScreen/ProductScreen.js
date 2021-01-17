import ProductOverview from '../../components/ProductOverview/ProductOverview';
import Products from '../../components/Products/Products';
import './productScreen.scss';

const ProductScreen = {
  after_render: () => {
    ProductOverview.after_render();
    Products.after_render();
  },
  render: async () => /*html*/ `
    <div class="product-screen container">
      <section class="product-screen__product-overview">
        ${await ProductOverview.render()}
      </section>

      <section class="product-screen__additional-products">
        ${await Products.render(ProductOverview.category)}
      </section>
    </div>
  `,
};

export default ProductScreen;
