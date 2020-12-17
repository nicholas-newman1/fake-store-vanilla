import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import Error404Screen from './screens/Error404Screen.js';
import Loading from './components/Loading.js';
import Header from './components/Header.js';
import { parseRequestUrl } from './utils.js';
import CartScreen from './screens/CartScreen.js';
import ProductsScreen from './screens/ProductsScreen.js';

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

  const main = document.getElementById('main');
  main.innerHTML = Loading.render();
  main.innerHTML = await screen.render();
  await screen.after_render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
