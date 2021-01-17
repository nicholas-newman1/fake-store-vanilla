import Category from '../Category/Category';
import './categories.scss';

const Categories = {
  render: () => {
    const categories = [
      { title: 'Men Clothing', path: 'men%20clothing' },
      { title: 'Women Clothing', path: 'women%20clothing' },
      { title: 'Jewelery', path: 'jewelery' },
      { title: 'Electronics', path: 'electronics' },
    ];

    return html`
      <div class="categories">
        ${categories
          .map(
            (category) => html`
              <div class="categories__item">${Category.render(category)}</div>
            `
          )
          .join('')}
      </div>
    `;
  },
};

export default Categories;
