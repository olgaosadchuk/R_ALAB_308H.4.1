// // //1. Create a variable called fourthItem and assign it the value of the fourth item in the horror array ('Ghostface'). 
// // //Then console.log fourthItem to see the output.
// const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];
// const fourthItem = horror [3];
// console.log(fourthItem)



// //2. Use a built-in JavaScript method to add another show to the netflixShows array. Then log your updated array to the console.
// const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];
// const netflix = netflixShows.push("Friends");
// console.log(netflix);



// //3. Using a for loop, decrement countDown by one each time the loop runs until it equals 0, making use of looping functionality instead of logging each number separately.
// let countDown = 10;
// for(let i = countDown; i > 0; i--){
//     countDown--;
// }
// console.log (countDown);


// //5. 1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.
// //2. Use a second for loop to iterate through the greetings and console.log() each greetings.
// const synonyms = ['fantastic', 'wonderful', 'great'];
// const greetings = [];
// for (let i = 0; i <synonyms.length; i++){
//     greetings.push("Have a " + synonyms[i] + " day!");
// }
// for (let i = 0; i < greetings.length; i++) {
//     console.log(greetings[i]);
//   }



//6. For this challenge, loop through the arrays and push a string with the format "My name is [firstName] [lastName] and I am from [place]" into the array holding the respective bios.
// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];
// const bios = [];
// for (let i = 0; i <firstNames.length; i++){
//     const bio = "My name is " + firstNames[i] + " "+ lastNames[i] + " and I am from " + places[i];
//     bios.push(bio);
// }
// console.log(bios);



//7. You are given an array of five numbers called increaseByTwo. Use a for loop to iterate through the array and increase each number by two.
// const increaseByTwo = [1, 2, 3, 4, 5];
// for (let i = 0; i < increaseByTwo.length; i++){
//     increaseByTwo[i] += 2;  
// }
// console.log(increaseByTwo);




//8. Use a while loop to increment count by 2 on each repetition of the block of code. Run the code block of your while loop until count is 8.
// let count = 2;
// while (count < 8){
//     count +=2;
// }
// console.log(count);




//9. Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. 
//In the code block, add the value of addThis to sum, then increment addThis by 1. 
//After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.
//let addThis = 0;
// let sum = 0;
// while (addThis < 10){
//     sum += addThis;
//     addThis++;
// }
// console.log(sum);



//10. Use an if statement to check if num is greater than 100. If num is greater than 100, reassign the value of final to null. 
//Otherwise, set final to be two times the value of num.
// const num = 40;
// let final;
// if (num > 100){
//     final = null;
// }
// else{
//     final = num * 2;
// }
// console.log(final);



// //11. Challenge: fizzbuzz
// // Use a loop to iterate through the numbers 1 through 16. 
// // Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.
// // Log fb to the console to see the output.
// // Hint: Check out the remainder/modulo operator: %.
// const fb = [];
// for (let i = 1; i <= 16; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     fb.push("fizzbuzz");
//   } else if (i % 3 === 0) {
//     fb.push("fizz");
//   } else if (i % 5 === 0) {
//     fb.push("buzz");
//   } else {
//     fb.push(i);
//   }
// }
// console.log(fb);


// //13. Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.
// const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// for (let i = 0; i < timesTenIfOverFive.length; i++){
//     if (timesTenIfOverFive[i] >=5){
//         timesTenIfOverFive[i]*=10;
//     }
// }
// console.log(timesTenIfOverFive);


// //14. You are provided with an object called checkObj. Using a for... in loop, determine if the object contains the property foundNum. 
// //If it exists, reassign the value of found to 1.
// const checkObj = {
//     oddNum: 1,
//     evenNum: 2,
//     foundNum: 5,
//     randomNum: 18
//   };
//   let found = 0;
//   for (let key in checkObj) {
//     if (key === 'foundNum') {
//       found = 1;
//       break;
//     }
//   }
//   console.log(found);


// //15. You are provided with an empty array called objToArray. Using a for... in loop, fill the array with all of the numbers 
// //from the checkObj object if they are greater than or equal to 2.
// const checkObj = {
//     oddNum: 1,
//     evenNum: 2,
//     foundNum: 5,
//     randomNum: 18
//   };
//   const objToArray = [];
//   for (let key in checkObj){
//     if (checkObj[key] >=2){
//         objToArray.push(checkObj[key]);
//     }
//   }
//   console.log(objToArray);



// //16. This time, use the Object.values() method to return an array of checkObj's values, and assign this array to a constant called objToArray. 
// //Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. 
// //If so, reassign the value of divBy6 to true.
// const checkObj = {
//     oddNum: 1,
//     evenNum: 2,
//     foundNum: 5,
//     randomNum: 18
//   };
//   let divBy6 = false;
//   const objToArray = Object.values(checkObj);
// for (let i = 0; i < objToArray.length; i++) {
//   if (objToArray[i] % 6 === 0) {
//     divBy6 = true;
//     break;
//   }
// }
// console.log(divBy6);



// //17. You are provided with an empty array called nestedArr. Using a for loop starting at index 0, add 5 subarrays to nestedArr, 
// //with each nested array containing the string 'loop' concatenated with the corresponding index in nestedArr as its first element, 
// //and the index as its second element.
// const nestedArr = [];
// for (let i = 0; i < 5; i++) {
//     nestedArr.push(['loop' + i, i]);
//   }
//   console.log(nestedArr);



// //18. You are provided with an array, possibleIterable. Using a for loop, build out the object divByThree so that each key is an element 
// //of possibleIterable that is divisible by three. The value of each key should be the array index at which that key can be found in possibleIterable.
// const possibleIterable = [4, 3, 9, 6, 23];
// const divByThree = {};
// for (let i = 0; i < possibleIterable.length; i++) {
//     if (possibleIterable[i] % 3 === 0) {
//       divByThree[possibleIterable[i]] = i;
//     }
//   }
//   console.log(divByThree);


// //20. You are given an object called sumMe containing several key/value pairs and a variable called total whose initial value is 0. 
// //Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total.
// const sumMe = {
//     hello: 'there',
//     you: 8,
//     are: 7,
//     almost: '10',
//     done: '!'
//   };
//   let total = 0;
//   for (let key in sumMe) {
//     if (typeof sumMe[key] === 'number') {
//       total += sumMe[key];
//     }
//   }
//   console.log(total);