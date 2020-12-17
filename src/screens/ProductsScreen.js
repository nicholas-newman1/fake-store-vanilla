import Products from '../components/Products.js';
import Categories from '../components/Categories.js';
import { parseRequestUrl, replaceUrlSpaces } from '../utils.js';

const ProductsScreen = {
  showCategories: false,
  after_render: () => {
    Products.after_render();
  },
  render: async () => {
    let category = '';
    const request = parseRequestUrl();
    if (request.id) category = request.id;
    return `
      <div class='products-screen'>
        <section class='products-screen__categories'>
          <div class='container'>
            ${Categories.render()}
          </div>          
        </section>

        <section class='products-screen__products'>
          <div class='container'>
            <h1 class='products-screen__heading'>
              ${category ? replaceUrlSpaces(category) : 'All Products'}
            </h1>
            ${await Products.render(category)}
          </div>          
        </section>  
      </div>      
    `;
  },
};

export default ProductsScreen;
