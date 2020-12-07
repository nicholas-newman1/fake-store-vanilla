const HomeScreen = {
  render: async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    return `
      <ul class='products container'>
        ${products
          .map(
            (product) => `
          <li class="product">
            <div class="product__img">
              <img
                src=${product.image}
              />
            </div>
            <div class="product__text">
              <h2 class="product__title">
                <a class="product__link" href="/#/product/${product.id}">
                  ${product.title}
                </a>                
              </h2>
              <h3 class="product__price">$${product.price}</h3>
            </div>
          </li>
        `
          )
          .join('')}
      </ul>
      
    `;
  },
};

export default HomeScreen;
