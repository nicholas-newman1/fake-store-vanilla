import Categories from '../../components/Categories/Categories';
import Hero from '../../components/Hero/Hero';
import Products from '../../components/Products/Products';
import ProductsPreview from '../../components/ProductsPreview/ProductsPreview';
import './homeScreen.scss';

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
