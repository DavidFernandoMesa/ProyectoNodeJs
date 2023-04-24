const myName = 'David Fernando';
const myEge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(23, 40);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `I'm ${this.name} and I'm ${this.age}`;
  }
}

const david = new Persona(19, 'David Fernando Mesa Arias');
david.getSummary();
