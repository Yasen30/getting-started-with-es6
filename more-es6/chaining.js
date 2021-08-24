//array destructuring
const [name, age] = ["rafi", 18, "chattogram"];
// console.log(name);
const { id, phone } = { id: "7df5a", phone: 01415412, color: "red" };
// console.log(id);

//?
const myObject = { a: 20, b: 25, c: 58 };
const { a, b } = { myObject };
// console.log("fake object", myObject?.p?.q);

//another chainng object
const hero = {
  heroAge: 25,
  address: "pahtali",
  ph: {
    phAge: 24,
    phAddress: "dhaka",
    gender: "male",
  },
};

const { phAge, phAddress } = hero.ph;
console.log("hero website", hero?.website?.name);
