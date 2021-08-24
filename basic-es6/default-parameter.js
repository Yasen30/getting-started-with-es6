function add(num1, num2) {
  // option 2
  num2 = num2 || 0;
  // option 1
  //   if (num2 == undefined) {
  //     num2 = 0;
  //   }
  return num1 + num2;
}
console.log(add(17));
