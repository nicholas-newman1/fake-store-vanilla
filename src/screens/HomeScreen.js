import Category from '../components/Category.js';
import Products from '../components/Products.js';

const HomeScreen = {
  after_render: () => {
    Products.after_render();
  },
  render: async () => {
    const categories = [
      { title: "Men's Clothing", path: 'men%20clothing' },
      { title: "Women's Clothing", path: 'women%20clothing' },
      { title: 'Jewelery', path: 'jewelery' },
      { title: 'Electronics', path: 'electronics' },
    ];
    return `
      <section class='categories'>
        ${categories
          .map(
            (category) => `
            <div class="categories__item">
              ${Category.render(category)}
            </div>          
        `
          )
          .join('')}        
      </section>
    `;
  },
};

export default HomeScreen;
