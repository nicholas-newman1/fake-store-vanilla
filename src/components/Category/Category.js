import './category.scss';

const Category = {
  render: (category) => {
    return html`
      <a class="category" href="/#/products/${category.path}">
        <h2 class="category__title">${category.title}</h2>
      </a>
    `;
  },
};

export default Category;
