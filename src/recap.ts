const myName = 'David Fernando';
const myAge = 19;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(845, 542);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(15, 'nicolas');
nicolas.getSummary();
