import HomeScreen from './screens/HomeScreen.js';

const router = () => {
  const main = document.getElementById('root');
  main.innerHTML = HomeScreen.render();
};

window.addEventListener('load', router);
