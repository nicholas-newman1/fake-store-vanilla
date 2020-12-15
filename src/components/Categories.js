import Category from './Category';

const Categories = {
  render: (categories) => {
    return `${categories.map((category) => Category.render(category))}`;
  },
};

export default Categories;
