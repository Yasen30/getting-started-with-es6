const names = {
  id: 58,
  name: "md hablu",
  address: "pahatali",
  phone: "0114457888",
};
//first option
/* const name = names.name;
const id = names.id;
const phone = names.phone; */
// console.log(name, id, phone);

// destructuring option
const { name, address, phone } = names;
// console.log(name, id, phone);

const company = {
  name: "online shop",
  ceo: { id: 89, name2: "md yasen rafi", phone2: 01746123564 },
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
const { id, name2, phone2 } = company.ceo;
const { employers } = company.web;
const { first, second } = company.web.tech;
console.log(first, second);
