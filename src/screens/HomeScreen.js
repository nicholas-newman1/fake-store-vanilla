import Products from '../components/Products.js';

const HomeScreen = {
  after_render: () => {
    Products.after_render();
  },
  render: async () => {
    return Products.render();
  },
};

export default HomeScreen;
