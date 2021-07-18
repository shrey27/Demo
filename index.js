// let name={
//     firstName:'Alex',
//     secondName:'Martin'
// }

// function printName(home, state, country){
//     console.log(this.firstName+' '+this.secondName+' '+home+' '+state+" "+country);
// }

// let printmyname = printName.bind(name, 'Jaipur');
// printmyname('Rajasthan', 'India');

// Function.prototype.myBind = function(...args){
//     let object = this
//     params = args.slice(1);
//     return function(...args2){
//         object.apply(args[0], [...params, ...args2]);
//     }
// }

// let newPrintMyName = printName.myBind(name, 'Jaipur');
// newPrintMyName('Rajasthan', 'India');

// document.querySelector('#grandparent')
// .addEventListener('click',()=>{
//     console.log('Grandparent Clicked');
// },false);

// document.querySelector('#parent')
// .addEventListener('click',()=>{
//     console.log('Parent Clicked');
// },true);

// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log('Child Clicked');
// },true);

// function loadScript(scr){
//     return new Promise( function(resolve,reject){
//         let script = document.createElement('script');
//         script.src = scr;
//         script.onload = ()=>resolve(script);
//         script.onerror = ()=>reject(new Error('Script has error'));
//         document.head.append(script);
//     });
// }
// let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');
// promise.then(
//     script => alert(`${script.src} is loaded`),
//     error => alert(`Error: ${error.message}`)
// );
// promise.then(script=>alert('another handler'));


// /* Promise with then and fetch */
// function loadJson(url) {
//     return fetch(url)
//       .then(response => response.json());
//   }
  
//   function loadGithubUser(name) {
//     return fetch(`https://api.github.com/users/${name}`)
//       .then(response => response.json());
//   }
  
//   function showAvatar(githubUser) {
//     return new Promise(function(resolve, reject) {
//       let img = document.createElement('img');
//       img.src = githubUser.avatar_url;
//       img.className = "promise-avatar-example";
//       document.body.append(img);
  
//       setTimeout(() => {
//         img.remove();
//         resolve(githubUser);
//       }, 3000);
//     });
//   }
  
//   // Use them:
//   loadJson('/article/promise-chaining/user.json')
//     .then(user => loadGithubUser(user.name))
//     .then(showAvatar)
//     .then(githubUser => alert(`Finished showing ${githubUser.name}`));
//     // ...

// /**
//  * Polyfill for array functions created in Array prototype
//  */
// var logicAlbums = [
//   'Bobby T',
//   'The Incredible True Story',
//   'Supermark',
//   'Under Pressure',
// ]
// /**
//  * foreach
//  * @param {} callback 
//  */
// Array.prototype.albumForEach = function(callback) {
//   for (var i = 0; i < this.length; i++) {
//     callback(this[i], i, this) // currentValue, index, array
//   }
// }
// /**
//  * map
//  * @param {*} callback 
//  * @returns 
//  */
// Array.prototype.albumMap = function(callback) {
//   let arr = [];
//   for (var i = 0; i < this.length; i++) {
//     if(i in this){
//       arr[i] = callback(this[i],i,this);
//     }
//   }
//   return arr;
// }
// /**
//  * filter
//  * @param {*} callback 
//  * @returns 
//  */
// Array.prototype.albumFilter = function(callback){
//   let arr = [];
//   for (var i = 0; i < this.length; i++) {
//     if (callback.call(this, this[i])) {
//       arr.push(this[i])
//     }
//   }
//   return arr;
// }
// /**
//  * reduce
//  * @param {*} callback 
//  * @param {*} initialValue 
//  * @returns 
//  */
// Array.prototype.albumReduce = function(callback,initialValue){
//   var val = initialValue;

//   for (var i = 0; i < this.length; i++) {
//     if(val!==undefined){
//       val = callback.call(this, val, this[i]);
//     }
//     else{
//       val = this[i];
//     }
//   }
//   return val;
// }

// logicAlbums.albumForEach( (a) => console.log(a) );

// console.log(logicAlbums.albumMap(function(a) {
//   return a+"_Singer";
// }));

// console.log(logicAlbums.albumFilter(function(a) {
//     return a.length>10;
// }));

// console.log(
//   logicAlbums.albumReduce(
//     function(a,b){
//       return a+' , '+b;
//     },'Singers: ')
// )

// function func() {};

// // Create a new instance using function prototype.
// var newInstance = Object.create(func.prototype)
// console.log(newInstance);
// // Call the function
// var result = func.call(newInstance, 2,3,4);
// console.log(result);
// // If the result is a non-null object then use it otherwise just use the new instance.
// console.log(undefined && typeof result === 'object' ? result : newInstance);

// var employee1 = {firstName: 'John', lastName: 'Rodson'};
// var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

// function invite(...greeting) {
//     console.log(greeting[0] + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting[1]);
// }

// invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
// invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?
// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

// let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array: [3, 4, 5]
// let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
// let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
// console.log(arrayIntegersOriginal3);
// console.log(arrayIntegers1);

//Impure
// let numberArray = [];
// const impureAddNumber = number => numberArray.push(number);
// //Pure
// const pureAddNumber = number => argNumberArray =>
//   argNumberArray.concat([number]);

// //Display the results
// console.log (impureAddNumber(6)); // returns 1
// console.log (numberArray); // returns [6]
// console.log (pureAddNumber(7) (numberArray)); // returns [6, 7]
// console.log (numberArray); // returns [6]

// function userDetails(username) {
//   if(username) {
//     console.log(salary); // undefined due to hoisting
//     console.log(age); // ReferenceError: Cannot access 'age' before initialization
//     let age = 30;
//     var salary = 10000;
//   }
//   console.log(salary); //10000 (accessible to due function scope)
//   console.log(age); //error: age is not defined(due to block scope)
// }
// userDetails('John');

/**
 * memoisation
 */
//  const memoizAddition = () => {
//   let cache = {};
//  return (value) => {
//   if (value in cache) {
//    console.log('Fetching from cache');
//    return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//   }
//   else {
//    console.log('Calculating result');
//    let result = value + 20;
//    cache[value] = result;
//    return result;
//   }
//  }
// }
// // returned function from memoizAddition
// const addition = memoizAddition();
// console.log(addition(20)); //output: 40 calculated
// console.log(addition(20)); //output: 40 cached

// x = 3.149;       // This will not cause an error.
// myFunction();

// function myFunction() {
//   //"use strict";
//   y = 3.14;   // This will cause an error
//   console.log(x,y);
// }
// console.log(x,y);

/**
 * date
 */
// var today = new Date();
// var dd = String(today.getDate());
// var mm = String(today.getMonth() + 1); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// console.log(today);
// fn = function(x) {
//   //Function code goes here
// }

// fn.name = "John";

// fn.profile = function(y) {
//  //Profile code goes here
//}

/**
 * Iterable/Iterator
 */
// const iterable = ['one', 'two', 'three'];
// const iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());  // { value: 'one', done: false }
// console.log(iterator.next());  // { value: 'two', done: false }
// console.log(iterator.next());  // { value: 'three', done: false }
// console.log(iterator.next());  // { value: 'undefined, done: true }

// const person = {
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person);
//always accepts an object
//new variables will be created in the prototype of the

/**
 * 
 * value: The value associated with the property
 * writable: Determines whether the value associated with the property can be changed or not
 * configurable: Returns true if the type of this property descriptor can be changed and if the property can be deleted from the corresponding object.
 * enumerable: Determines whether the property appears during enumeration of the properties on the corresponding object or not.
 * set: A function which serves as a setter for the property
 * get: A function which serves as a getter for the property
 */
//  for (var i = 0; i < 4; i++) { // global scope
//   setTimeout(() => console.log(i));
// }

// for (let i = 0; i < 4; i++) { // block scope
//   setTimeout(() => console.log(i));
// }

/**const !== immutable */
// const userList = [];
// userList.push('John'); // Can mutate even though it can't re-assign
// console.log(userList); // ['John']

/**
 * Tag function
 * works on template literals
 */
// var name = 'Alfred';
// var age = 47;
// function greet(arr, nameArg, ageArg) {
//   console.log(arr[0]);  // Woah, 1
//   console.log(nameArg); // Alfred
//   console.log(arr[1]);  // 1 is 1
//   console.log(ageArg);  // 47
//   console.log(arr[2]);  // ?
// }
// greet `Woah, 1${name}1 is 1${age}?`;

// var veggies = ["Tomato", "Carrot", "Cabbage"];
// var fruits = ["Apple", "Orange", "Pears"];
// var veggiesAndFruits = veggies.concat(fruits);
// console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears
// console.log(veggies);

// const circle = {
//   radius: 20,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius
// };

// console.log(['a'] + ['b']);  // "ab"
// console.log([] + []); // ""
// console.log(![] + []); // "false", because ![] returns false.

/**
 * The self string can be formed with the combination of []()!+ characters. 
 * You need to remember the below conventions to achieve this pattern.
 * Since Arrays are truthful values, negating the arrays will produce false: ![] === false
 * As per JavaScript coercion rules, the addition of arrays together will toString them: [] + [] === ""
 * Prepend an array with + operator will convert an array to false, the negation will make it true and finally 
 * converting the result will produce value '1': +(!(+[])) === 1
 */


//const myArray = [false, null, 1,5, undefined]
//myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);
//falsy values removed

/*
You can empty an array quickly by setting the array length to zero.
let cities = ['Singapore', 'Delhi', 'London'];
cities.length = 0; // cities becomes []
*/

/**
 * Array to object
 * Array fill
 */
//  var fruits = ["banana", "apple", "orange", "watermelon"];
//  var fruitsObject = {...fruits};
//  console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}

//  var newArray = new Array(5).fill("0");
// console.log(newArray); // ["0", "0", "0", "0", "0"]

/**
 * %o — It takes an object,
%s — It takes a string,
%d — It is used for a decimal or integer These placeholders can be represented in the console.log as below
const user = { "name":"John", "id": 1, "city": "Delhi"};
console.log("Hello %s, your details %o are available in the object form", "John", user);
 */

// //CSS to console screen
// console.log('%c The text has blue color, with large font and red background', 
// 'color: blue; font-size: x-large; background: red');
// //datain table of console
// const users = [{ "name":"John", "id": 1, "city": "Delhi"}, { "name":"Max", "id": 2, "city": "London"}, { "name":"Rod", "id": 3, "city": "Paris"} ];
// console.table(users);

//Fetch call abort
/**
 * const controller = new AbortController();
const { signal } = controller;

fetch("http://localhost:8000", { signal }).then(response => {
    console.log(`Request 1 is complete!`);
}).catch(e => {
    if(e.name === "AbortError") {
        // We know it's been canceled!
    }
});

fetch("http://localhost:8000", { signal }).then(response => {
    console.log(`Request 2 is complete!`);
}).catch(e => {
     if(e.name === "AbortError") {
         // We know it's been canceled!
      }
});

// Wait 2 seconds to abort both requests
setTimeout(() => controller.abort(), 2000);
 */

//Array resizing
/**
 * The length property of an array is useful to resize or empty an array quickly. Let's apply length property on number array to resize the number of elements from 5 to 2,

var array = [1, 2, 3, 4, 5];
console.log(array.length); // 5

array.length = 2;
console.log(array.length); // 2
console.log(array); // [1,2]
and the array can be emptied too

var array = [1, 2, 3, 4, 5];
array.length = 0;
console.log(array.length); // 0
console.log(array); // []
 */
//Iterator over object properties
/**
 * const collection = {
  one: 1,
  two: 2,
  three: 3,
  [Symbol.iterator]() {
    const values = Object.keys(this);
    let i = 0;
    return {
      next: () => {
        return {
          value: this[values[i++]],
          done: i > values.length
        }
      }
    };
  }
};

const iterator = collection[Symbol.iterator]();

console.log(iterator.next());    // → {value: 1, done: false}
console.log(iterator.next());    // → {value: 2, done: false}
console.log(iterator.next());    // → {value: 3, done: false}
console.log(iterator.next());    // → {value: undefined, done: true}

//Using Generator

 const collection = {
   one: 1,
   two: 2,
   three: 3,
   [Symbol.iterator]: function * () {
     for (let key in this) {
       yield this[key];
     }
   }
 };
 const iterator = collection[Symbol.iterator]();
 console.log(iterator.next());    // {value: 1, done: false}
 console.log(iterator.next());    // {value: 2, done: false}
 console.log(iterator.next());    // {value: 3, done: false}
 console.log(iterator.next());    // {value: undefined, done: true}


 */

 //Promise or not
 /**
  * function isPromise(object){
      if(Promise && Promise.resolve){
      return Promise.resolve(object) == object;
      }else{
      throw "Promise not supported in your environment"
      }
   }

   var i = 1;
   var promise = new Promise(function(resolve,reject){
      resolve()
   });

   console.log(isPromise(i)); // false
   console.log(isPromise(promise)); // true
  */

/*
You can use new.target pseudo-property to detect whether a 
function was called as a constructor(using the new operator) or as a regular function call.

If a constructor or function invoked using the new operator, new.target 
returns a reference to the constructor or function.
For function calls, new.target is undefined.
function Myfunc() {
   if (new.target) {
      console.log('called with new');
   } else {
      console.log('not called with new');
   }
}

new Myfunc(); // called with new
Myfunc(); // not called with new
Myfunc.call({}); not called with new

*/

//Rest parameter collects all remaining elements into an array. 
//Whereas Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.
// i.e, Rest parameter is opposite to the spread operator.

//for...in for...of
/*
let arr = ['a', 'b', 'c'];

arr.newProp = 'newVlue';

// key are the property keys
for (let key in arr) {
  console.log(key);
}

// value are the property values
for (let value of arr) {
  console.log(value);
}
*/

// void with IIFE
/*
void function test() {
  console.log('boo!');
  // expected output: "boo!"
}();

try {
  test();
} catch (e) {
  console.log(e);
  // expected output: ReferenceError: test is not defined
}*/
