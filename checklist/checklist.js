//1..let and const
const name = "md yasen rafi";
const product = "computer";
let price = 15000;
price = 14000;
// console.log(price);

// 2...templete string
const food1 = "birayni";
const food2 = "polao";

const foodDes = `i love ${food1} and i like so much ${food2}`;
// console.log(foodDes);

//3.1arrow function single parameter
const singleParameter = (x) => x / 5;
// console.log(singleParameter(10));

//3.2arrow function double parameter
const doubleParameter = (x, y) => {
  const num1 = x + 2;
  const num2 = y - 2;
  return num1 * num2;
};
// console.log(doubleParameter(10, 15));

//3.3arrow function three parameter
const threeParameters = (x, y, z) => {
  return x * y * z;
};
// console.log(threeParameters(5, 6, 4));

// 5...filter
const numbers = [4, 5, 45, 4, 58, 59, 54, 58, 58, 46, 95, 9, 79, 45, 56, 4];
// numbers.map((number) => console.log(number * 5));

// 6....
const oddNUmbers = numbers.filter((number) => number % 2 != 0);
// console.log(oddNUmbers);

// 7...
const products = [
  { prodName: "smart phone", price: 20000, color: "black" },
  { prodName: "Water bottle", price: 100, color: "orange" },
  { prodName: "smart Watch", price: 2000, color: "black" },
  { prodName: "router", price: 1200, color: "white" },
];
const findPrice = products.find((product) => product.price == 1200);
// console.log(findPrice);

// 8...
const products2 = { name2: "computer", ram: "8gb", color: "black" };
const { name2, ram } = products2;
// console.log(name);
//9... three parameters default value last naem
const threeParametersDefaultValue = (x, y, z = 7) => {
  return x + y + z;
};
// console.log(threeParametersDefaultValue(5, 5));

// 10...
const thirdNumber = ["Mohmmad", "yasen", "rafi", "rakib"];
const [, third] = thirdNumber;
console.log(third);
//11...
const company = {
  companyName: "online shop",
  ceo: { eeoId: 89, ceoName: "md yasen rafi", ceoPhone: 01746123564 },
  web: {
    work: "website develoment",
    employers: 898,
    framework: "react",
    tech: {
      first: "html",
      second: "css",
      third: "js",
    },
  },
};

const newArray = [];
const { companyName } = company;
newArray.push = companyName;
// console.log(newArray);
