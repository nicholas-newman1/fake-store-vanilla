import Category from './Category.js';

const Categories = {
  render: () => {
    const categories = [
      { title: 'Men Clothing', path: 'men%20clothing' },
      { title: 'Women Clothing', path: 'women%20clothing' },
      { title: 'Jewelery', path: 'jewelery' },
      { title: 'Electronics', path: 'electronics' },
    ];

    return `
      <div class='categories'>
        ${categories
          .map(
            (category) => `
            <div class="categories__item">
              ${Category.render(category)}
            </div>          
        `
          )
          .join('')}
      </div>
  `;
  },
};

export default Categories;
