/**
 * .apply() example
 *
 * @see debounce
 * @see minArray
 */

/**
 * .bind() example
 *
 * @see
 */

const A = {
  x: 10,
  getX() {
    return this.x;
  },
};

const B = {
  x: 99,
  getX() {
    return this.x;
  },
};

console.log("should be 10", A.getX());
console.log("should be 99", B.getX());
console.log("should be 10", B.getX.bind(A)());

/**
 * .call() example
 *
 * @see
 */

function Person(this: any, name: string) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

function Parent(this: any, name: string, surname: string) {
  Person.call(this, name);

  this.surname = surname;
}

Object.setPrototypeOf(Parent.prototype, Person.prototype);

Parent.prototype.getFullName = function () {
  return `${this.getName()} ${this.surname}`;
};

function Child(this: any, name: string) {
  Person.call(this, name);
}

Object.setPrototypeOf(Child.prototype, Parent.prototype);

const Me = new (Person as any)("Nicky");
const Dad = new (Parent as any)("Bob", "Saget");
const Son = new (Child as any)("Nick");
console.log("dad name", Dad.getName());
console.log("full name", Dad.getFullName());
console.log("child name", Son.getName());
console.log("child name", Son.getFullName());

// const Parent = {
//   name: "Dad",
//   getName() {
//     return this.name;
//   },
// };

// const Son = {
//   name: "Bobby",
//   __proto__: Parent,
// };

// console.log("parent name -->", Parent.getName());
// console.log("child name -->", Son.__proto__.getName.call(Son));
