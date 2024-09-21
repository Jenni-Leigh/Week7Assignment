// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!


// Answer 1a:
    // *****used minusAge to show the last number (-1) to be subtracted by whatever number is in the 0 position*****

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("ages:", ages);

let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).


// Answer 1b:
//***** used push feature to add another age (100) then ran the same minueAge to reach a new number since the last number (-1) is no longer the same as before*****

ages.push(100)
console.log("Ages after pushing new value", ages);  
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);

// Use a loop to iterate through the array and calculate the average age.

// Answer 1c:
//***** I created sumOfAges to use to add all ages to get the sum, then created a loop to provide the total. Then created average in order to get the average of all ages.*****

let sumOfAges = 0;

for(let i = 0; i < ages.length; i++) {
    // console.log(i, "test");
    sumOfAges += ages[i];
    console.log("index:", i, "sumOfAges:", sumOfAges);
}
console.log("Total sum", sumOfAges);

let average = sumOfAges / ages.length
console.log("Average", average)

//Question 2:
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'
// Use a loop to iterate through the array and calculate the average number of letters per name.

//Answer 2a:
//*****I created an array of names, and used a loop to show how many letters long they are, then created another loop to show the average of the total characters*****

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalCharacters = 0;
for(let i = 0; i < names.length; i++) {
    // console.log(i, "test");
totalCharacters += names[i].length;
console.log("index:", i, "name:", names[i], "totalCharacters:", totalCharacters);
}
let averageName = totalCharacters / names.length
console.log("Average of Names:", averageName);

//Question 2b:
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

//Answer 2b:
//*****I created concatNames and created a loop that would concatenate the names. I used the + " " to create a space between the names*****

let concatNames = "";

for (i = 0; i < names.length; i++){
    // console.log(i, "test");
concatNames = concatNames.concat(names[i] + " ");
console.log("Names concatenated", concatNames)
}

//Question 3:
//How do you access the last element of any array?

//Answer 3:

console.log("Last element of ages array:", ages[ages.length - 1]);

//Question 4:
//How do you access the first element of any array?

//Answer 4:

console.log("First element of ages array",ages[0]);


//Question 5:
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

//Answer 5:
//*****I created a variable called nameLengths and used a loop and a push to list the length of each name*****

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    // console.log(i, "test");
nameLengths.push(names[i].length)
console.log("Name Lengths array:", nameLengths);
}

//Question 6:
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

//Answer 6:
//******I created characterTotal to assist with finding the sum of the elements in the array. By using the += this allows the addition of the characters in each name*****

let characterTotal = 0;

for (let i = 0; i < nameLengths.length; i++) {
    // console.log(i, "test")
characterTotal += nameLengths[i];
console.log("character total:", characterTotal);
}

//Question 7:
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

//Answer 7:
//*****I created the function concatWords and assigned concat to work.repeat in order to name the word (hello) and number of times to repeat (3)*****

function concatWords(word, n) {
console.log("Word Par:", word, "n Par:", n);
let concat = word.repeat(n);
    console.log(concat);
}
concatWords("Hello", 3);

//Question 8:
//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

//Answer 8:
//*****I created a function called fullName that consists of the firstName and the lastName nad let it equal the first name plus last name, I also inclused a " " space between.*****

function fullName(firstName, lastName) {
    
let fullName = firstName + " " + lastName;
    console.log(fullName);

}
fullName("Jenni", "Frost");

//Question 9:
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

//Answer 9:
//*****I created the variables numbers1 and numbers2 and assigned numbers to them, as well as creating a function called sumNmbersArray. Then I created a for loop that would figure out the total numbers added up, then created and if/else so it would return either a true or false depedning on if the sum of the numbers were greater or less than 100 *****/

let numbers1 = [100, 200, 300, 400];
let numbers2 = [1,2,3,4];

function sumNumbersArray(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        // console.log(i, "test");
    total += array[i]
    console.log("Total", total);

    }
if (total > 100) {
    console.log("Total:",total, true);
    return true
} else {
    console.log(total,false);
    return false
}
}
sumNumbersArray(numbers2);

//Question 10:
// Write a function that takes an array of numbers and returns the average of all the elements in the array.

//Answer 10:
//*****I created a function callede calculateNumbersAverage, then used a for loop to allow the total to show, then created a variable called average which is the total divided by the array.length*****

function calculateNumbersAverage(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        // console.log(i, "test");
        total += array[i];
        console.log("calculate Function, total:", total);
    }

    let average = total / array.length
    console.log("Average of numbers",average);
}
calculateNumbersAverage(numbers1);

//Question 11:
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//Answer 11:
//*****I assigned variables to numbers3 and numbers4, then creates a function called twoAverages made up of array1 and array2. This allowed for the current number and the sum to be shown. I created some if/else statements to show true/false or numbers are even depending on if the sum is greater or less than or equal.*****

let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];

function twoAverages(array1, array2) {
    console.log("Parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;
for (const number of array1) {
    total1 += number
    console.log("Current number loop1", number, "Total1:", total1);
}
for (const number of array2) {
    total2 += number;
    console.log("Current number loop2", number, "Total2:", total2);
}
let average1 = total1 / array1.length;
let average2 = total2 / array2.length;
console.log("averages", average1, average2);

if (average1 > average2) {
    console.log(true);
    return true;
} else if (average1 < average2) {
    console.log(false);
    return false;
} else {
    console.log("Numbers are equal");
}
}
twoAverages(numbers3, numbers4);

//Question 12:
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//Answer 12:
//*****I created a function called willBuyDrink that determines if it is hot outside and if we have enough money in our pocket for a drink. Depending on the outcome, it will show true/false*****



function willBuyDrink(isHotOutside, moneyInPocket) {
    console.log("Parameters", isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("Buy a drink?", buyDrink);
    return buyDrink;

}
willBuyDrink(true, 1);

//Question 13:
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//Answer 13:
//*****I created a function that determines if I can afford to buy a new car. The factors are how much money I have in savings, as well as how much money I make in a month. If I have enough I can buy a new car, otherwise I need to save a bit more.*****

function canIBuyACar(moneyInSavings, monthlyIncome) {
    console.log("Parameters", moneyInSavings, monthlyIncome);
let buyACar = moneyInSavings > 25000 && monthlyIncome >= 4000;

if (buyACar) {
    return "Go get yourself a new car!";
} else {
    return "You need more money before you can buy a car.";
}

}
console.log(canIBuyACar(26500, 4500));
