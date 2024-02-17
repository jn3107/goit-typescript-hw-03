class Key {
  private signature = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  key: Key;
  door: true | false;
  tenants: Array<Person> = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(this.tenants);

      console.log(`${this.tenants.length} person is in the House`);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("We have a key. The door is opening");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);
const person2 = new Person(key);

house.openDoor(person.getKey());
house.openDoor(person2.getKey());

house.comeIn(person);
house.comeIn(person2);

export {};
