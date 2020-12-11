import { getProduct } from '../api.js';
import { getCartItems, setCartItems } from '../localStorage.js';
import { parseRequestUrl } from '../utils.js';
import CartItem from '../components/CartItem.js';
import CartCheckout from '../components/CartCheckout.js';

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  if (itemInCart) {
    cartItems = cartItems.map((cartItem) =>
      cartItem.id === itemInCart.id ? item : cartItem
    );
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
};

const CartScreen = {
  after_render: () => {},
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
        <ul class='cart-screen__items'>
          ${getCartItems()
            .map((item) => CartItem.render(item))
            .join('')}
        </ul>
        <div class='cart-screen__checkout'>
          ${CartCheckout.render()}
        </div>        
      </div>
      
      `;
  },
};

export default CartScreen;
