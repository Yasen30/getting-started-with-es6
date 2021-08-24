class CommonMembers {
  name;
  id;
  adress;
  constructor(name, id, adress) {
    this.name = name;
    this.id = id;
    this.adress = adress;
  }
}
class suppotSesion extends CommonMembers {
  officeTime;
  constructor(name, id, adress, time) {
    super(name, id, adress);
    this.officeTime = time;
  }
  startMetting() {
    console.log(this.name, "please start a metting");
  }
}
class teamMetting extends CommonMembers {
  officeTime;
  constructor(name, id, adress, time) {
    super(name, id, adress);
    this.officeTime = time;
  }
  startMetting() {
    console.log(this.name, "please start a metting");
  }
}
const hablu = new suppotSesion("hablu", "78f", "chattogram", "11pm");
const jallu = new teamMetting("jallu", "79f", "dhaka", "9pm");
console.log(jallu);
