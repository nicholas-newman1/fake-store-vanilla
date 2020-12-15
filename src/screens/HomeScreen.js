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
      <section id='products' class='products__container'>
        <div class='container'>
          ${await Products.render()}
        </div>
      </section>
      
    `;
  },
};

export default HomeScreen;
