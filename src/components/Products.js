const Products = {
  render: async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    return `
      <ul class='products container'>
        ${products
          .map(
            (product) => `
          <li class="products__item">
            <a href="/#/product/${product.id}">
              <div class="products__img">
                <img
                  src=${product.image}
                />
              </div>
              <div class="products__text">
                <h2 class="products__title">
                  <a class="products__link" href="/#/product/${product.id}">
                    ${product.title}
                  </a>                
                </h2>
                <h3 class="products__price">$${product.price.toFixed(2)}</h3>
              </div>
            </a>
          </li>
        `
          )
          .join('')}
      </ul>
      
    `;
  },
};

export default Products;
