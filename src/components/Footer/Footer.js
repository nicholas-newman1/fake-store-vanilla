import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './footer.scss';

const Footer = {
  render: () => `
    <div class='footer__container container'>
      <div class='footer__logo'>
        ${Logo.render()}
      </div>
    
      <div class='footer__nav'>
        ${Nav.render()}
      </div>
    </div>
    

    <div class='footer__credits'>
      <div class='footer__credits-text container'>
        Website developed by Nicholas Newman
      </div>      
    </div>`,
};

export default Footer;
