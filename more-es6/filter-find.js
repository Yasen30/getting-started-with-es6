const numbers = [47, 45, 12, 14, 1, 61, 81, 9];
// console.log(numbers);
const geterThan20Filter = numbers.filter((number) => number > 10);
const geterThan20Find = numbers.find((number) => number > 10);
console.log(geterThan20Filter, geterThan20Find);

//product object
const products = [
  { prodName: "smart phone", price: 20000, color: "black" },
  { prodName: "Water bottle", price: 100, color: "orange" },
  { prodName: "smart Watch", price: 2000, color: "black" },
  { prodName: "router", price: 1200, color: "white" },
];
const expensiveProduct = products.filter((product) => product.price < 1000);
const colorMatching = products.filter((product) => product.color == "black");
const colorMatchingFind = products.find((product) => product.color == "black");
console.log(colorMatchingFind);
