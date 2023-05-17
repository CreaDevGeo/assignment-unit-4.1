console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let names =  [];

function helloName( name ){
  console.log('Running helloName. Enter a name.' );
  console.log(`You entered, ${name}, for the name.`);
  names.push( name );
  return names;
}
// Remember to call the function to test
helloName( 'Georgio' );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber ) {
  // return firstNumber + secondNumber;

}


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  console.log( 'Running multiplyThree. Enter the three numbers you\'d like to multple together.' );
  const answer = num1 * num2 * num3;
  console.log('The answer is:', answer);
  return answer;
}


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('In isPositive. Enter a number to see if it\'s positive or negative.');
  if ( number > 0 ){
    console.log('This number is positive!');
    return true;
  }
  else if(number < 0){
    console.log('This number is negative!');
    return false
  }
  else{
    console.log('This number is neither positive or negative');
    return false
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
itemsInArray = ["Fried Fish Gills", "Striped Balloons", 3, "Muunkays!"];
noItemsInArray = [];

function lastArrayItem(array) {
  console.log('In lastArrayItem. Enter an array to see the last item.');
  if(array.length === 0){
    return console.log("The last item in this array is:", undefined);
  }
  else{
    console.log("The last item in this array is:", array[array.length - 1]);
  return  array[array.length - 1];
  }
}
console.log('- TEST -lastArrayItem:', lastArrayItem(noItemsInArray));
console.log('- TEST -lastArrayItem:', lastArrayItem(itemsInArray));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let campers = ['Jill', 'Tommy', 'Noah', 'Chris'];

function findArrayValue(array, value) {
  console.log("In findArrayValue.");
  for(let i = 0; i < array.length; i ++){
    if(i === value){
      arrayValue = array[i];
      console.log(`The value is:', ${arrayValue}`);
      return true;
    }
  }
  console.log('There is no value in his array.');
  return false;
}

console.log('- TEST - findArrayValue:', findArrayValue(itemsInArray, 1));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
arrayNumbers = [4, 8, 2, 0, 3];

console.log("In arrayNumbers. Enter your array.")


console.log('- TEST - findArrayValue:', sumAll(arrayNumbers));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
