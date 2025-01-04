// Learn to Code
// var name = "Ricky";
// var lastName = 'Jackson';
// var fullName = name + " " + lastName;
// console.log(fullName);

// OLD WAY Prior to 2015 ES^
// var userName = 'Jax_Rick';

// NEW WAY
// let name = 'James'
// const age = 33;

// var firstName = '';
// var age = 27;
// var recedingHairline = false;
// var favFood;
// var toiletPaper = null;
// console.log("Value ", firstName);
// console.log('Type', typeof firstName);
// console.log("Value ", age);
// console.log('Type', typeof age);
// console.log("Value ", recedingHairline);
// console.log('Type', typeof recedingHairline);
// console.log("Value ", favFood);
// console.log('Type', typeof favFood);
// console.log("Value ", toiletPaper);
// console.log('Type', typeof toiletPaper);
// i.e. - NULL
// toiletPaper = 24;
// console.log("Value ", toiletPaper);
// console.log('Type ', typeof toiletPaper);
// Objects
// var person = {
//     firstName: 'Mary',
//     age: 27,
//     favFood,
//     recedingHairline: false,
//     toiletPaper: 206
// }
// console.log(person);
// console.log(person.age);
// Array
// var students = ['Orion', 'Kingston', 'Shyla', 'Chloe'];
// console.log(students);
// console.log(students[0]);
// console.log(students[3]);
// // Function
// var myFunc = function() {
    
// }
// console.log(myFunc);


// Exercise #1
// var car = {
//     make: "KIA",
//     model: "Telluride",
//     year: 2024,
//     color: "Black",
//     isManualTransmission: false,
//     numSeats: 8,
//     mileage: 4000
// }
// console.log(car);
// console.log("This is a " + car.make + " " + car.model);
// console.log("The car has " + car.mileage + " on it");
// console.log("Lets change the color from " + car.color + " to White");
// console.log("Do we have enough seats for all our people, i think it has " + car.numSeats + " seats?!");

// Strings
// var make = 'Toyota';
// var model = 'Prius';
// var year = 2021;

// String Concactenation
// var myRide = make + ' ' + model;

// var myBraggingRight = 'I drive a ' + year + ' ' + myRide;
// console.log(myRide);
// console.log(myBraggingRight);
// console.log(typeof myBraggingRight);
// console.log(myRide.length);
// console.log(myRide.concat(' is cool!'));
// console.log(myRide.indexOf('T'));
// console.log(myRide.indexOf('u'));
// console.log(myRide.lastIndexOf('r'));
// console.log(myRide.replace('Toyota', "Apples's"));
// console.log(year.toString());
// console.log(myRide.toUpperCase());
// console.log(myRide.toLowerCase());

// Exercise #2

// let person_Rick = {
//     name: 'Rick Jackson',
//     dateOfBirth: '10/28/1990',
//     isOrganDonar: true,
//     streetAddress: '2321 Champa',
//     city: 'Denver',
//     state: 'Colorado',
//     zipCode: 80205,
//     idNumber: 4444,
// }
// console.log("Hi, my name is " + person_Rick.name + " and i was born on " + person_Rick.dateOfBirth + "." + " I currently live on " + person_Rick.streetAddress + " in " + person_Rick.city + ", " + person_Rick.state + " " + person_Rick.zipCode + "." + " My ID number is private but it ends with " + person_Rick.idNumber + "." + " Thank you for your help today getting signed up!!!");

// var totalUsers = 42;
// var purchase = 46.99;

// var sciNot = 123e5;
// var sciNot2 = 123e-5;


// var numVal = 5 + 5;
// var numVal2 = 5 -19;
// var numVal3 = 2 * 3;
// var numVal4 = 33 / 3;
// var numVal5 = 19 % 5;


// console.log();

// Exercise #3

// var item1 = 20.5;
// var item2 = 10.25;
// var item3 = 5.25;
// var item4 = 3.25;
// var item5 = 30.5;
// var item6 = 8.75;
// var totalCost = item1 + item2 + item3 + item4 + item5 + item6;
// var discount = .25;
// var priceAfterDiscount = totalCost - (totalCost * discount); 
// var taxes =  (7.75 / 100) * priceAfterDiscount;

// var finalPrice = priceAfterDiscount + taxes;

// console.log(finalPrice);

//  Comparison Operations

// Conditional Statements
// == Equal to
// !== Not Equal to
// > Greater Than
// < Less Than
// >= Greater Than or Equal to
// <= Less Than or Equal to

// var currentAccountBalance = 74.98;
// var purchase = 74.99;
// var freeLavaLampVoucher = true;

// if (purchase < currentAccountBalance) {
//     console.log('Lava Lamps for days!!!');
// }
// else if (freeLavaLampVoucher) {
//     console.log('Free Stuff Rocks!!');
// }
//else if again and again if you want in the notation format
// else {
//     console.log('You broke bitch!!');
// }


// if (1 === '1') {
//     console.log('Holy smokes it\'s true');
// }
// else {
//     console.log('You Wish');
// }

// Logical Operations
// Logical Operators
// && and
// || or
// ! not

// var skater1 = 9.5;
// var skater2 = 9;
// var skater3 = 8.5;
// var isJackedUpOnCaffeine = true;

// // && Operations both conditions need to be true to execute code block 
// if (skater2 < skater3 && skater2 <= skater1) {
//     console.log('Move skater #2 into the next round');
// }
// else if (
//     skater3 > skater2 
//     || skater3 === skater2
//     && skater2 < skater1
//     && !isJackedUpOnCaffeine
// ) {
//     console.log('Skater #3 is steppin up their game!!');
// }
// else if (skater3 > 5 && isJackedUpOnCaffeine) {
//     console.log('Skater #3 takes home the gold!!!');
// }

// Exercise #4
// var currentLightColor = 'Red';
// if (currentLightColor == 'Green') {
//     console.log(`The light is ${currentLightColor}!!!`);
// }
// else if (currentLightColor == 'Red') {
//     console.log(`The light is ${currentLightColor}!!!`);
//     console.log(`You\re about to run the red light, Stop!!!`);
// }
// else {
//     console.log(`Maybe you can make it, but make the right choice`);
// }

// Errors and Debugging
// Use of Developer Tools
// 2 Stages include Parsing Stage and Execution Stage

// Array

// var tvShows = ['The Waling Dead', 'Breaking Bad', 'The Office'];

// console.log(tvShows);
// Index starts at 0
// console.log(tvShows[0]);
// console.log(tvShows[1]);
// console.log(tvShows[2]);
// console.log(tvShows[3]);
// tvShow at Index 3 is undefined because it does not exist

// var userSavedMovies = [];
// Methods
//push() - adds a value to the array at the end
// console.log(userSavedMovies);

// userSavedMovies.push('The Rocketeer');
// userSavedMovies.push('The Matrix');
// userSavedMovies.push('Braveheart');
// console.log(userSavedMovies);

//pop() - removes the last item in the index
// userSavedMovies.pop();
// console.log(userSavedMovies);
 
// Length Property
// console.log(userSavedMovies.length);


// Loops

// var tvShows = [
//     'The Walking Dead',
//     'Breaking Bad',
//     'The Office',
// ];

// var userSavedMovies = [];

// for (var i = 0; i < tvShows.length; i++ ) {
//     console.log(i)
//     console.log(tvShows[i]);
// }
// 0 < 3 = true; 0 + 1 = 1
// 1 < 3 = true; 1 + 1 = 2;
// 2 < 3 = true; 2 + 1 = 3;
// 3 < 3 = false; loop ends
// the index starts at 0 but contains 3 list items so the index ends at index 2
// output to console = 0, 1, 2

// var completedItems = [];

// var todos = [
//     {
//         title: 'Item 1', completed: true
//     },
//     {
//         title: 'Item 2', completed: false
//     },
//     {
//         title: 'Item 3', completed: false
//     },
//     {
//         title: 'Item 4', completed: true
//     },
// ];

// console.log(todos);

// for (var x = 0; x < todos.length; x++) {
//     if (todos[x].completed) {
//         completedItems.push(todos[x]);
//     }
// }
// console.log(completedItems);

// While Loops

// var bottles = 99;

// Amateur Code
// while (bottles > 0) {
//     console.log(`${bottles} bottles of stuff on the wall`);
//     bottles -= 1;
// }

// Pro Code - 2 methods of executing
// 1st way 
// while (bottles > 0) {
//     if (bottles > 1) {
//         console.log(`${bottles} bottles of stuff on the wall`);
//         bottles -= 1;
//     }
//     else {
//         console.log(`${bottles} bottle of stuff on the wall`);
//         bottles -= 1;
//     }
// }
// 2nd way - more efficient code / cleaner code
// while (bottles > 0) {
//     if (bottles > 1) {
//         console.log(`${bottles} bottles of stuff on the wall`);
//     }
//     else {
//         console.log(`${bottles} bottle of stuff on the wall`);
//     }
//     bottles -= 1;
// }

// Coding Challenge

// const numbers = 100;

// for (let i = 1; i <= 100; i++) {
//     if ([i] % 3 == 0) {
//         console.log('Fizz');
//     }
// }
// for (let i = 1; i <= 100; i++) {
//     if ([i] % 5 == 0) {
//         console.log('Buzz');
//     }
// }
// for (let i = 1; i <= 100; i++) {
//     if ([i] % 3 == 0 && [i] % 5) {
//         console.log('FizzBuzz');
//     }
// }

// Functions

// function calcArea(w, l) {
//     return w * l;
// }

// var kitchenArea = 15 * 18;
// var bedroomArea = 12 * 10;
// var kitchenArea = calcArea(15, 18);
// var bedroomArea = calcArea(12, 10);

// console.log(kitchenArea);
// console.log(bedroomArea);

// function toCelsius(f) {
//     var temp = (5/9) * (f -32);
    // return Math.round(temp);
//     return temp.toFixed(2);
// }

// function toFahrenheit(c) {
//     var temp = 
//     return temp.toFixed(2);
// }

// var toFahrenheit = toFahrenheit();
// console.log(toFahrenheit);

// var toCelsius = toCelsius(46);
// console.log(toCelsius);

// var weather = `The temperature outside is ${toCelsius} degrees celsius`;
// var weather = `The temperature outside is ${toFahrenheit} degrees fahrenheit`;

// console.log(weather);

var warrior = {
    name: 'Tuffy',
    attack: 70,
    defense: 55,
    mana: 100,
}
// warrior.attack = warrior.attack + 2;
// warrior.attack += 2;
// warrior.defense += 6;
// warrior.mana -= 12;

// console.log(warrior);

// function levelUp(prop, val) {
    // cannot use dot notation to access data inside object
//     warrior[prop] += val;
// }

// levelUp('attack', 2);
// levelUp('defense', 6);
// levelUp('mana', 17);

// console.log(warrior);