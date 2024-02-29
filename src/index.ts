export { };

// Type 'string | undefined' is not assignable to type 'string'.
// Type 'undefined' is not assignable to type 'string'.ts(2322)

// EXAMPLE 1 - Use the non-null assertion operator to solve the error

interface Employee {
  id: number;
  name?: string;
  salary?: number;
}

const emp: Employee = {
  id: 1,
  name: 'Bobby Hadz',
  salary: 100,
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const name: string = emp.name!; // 👈️ non-null assertion
console.log(name);

// ---------------------------------------------------

// // EXAMPLE 2 - Use a type-guard to solve the error

// interface Employee {
//   id: number;
//   name?: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const name: string = emp.name !== undefined ? emp.name : '';

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 3 - Use the nullish coalescing operator (??) to solve the error

// interface Employee {
//   id: number;
//   name?: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const name: string = emp.name ?? '';

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 4 - Use the logical OR (||) operator to solve the error

// interface Employee {
//   id: number;
//   name?: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const name: string = emp.name || '';

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 5 - Use an `if` statement to solve the error

// interface Employee {
//   id: number;
//   name?: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// let name = '';

// // 👇️ emp.name is a string or undefined here

// if (emp.name !== undefined) {
//   // 👇️ emp.name is string here
//   name = emp.name;
// }

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 6 - Use a type assertion to solve the error

// interface Employee {
//   id: number;
//   name?: string;
//   salary?: number;
// }

// const emp: Employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const name: string = emp.name as string; // 👈️ type assertion

// console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 7 - Using the Required utility type to solve the error

// interface Employee {
//   id: number;
//   name?: string; // 👈️ optional (might be undefined)
//   salary: number;
// }

// const emp: Required<Employee> = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// const name: string = emp.name;

// console.log(name);

// ---------------------------------------------------

// // Argument of type 'string or undefined' is not assignable to parameter of type string

// // EXAMPLE 8 - Use a non-null assertion in the function call

// function getMessage(message: string) {
//   return message;
// }

// // 👇️ const message: "Greetings" | undefined
// const message = Math.random() > 0.5 ? 'Greetings' : undefined;

// getMessage(message!); // 👈️ non-null assertion

// ---------------------------------------------------

// // EXAMPLE 9 - Use a type assertion in the function call

// function getMessage(message: string) {
//   return message;
// }

// // 👇️ const message: "Greetings" | undefined
// const message = Math.random() > 0.5 ? 'Greetings' : undefined;

// getMessage(message as string); // 👈️ type assertion

// ---------------------------------------------------

// // EXAMPLE 10 - Use the ternary operator to solve the error

// function getMessage(message: string) {
//   return message;
// }

// // 👇️ const message: "Greetings" | undefined
// const maybeMessage = Math.random() > 0.5 ? 'Greetings' : undefined;

// const message: string = maybeMessage !== undefined ? maybeMessage : '';

// getMessage(message);

// ---------------------------------------------------

// // EXAMPLE 11 - Use the nullish coalescing operator (??) in the function call

// function getMessage(message: string) {
//   return message;
// }

// // 👇️ const message: "Greetings" | undefined
// const maybeMessage = Math.random() > 0.5 ? 'Greetings' : undefined;

// getMessage(maybeMessage ?? ''); // 👈️ nullish coalescing

// ---------------------------------------------------

// // EXAMPLE 12 - Use the logical OR (||) operator in the function call

// function getMessage(message: string) {
//   return message;
// }

// // 👇️ const message: "Greetings" | undefined
// const maybeMessage = Math.random() > 0.5 ? 'Greetings' : undefined;

// getMessage(maybeMessage || '');

// ---------------------------------------------------

// // EXAMPLE 13 - Update the type of the function's parameter

// // 👇️ parameter is type string or undefined
// function getMessage(message: string | undefined) {
//   return message;
// }

// // 👇️ argument is also type string or undefined
// const maybeMessage = Math.random() > 0.5 ? 'Greetings' : undefined;

// getMessage(maybeMessage);