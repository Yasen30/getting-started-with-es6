const add = (x, y, z) => {
  const sum = x + y + z;
  const sub = x - y;
  const multify = sum * sub * x;
  const div = multify / y;
  return div + z;
};
const result = add(15, 12, 10);
console.log(result);
