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
    <section class='categories'>
      <div class='categories__container container'>
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
    </section>
  `;
  },
};

export default Categories;
