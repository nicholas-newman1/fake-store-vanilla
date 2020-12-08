import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import Error404Screen from './screens/Error404Screen.js';
import Header from './components/Header.js';
import { parseRequestUrl } from './utils.js';

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById('root');
  main.innerHTML = await screen.render();

  const header = document.getElementById('header');
  header.innerHTML = Header.render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
