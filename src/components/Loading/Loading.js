import src from '../../images/loading.gif';
import './loading.scss';

const Loading = {
  render: () => {
    return /*html*/ `<img
      class="loading"
      src=${src}
      alt="Loading"
    />`;
  },
};

export default Loading;
