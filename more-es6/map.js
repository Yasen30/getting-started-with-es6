const numbers = [8, 8, 5, 42, 4, 6];
//using for of
let newNumber = [];
for (const number of numbers) {
  const total = number * 6;
  newNumber.push(total);
}
console.log(newNumber);
// using map
numbers.map((number) => {
  console.log(number * 6);
});

//squares using map
const secondNumbers = [8, 7, 5, 56, 64, 4, 14, 74, 51];
const output = secondNumbers.map((x) => x * 2);
console.log("squares", output);
