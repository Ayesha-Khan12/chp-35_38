// 1. Write a function that displays current date & time in your
// browser.

// function currentDate() {
//   let current = new Date();
//   document.write(current);
// }
// currentDate();
// document.write("<hr>");

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greet(firstName, lastName) {
//   document.write(`<b>Hello, ${firstName} ${lastName} Welcome!`);
// }
// let firstName = prompt("Please enter your first name...");
// let lastName = prompt("Please enter your last name...");

// greet(firstName, lastName);

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function addNumbers(firstNumber, secondNumber){
//     document.write(result);
// }
// let firstNumber = +prompt("Please enter a number...");
// let secondNumber = +prompt("Please enter second number...");
// let result = firstNumber + secondNumber;
// addNumbers(firstNumber, secondNumber);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calcute(num1, num2, operator) {
//   let result;

//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     result = num1 / num2;
//   } else "Invalid Operator!";
//   document.write(result + "<br>");
// }

// calcute(12, 42, "+");
// calcute(5, 40, "-");
// calcute(22, 3, "*");
// calcute(14, 2, "/");
// document.write("<hr>");

// 5. Write a function that squares its argument.

// function square(num) {
//   result = num * num;
//   document.write(result + "</br>");
// }
// square(5);
// square(10);
// document.write("<hr>");

// 6. Write a function that computes factorial of a number.

// function factor(){
//     let userInput = +prompt("Please enter a number...")
//     if(userInput < 0){
//         alert("Factorial is not defined for negative numbers.");
//         return;
//     }
//     if(userInput === 0){
//         alert("The factorial 0 is 1.");
//         return;
//     }
//     let result = 1;
//     for(i = 1; i <= userInput; i++){
//        result *= i;
//     }
//     document.write (`the factor ${userInput} is ${result}`)
// }
// factor();

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function counting() {

//   let startNumber = +prompt("Enter a starting number");
//   let endNumber = +prompt("Enter an end number");

//   if (startNumber > endNumber) {
//     alert("Invalid Counting.");
//     return;
//   }

//   if (startNumber === endNumber) {
//     result = startNumber;
//     return;
//   }

//   for (i = startNumber; i <= endNumber; i++) {
//     document.write(i + "<br>");
//   }
// }
// counting();

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(){
//   let base = +prompt("Enter the base value:");
//   let perpendicular = +prompt("Enter the perpendicular value:");

//   function calculateSquare(number){
// return number * number;
//   }

//   let hypotenusSquared = calculateSquare(base) + calculateSquare(perpendicular);
//   let hypotenus = Math.sqrt(hypotenusSquared);
//   document.write(`Hypotenuse is: ${hypotenus}`);
// }
// calculateHypotenuse();

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculateArea(){
//   let width = 5;
//   let height = 10;
//   let calculate = width * height;
//   document.write(`Calculated Area: ${calculate}`);
// }
// calculateArea();
// document.write('</br>');

// function calculate(width, height){
// let area = width * height;
// document.write(`Calculated Area (Arguments as Variables): ${area}`);
// }
// calculate(10, 20);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function checkPalindrome(){
//   let str = prompt('Enter a word or phrase:');
//   let reversedstr = str.split('').reverse().join('');
//   if(str === reversedstr){
//     alert("Yes, it's a palindrome!")
//   }
//   else{
//     alert("no, it's not a palindrome!")
//   }
// }
// checkPalindrome();

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function firstCapitalLetter(){
//   let userInput = prompt("Please enter a sentence:");
//   let word = userInput.split(' ');
//   for (let i = 0; i < word.length; i++) {
//     word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
//   }
//   let outPut = word.join(' ');
//   document.write(`User Input : ${userInput} </br> OutPut: ${outPut}`);
// }
// firstCapitalLetter();

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longestWord() {

//   let userInput = prompt("Please enter a sentence:");
//   let words = userInput.split(' ');
//   let longWord = "";

//   for (i = 0; i < words.length; i++) {

//     if (words[i].length > longWord.length) {
//       longWord = words[i];

//     }
//   }

//   document.write(`User Input: ${userInput} <br> Longest Word: ${longWord}`);
// }

// longestWord();


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function countOfSameLetter(str, letter){
//   let count = 0;
//   for(i = 0; i < str.length; i++){
//     if(str[i] === letter){
//       count++;
//     }
//   }
//   return count;
// }
// let userString = prompt("Please enter a sentence:");
// let userLetter = prompt("Please enter the letter to count:");

// let result = countOfSameLetter(userString, userLetter);
// document.write(`User Input : ${userString} </br> Same Letter : ${userLetter} </br> Occurences : ${result}`);
// countOfSameLetter();



// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius){
let π = 3.14159;
let circumference = (2 * π * radius).toFixed(3);  
document.write(`The circumference is ${circumference} <br>`);
}

function calcArea(radius){
  let π = 3.14159;
  let area = (π * radius * radius).toFixed(3);
document.write(`The area is ${area}`);
}

let radius = +prompt("Please enter a radius value");
calcCircumference(radius);
calcArea(radius);
