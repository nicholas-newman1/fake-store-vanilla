import Product from '../components/Product.js';
import Products from '../components/Products.js';

const ProductScreen = {
  render: async () => {
    return (await Product.render()) + (await Products.render());
  },
};

export default ProductScreen;
