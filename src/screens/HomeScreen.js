import Categories from '../components/Categories.js';
import Hero from '../components/Hero.js';
import Products from '../components/Products.js';
import ProductsPreview from '../components/ProductsPreview.js';

const HomeScreen = {
  after_render: () => {
    Products.after_render();
  },
  render: async () => {
    return `
      <div class='home-screen'>
        <section class='home-screen__hero'>
          <div class='container'>
            ${Hero.render()}
          </div>
        </section>

        <section class='home-screen__categories'>
          <div class='container'>
            ${Categories.render()}
          </div>          
        </section>

        <section class='home-screen__products-preview'>
          <div class='container'>
            ${await ProductsPreview.render(6)}
          </div>          
        </section>
      </div>
    `;
  },
};

export default HomeScreen;
