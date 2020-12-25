import Logo from './Logo.js';
import Nav from './Nav.js';

const Header = {
  render: () => `
    <div class="header__container container">
      <div class="header__logo">
        ${Logo.render()}
      </div>
      <div class="header__nav">
        ${Nav.render()}      
      </div>
    </div>`,
};

export default Header;
