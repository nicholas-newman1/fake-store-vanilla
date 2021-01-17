import { getCartItems } from '../../js/localStorage';
import './cartCheckout.scss';

const CartSubTotal = {
  render: () => {
    const cartItems = getCartItems();
    const subTotal = cartItems
      .reduce((a, c) => (a += c.price * c.qty), 0)
      .toFixed(2);

    return html`
      <div class="cart-checkout">
        <div class="cart-checkout__sub-total">
          <h2 class="cart-checkout__sub-total-label">Subtotal:</h2>
          $${subTotal}
        </div>
        <button class="cart-checkout__btn">Checkout</button>
      </div>
    `;
  },
};

export default CartSubTotal;
