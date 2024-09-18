// while

// task 1

// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

// let number = 1;

// while(number <= 60){
//     console.log('"I will invest at least 6 hrs every single day for next 60 days!"', number);
//     number++;
// }



// task 2

// Find all the odd numbers from 61 to 100.

// let number = 61;

// while(number <=100){
//     console.log(number);
//     number += 2;
// }



// task 3

// Find all the even numbers from 78 to 98.

// let number = 78;

// while(number <=98){
//     console.log(number);
//     number += 2;
// }



// task 4

// Display sum of all the odd numbers from 81 to 131.

// let number = 81;
// let sum = 0;
// while(number <=131){
//     console.log(number);
//     sum = sum + number;
//     console.log('sum', sum)
//     number += 2;
// }
// console.log('all sum', sum);



// task 5

// Display sum of all the even numbers from 206 to 311.

// let number = 206;
// let sum = 0;

// while(number <= 311){
//     console.log(number);
//     sum = sum + number;
//     console.log('sum', sum);
//     number += 2;
// }
// console.log('all sum', sum);



// task 6

// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5



// task 7

// Implement a countdown timer that counts down from 21 to 15.

// let number = 21;
// while(number >= 15){
//     console.log(number);
//     number--;
// }







// for


// task 1

// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.


// for(let i = 1; i <= 60; i++){
//     console.log('"I will invest at least 6 hrs every single day for next 60 days!"', i);
// }


// task 2

// Find all the odd numbers from 61 to 100.

// for(let i = 61; i <= 100; i +=2){
//     console.log(i);
// }


// task 3

// Find all the even numbers from 78 to 98.

// for(let i = 78; i <= 98; i += 2){
//     console.log(i);
// }


// task 4

// Display sum of all the odd numbers from 91 to 129.

// let sum = 0;
// for(let i = 91; i <= 129; i += 2){
//     console.log(i);
//     sum = sum + i;
//     console.log('sum', sum);
// }
// console.log('all sum',sum);


// task 5

// Display sum of all the even numbers from 51 to 85.

// let sum = 0;
// for(let i = 52; i <= 85; i += 2){
//     console.log(i);
//     sum = sum + i;
//     console.log('sum', sum);
// }
// console.log('all sum',sum);


// task 6

// Generate a multiplication table for number 9


// task 7

// Implement a countdown timer that counts down from 81 to 65.

// for(let i = 81; i >= 65; i--){
//     console.log(i);
// }





// break

// task 1

// Write a loop 1 to 200. Use break to exit the loop once you find 100.

// for(let i = 1; i <= 200; i++){
//     console.log(i);
//     if(i >= 100){
//         break
//     }
// }

// let number = 1;

// while(number <= 200){
//     console.log(number);
//     if(number >= 100){
//         break
//     }
//     number++;
// }


// task 2

// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

// let number = 1;
// let sum = 0;
// while(number <= 200){
//     console.log(number);
//     sum = sum + number;
//     if(sum > 100){
//         break
//     }
//     number++;
// }

// console.log('all sum', sum);


// task 3

// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)



// continue


// task 1

// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

// for(let i = 1; i <= 40; i++){
//     if(i % 2 === 1){
//         continue
//     }
//     console.log(i);
// }


// task 2

// display odd number from 55 to 85 and skip the numbers divisible by 5.

// for(let i = 55; i <= 85; i++){
//     if(i % 5 === 0){
//         continue
//     }
//     console.log(i);
// }
