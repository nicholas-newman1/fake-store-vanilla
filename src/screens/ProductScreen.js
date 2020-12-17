import ProductOverview from '../components/ProductOverview.js';
import Products from '../components/Products.js';

const ProductScreen = {
  after_render: () => {
    ProductOverview.after_render();
    Products.after_render();
  },
  render: async () => `
    <div class='product-screen container'>
      <section class='product-screen__product-overview'>
        ${await ProductOverview.render()}
      </section>

      <section class='product-screen__additional-products'>
        ${await Products.render(ProductOverview.category)}
      </section>
    </div>
  `,
};

export default ProductScreen;
