const Products = {
  after_render: () => {
    const addToCartBtns = [...document.getElementsByClassName('products__btn')];
    addToCartBtns.forEach((btn) =>
      btn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        window.location.hash = `/cart/${id}`;
      })
    );
  },
  render: async (category) => {
    let url = 'https://fakestoreapi.com/products';
    if (category) url += `/category/${category}`;
    const res = await fetch(url);
    const products = await res.json();

    return `
      <ul class='products'>
        ${products
          .map(
            (product) => `
          <li class="products__item">
              <img class="products__img"
                src=${product.image}
              />
            <div class="products__text">
              <h2 class="products__title">
                <a class="products__link" href="/#/product/${product.id}">
                  ${product.title}
                </a>                
              </h2>
              <h3 class="products__price">$${product.price.toFixed(2)}</h3>
            </div>
            <button class="btn products__btn" data-id=${
              product.id
            }>Add To Cart</button>
          </li>
        `
          )
          .join('')}
      </ul>
      
    `;
  },
};

export default Products;
