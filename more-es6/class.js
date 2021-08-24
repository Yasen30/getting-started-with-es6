class Members {
  name;
  id;
  adress;
  bossName = "rafi";
  constructor(name, id, adress) {
    this.name = name;
    this.id = id;
    this.adress = adress;
  }
  startMetting() {
    console.log(this.name, "please start a metting");
  }
}
const hablu = new Members("md hablu chowdury", "78f", "chattogram");
const jalil = new Members("md jalil chowdury", "79f", "sylthet");
const boltu = new Members(" Boltu", "80f", "dhaka");
jalil.startMetting();
console.log(hablu, jalil, boltu);
