import ProductOverview from '../components/ProductOverview.js';
import Products from '../components/Products.js';

const ProductScreen = {
  after_render: () => {
    ProductOverview.after_render();
    Products.after_render();
  },
  render: async () => {
    return (
      (await ProductOverview.render()) +
      (await Products.render(ProductOverview.category))
    );
  },
};

export default ProductScreen;
