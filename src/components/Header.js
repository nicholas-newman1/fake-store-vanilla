import Logo from './Logo.js';
import Nav from './Nav.js';

const Header = {
  render: () => {
    return `<div class="header__container container">
              ${Logo.render()}
              ${Nav.render()}
            </div>`;
  },
};

export default Header;
