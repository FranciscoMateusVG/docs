const evento = {
  name: "Birthday Party",
  guests: ["Xerox", "toXerox", "Xerox"],
  printName() {
    console.log(this.name);
  },
  printNameWithArrow: () => {
    console.log(this.name);
  },
  printGuests() {
    this.guests.forEach(function (guest) {
      console.log(guest + "is attending" + this.name);
    });
  },
  printGuestsWithArrow() {
    this.guests.forEach((guest) => {
      console.log(guest + "is attending" + this.name);
    });
  },
};

//tl;dr: Arrow functions nao criam vinculo this. dentro de seu proprio escopo, elas aproveitam o escopo em que foram criadas!

//this.name Aparece!
evento.printName();

//this.name Undefined!
evento.printNameWithArrow();

//this.name Undefined!
evento.printGuests();

//this.name aparece!
evento.printGuestsWithArrow();
