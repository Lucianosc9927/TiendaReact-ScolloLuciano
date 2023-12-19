import { MOCK_DATA } from "../MOCK/products.js";

export const pedirDatos = (bool) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 1000);
  });
};
