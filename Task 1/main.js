/*
factorial of number
*/

let userNumber = 5;  

function factorial(userNumber) {
  let result = 1;
  for (let i = userNumber; i > 0; i--) {
    result *= i;  
  }
  return result;
}

console.log("The factorial of " + userNumber + " is: " + factorial(userNumber));


/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/

// let x = 250;
// let zakatPercentage = 2.5;

// let calcZakat = (x * zakatPercentage) / 100;

// document.write(calcZakat);

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

// correct answer

//  [ 1,7,  9 , 45, ]

//  ["Str", "alex","moh",

//  'the','fox', 'over', lazy, 'dog']

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

// var fruits=["Tomato","Banana","Watermelon"];
// console.log(fruits.indexOf("Banana"))
// console.log(fruits.indexOf("Tomato"))

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

// let myFavoriteFood = ["Apple", "Football", "Braking Bad"];

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// let firstOfArray = [1,4,5];
// console.log(firstOfArray[0]);

// let secondArray = ["t","u","g","x"];
// console.log(secondArray[0]);

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

// firstOfArray = [1,4,5];
// console.log(firstOfArray[2]);

// secondArray = ["t","u","g","x"];
// console.log(secondArray[2]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

// unshift get them at the first

// var array = [0,5,7,9]

// array.splice(0,1)
// array.splice(0,0, 1)
// array.splice(1,0, 3)
// array.splice(2,0, 4)
// array.splice(3,0, 6)
// array.splice(4,0, 8)
// array.splice(5,1)
// array.splice(6,1)
// array.splice(6,0, 10)

// console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

// var array2 = [5,9,-7,3.5]

// array2.push(7)
// console.log(array2);

// array2.unshift(7) // add it at the beginning of the array
// console.log(array2);

// array2.shift() // remove the first element
// console.log(array2);

// array2.pop() // remove the last element
// console.log(array2);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//If the result of a - b is negative, a comes before b but If the result is positive, b comes before a.
// arr1.sort((a, b) => a - b);
// console.log(arr1);

// 9.
// Write a JavaScript function that returns rate as text
// less than 50 return ==> Fail
// equal or between 50 and 59 ===> E
// equal or between 60 and 69 ===> D
// equal or between 70 and 79 ===> C
// equal or between 80 and 89 ===> B
// equal or between 90 and 100 ===> A

// let grade;
// function rate(grade)
// {
//     if (grade >= 50 && grade <= 59)
//         return 'E'
//     else if (grade >= 60 && grade <= 69)
//         return 'D'
//     else if (grade >= 70 && grade <= 79)
//         return 'C'
//     else if (grade >= 80 && grade <= 89)
//         return 'B'
//     else if (grade >= 90 && grade <= 100)
//         return 'A'
//     else if (grade < 50)
//         return 'Fail'

// }

// console.log(rate(90))

// 10.
// Write a JS code to print a pattern using for loop

//    1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5
//    1 2 3 4 5 6
//    1 2 3 4 5 6 7
//    1 2 3 4 5 6 7 8

for (let i = 1; i < 10; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j;
  }
  line += "\n";
  document.write(line);
  console.log(line);
}
