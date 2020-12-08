import { apiUrl } from './config.js';

export const getProduct = async (id) => {
  try {
    const res = await fetch(apiUrl + `/products/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};
