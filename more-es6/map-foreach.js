//name length using map
const names = ["hassan ahmed", "jalal ahmed", "mr shofiul", "Mr galib"];
const nameLength = names.map((name) => name.length);
console.log(nameLength);

//big object
const products = [
  { prodName: "smart phone", price: 20000, color: "black" },
  { prodName: "Water bottle", price: 100, color: "orange" },
  { prodName: "smart Watch", price: 2000, color: "green" },
  { prodName: "router", price: 1200, color: "white" },
];
//find product name and product price using map
const productName = products.map((product) => product.prodName);
const productPrice = products.map((product) => product.price);
//find product name  using foreach
products.forEach((product) => console.log("using for each", product.prodName));

console.log("using map", productName, productPrice);
