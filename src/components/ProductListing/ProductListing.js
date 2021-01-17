import './productListing.scss';

const ProductListing = {
  render: (product) => {
    return /*html*/ `
      <li class="product-listing">
        <a
          class="product-listing__img-container"
          href="/#/product/${product.id}"
        >
          <img class="product-listing__img" src=${product.image} />
        </a>

        <div class="product-listing__text">
          <h2 class="product-listing__title">
            <a class="product-listing__link" href="/#/product/${product.id}">
              ${product.title}
            </a>
          </h2>
          <h3 class="product-listing__price">$${product.price.toFixed(2)}</h3>
        </div>

        <button class="btn product-listing__btn" data-id=${product.id}>
          Add To Cart
        </button>
      </li>
    `;
  },
};

export default ProductListing;
