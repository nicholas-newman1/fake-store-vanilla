import HomeScreen from './screens/HomeScreen/HomeScreen.js';
import ProductScreen from './screens/ProductScreen/ProductScreen.js';
import Error404Screen from './screens/Error404Screen/Error404Screen.js';
import Loading from './components/Loading/Loading.js';
import Header from './components/Header/Header.js';
import { parseRequestUrl } from './js/utils.js';
import CartScreen from './screens/CartScreen/CartScreen.js';
import ProductsScreen from './screens/ProductsScreen/ProductsScreen.js';
import Footer from './components/Footer/Footer.js';
import 'core-js/stable';
import 'whatwg-fetch';
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
