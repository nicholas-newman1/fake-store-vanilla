import './hero.scss';

const Hero = {
  render: () => {
    return `
      <div class="hero">
        <h1 class="hero__title">The Best Fake Products</h1>
        <a href='/#/products'>
          <button class="btn">Our Products</button>
        </a>
      </div>
    `;
  },
};

export default Hero;
