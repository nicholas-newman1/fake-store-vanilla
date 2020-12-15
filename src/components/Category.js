const Category = {
  render: (category) => {
    return `
      <a class="category" href="/#/products/${category.path}">
        <h2 class="category__title">${category.title}</h2>
      </a>
    `;
  },
};

export default Category;
