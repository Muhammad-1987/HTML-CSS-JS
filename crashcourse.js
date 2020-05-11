// let age = 30;

// console.log(age);

// const age = 30;
// age = 31;

// console.log(age);

// let score =11;

// score = 10;

// console.log(score);

// const name = "John";
// const age = 30;

// const s = "Hello World";
// console.log = "s.length";

// concatention
// const name = 'john'
// const age =30

// console.log('My name is' + 'and I am ' + age);
// // Template string   

//const s = 'technology, computer, it, code';

// console.log(s.substring(0,5).toUpperCase());
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,7));

// console.log(s.split(','));

// Arrays: variable that hold multiple values.

/* multiline comments*/

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apple', 'oranges', 'pears'];
// fruits.push('mangos');
// fruits.unshift('straberries');
// fruits.pop();
// console.log(fruits);
// console.log(fruits.indexOf('oranges'));

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st', city: 'Boston'
//     }
// }
// // console.log(person.hobbies[1]);
// const {firstName, lastName, address: {city}} = person;
// console.log(city);


// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];
//console.log(todos[1].text);
// console.log(todos[2].isCompleted);

//JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

// For
// for(let i=0; i<= 10; i++) {
//     console.log(i);
// }
 
//while
// let i = 0;
// while(i < 10){
//     console.log(`while Loop Number: ${i}`);
// i++;
// }

//For on todos
// for(let i=0; i<= todos.length; i++) {
//     console.log(todos[i].text);
// }


// !--for todo of todos--!
// for(let todo of todos) {
//     console.log(todo.isCompleted);
// }

// forEach, map, filter
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompleted);

// const x = 19;
// if(x === 10) {
//     console.log('x is 10');
// } else if(x>10) {
//     console.log('x is greater than 10');
// }else {
//         console.log('x is less than 10');
//     }

// const x = 4;
// const y = 11;

// if(x > 5 && y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }
// turnery operators

// const x = 12;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

//Swichtes
// const x = 11;
// const color = 'green';
// switch(color){

// case 'red':
// console.log('color is red');
// break;

// case 'blue':
// console.log('color is red');
// break;

// default:
// console.log('color is not red or blue');
// break;
// }

//funtions addNums
// function addNums(num1 = 1, num2 = 1 ){
//     console.log(num1+num2)
// }
// addNums();

//return
// function addNums(num1 = 11, num2 = 1 ){
//     return num1+num2;
// }
// console.log(addNums());

// const addNums = num1 => num1+5;
//     console.log(addNums(5));

//Object oriented programming
//constructive funtion with prototype

// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
    
// }
// // instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person(`Ali`,`Jan`,`9-3-1970`);

// console.log(person1);

//constructive function in ES6

// class Person {
//  constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    
// }

// getBirthYear(){
//     return this.dob.getFullYear();
// }

// getFullName(){
//     return `${this.firstName} ${this.lastName}`;
// }

// }
// // instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person(`Ali`,`Jan`,`9-3-1970`);

// console.log(person2, getFullName());
// console.log(person1);

//DOM

// console.log(window);

// alert(1);

// Single element

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');

// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// // Listen for form submit
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
  
//   if(nameInput.value === '' || emailInput.value === '') {
//     // alert('Please enter all fields');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     // Create new list item with user
//     const li = document.createElement('li');

//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//     // Add HTML
//     // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

//     // Append to ul
//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }
// }


















