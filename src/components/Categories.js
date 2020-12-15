import Category from './Category.js';

const Categories = {
  render: () => {
    const categories = [
      { title: "Men's Clothing", path: 'men%20clothing' },
      { title: "Women's Clothing", path: 'women%20clothing' },
      { title: 'Jewelery', path: 'jewelery' },
      { title: 'Electronics', path: 'electronics' },
    ];

    return `
    <section class='categories container'>
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

export default Categories;
