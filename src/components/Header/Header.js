import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './header.scss';

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
