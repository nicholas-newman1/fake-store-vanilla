import Categories from '../components/Categories.js';
import Hero from '../components/Hero.js';
import Products from '../components/Products.js';

const HomeScreen = {
  after_render: () => {
    Products.after_render();
  },
  render: async () => {
    return `
      ${Hero.render()}
      ${Categories.render()}
      ${await Products.render('', 6)}
    `;
  },
};

export default HomeScreen;
