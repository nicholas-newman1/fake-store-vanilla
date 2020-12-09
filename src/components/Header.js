const Header = {
  render: () => {
    return `<div class="header__container container">
              <a class="header__logo" href="/#">Fake Store</a>
              <nav class="header__nav">
                <ul class="header__list">
                  <li class="header__item">
                    <a href="/#" class="header__link">Home</a>
                  </li>
                  <li class="header__item">
                    <a href="" class="header__link">Cart</a>
                  </li>
                </ul>
              </nav>
            </div>`;
  },
};

export default Header;
