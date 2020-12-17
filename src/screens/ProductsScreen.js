import Products from '../components/Products.js';
import Categories from '../components/Categories.js';
import { parseRequestUrl } from '../utils.js';

const ProductsScreen = {
  render: async () => {
    let category = '';
    const request = parseRequestUrl();
    if (request.id) category = request.id;
    return `
      <div class='products-screen'>
        <section class='products-screen__categories'>
          ${Categories.render()}
        </section>

        <section class='products-screen__products'>
          ${await Products.render(category)}
        </section>  
      </div>      
    `;
  },
};

export default ProductsScreen;
