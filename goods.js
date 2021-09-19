let products = require('./goods_arr.json')

let parsingProducts = (products) => {
  if (!products) return {};
  if (typeof products === "object") return products;
  if (typeof products === "string") return JSON.parse(products);
  return {};
};

let goods = parsingProducts(products);


let validateGoods = (products) => {
  products.forEach((object) => {
    if (
      typeof object.item !== "undefined" &
      typeof object.type !== "undefined" &
      typeof object.weight !== "undefined" &
      typeof object.pricePerKilo !== "undefined"
    ) {
      object.pricePerKilo = parseFloat(
        object.pricePerKilo.replace("$", "".split(",").join("."))
      );
      if (
        typeof object.item === "string" &
        typeof object.type === "string" &
        typeof object.quantity !== "undefined" &
        typeof object.pricePerItem === "number"
      ) {
        return true;
      } else {
        return false;
      }
    } else if (
      typeof object.item !== "undefined" &
      typeof object.type !== "undefined" &
      typeof object.quantity !== "undefined" &
      typeof object.pricePerItem !== "undefined"
    ) {
      object.pricePerItem = parseFloat(
        object.pricePerItem.replace("$", "").split(",").join(".")
      );
      return (
        typeof object.item === "string" &
        typeof object.type === "string" &
        typeof object.quantity === "number" &
        typeof object.pricePerItem === "number"
      );
    }
  });
};

validateGoods(goods);

