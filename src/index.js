import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import ProductsScreen from './screens/ProductsScreen/ProductsScreen';
import Error404Screen from './screens/Error404Screen/Error404Screen';
import CartScreen from './screens/CartScreen/CartScreen';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { parseRequestUrl } from './js/utils';
import './scss/index.scss';

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
  '/cart/:id': CartScreen,
  '/cart': CartScreen,
  '/products/:id': ProductsScreen,
  '/products': ProductsScreen,
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const header = document.getElementById('header');
  header.innerHTML = Header.render();

  const footer = document.getElementById('footer');
  footer.innerHTML = Footer.render();

  const main = document.getElementById('main');
  main.innerHTML = Loading.render();
  main.innerHTML = await screen.render();
  await screen.after_render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
