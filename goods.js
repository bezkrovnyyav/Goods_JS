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


let calculateWatermelons = (arr) => {
  let quantity = 0;
  arr.forEach((object) => {
    if (object.item == "watermelon") quantity++;
  });
  console.log(`The total quantity of all watermelons = ${quantity}`);
};

calculateWatermelons(goods);


let calculateApplesWeight = (arr) => {
  let weight = 0;
  arr.forEach((object) => {
    if (object.item == "apple") weight += object.weight;
  });
  console.log(`The total weight of all apples = ${weight}`);
};

calculateApplesWeight(goods);


let sortItems = (array) => {
  let sortedItems = [];
  array.forEach((object) => {
    if (object.item) sortedItems.push(object.item);
  });
  sortedItems.sort();
  let makeSet = new Set(sortedItems);
  sortedItems = [...makeSet];
  console.log(sortedItems);
};

sortItems(goods);

function compare(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}

let sortingByCost = (arr) => {
  let pricePerKilo = [],
    pricePerItem = [];
  arr.forEach((object) => {
    if (typeof object.pricePerKilo !== "undefined") {
      pricePerKilo.push(`$${parseFloat(object.pricePerKilo)}`);
    } else if (typeof object.pricePerItem !== "undefined") {
      pricePerItem.push(`$${parseFloat(object.pricePerItem)}`);
    }
  });
  let totalPrice = pricePerItem.concat(pricePerKilo);
  pricePerKilo.sort(compare);
  pricePerItem.sort(compare);
  totalPrice.sort(compare);
  console.log(`price per kilo ${pricePerKilo}`);
  console.log(`price per item ${pricePerItem}`);
  console.log(`total price ${totalPrice}`);
};

sortingByCost(goods);

