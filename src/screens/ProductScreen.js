import Product from '../components/Product.js';
import Products from '../components/Products.js';

const ProductScreen = {
  after_render: () => {
    Product.after_render();
    Products.after_render();
  },
  render: async () => {
    return (await Product.render()) + (await Products.render(Product.category));
  },
};

export default ProductScreen;
