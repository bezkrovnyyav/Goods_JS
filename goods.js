let products = require('./goods_arr.json')

let parsingProducts = (products) => {
  if (!products) return {};
  if (typeof products === "object") return products;
  if (typeof products === "string") return JSON.parse(products);
  return {};
};

let goods = parsingProducts(products);

