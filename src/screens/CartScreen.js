import { getProduct } from '../api.js';
import { getCartItems, setCartItems } from '../localStorage.js';
import { parseRequestUrl, rerender } from '../utils.js';
import CartItem from '../components/CartItem.js';
import CartCheckout from '../components/CartCheckout.js';

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const itemInCart = cartItems.find((x) => x.id === item.id);
  if (itemInCart) {
    if (forceUpdate) {
      cartItems = cartItems.map((x) => (x.id === itemInCart.id ? item : x));
    }
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
  if (forceUpdate) {
    rerender(CartScreen);
  }
};

const removeFromCart = (id) => {
  setCartItems(getCartItems().filter((x) => x.id !== id));
  if (id === Number(parseRequestUrl().id)) {
    document.location.hash = '/cart';
  } else {
    rerender(CartScreen);
  }
};

const CartScreen = {
  after_render: () => {
    const qtySelects = [
      ...document.getElementsByClassName('cart-item__qty-select'),
    ];
    qtySelects.forEach((qtySelect) => {
      qtySelect.addEventListener('change', (e) => {
        const item = getCartItems().find(
          (x) => x.id === Number(qtySelect.dataset.id)
        );
        addToCart({ ...item, qty: Number(e.target.value) }, true);
      });
    });

    const deleteBtns = [
      ...document.getElementsByClassName('cart-item__delete'),
    ];
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        removeFromCart(Number(btn.dataset.id));
      });
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    if (request.id) {
      const product = await getProduct(request.id);
      addToCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        qty: 1,
      });
    }
    return `
      <div class='cart-screen'>
        ${
          getCartItems().length > 0
            ? `<ul class='cart-screen__items'>
                  ${getCartItems()
                    .map((item) => CartItem.render(item))
                    .join('')}
                </ul>`
            : `<h2 class='cart-screen__empty-msg'>Your Cart is Empty</h2>`
        }
        <div class='cart-screen__checkout'>
          ${CartCheckout.render()}
        </div>        
      </div>
      
      `;
  },
};

export default CartScreen;
