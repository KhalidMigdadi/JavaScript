/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(job, location, partnerName, children) {
  document.write(
    '"You will be a ' +
      job +
      " in " +
      location +
      ", and married to " +
      partnerName +
      " with " +
      children +
      ' kids ."'
  );
}

tellFortune("software engineer", "Jordan", "Alice", 3);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Yuor doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(puppyAge) {
  return puppyAge * 7;
}

document.write(
  "Your doggie is " + calculateDogAge(1) + " years old in dog years!"
);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amoutPerDay) {
  let remainAge = 100 - age;
  let days = remainAge * 365;

  let result = days * amoutPerDay;

  return result;
}

document.write(
  "You will need " +
    calculateSupply(30, 3) +
    " cups of tea to last you until the ripe old age of 100"
);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {
  return "Hello " + name;
}

document.write(greet("Khalid"));

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

Sol : we didint call the parameter cat in the function so instead of x put cat 

function double(7) {
  return 2 * 7;
}

sol : we cant sent parameter as number but it must be variable

function double('7') {
    return 2 * 'x';
}

sol : we cant sent parameter as string but it must be variable
    
    
*/

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

sol : 

function double1(x) {
    return 2 * x ;
}

========================

functiondouble2 x)
return 2 * x;
}

sol : 

function double2 (x){
    return 2 * x;
}

========================



function (x) double3 {
  return 2 * x;


sol : 

function double3 (x) {
  return 2 * x;
}

*/

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(number) {
  // return pow(x, 3)
  return number * number * number;
}

cube(4);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1, num2) {
  return num1 * num2;
}

multiply(3, 4);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(yourAge) {
  if (yourAge >= 20) return "yes you can";
  else return "please come back after X years to get one";
}

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(string1, string2) {
  if (string1.length == string2.length) 
    return true;
  else 
    return false;
}

console.log(sameLength("tree", "car"));

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/


function largerNubmer(number1, number2) {
  if (number1 > number2) return number1;
  else return number2;
}

console.log(largerNubmer(5, 6));
 

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/


function smallerNubmer(numberOne, numberTwo, numberThree) {
    if (numberOne <= numberTwo && numberOne <= numberThree)
        return numberOne;
    else if (numberTwo <= numberOne && numberTwo <= numberThree )
        return numberTwo
    else if (numberThree <= numberOne && numberThree <= numberTwo)
        return numberThree
    else
        return "Enter A Valid Numbers"
}

console.log(smallerNubmer(5,3,3));


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/



function shorterString(str1, str2, str3, str4, str5) {
    if (str1.length <= str2.length && str1.length <= str3.length && str1.length <= str4.length && str1.length <= str5.length)
        return str1;
    else if (str2.length <= str3.length && str2.length <= str4.length && str2.length <= str5.length)
        return str2;
    else if (str3.length <= str4.length && str3.length <= str5.length)
        return str3;
    else if (str4.length <= str5.length)
        return str4;
    else 
        return str5;
}

console.log(shorterString("by","tr","car","air","github"));



/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/


function longerString(word1, word2, word3, word4) {
    if (word1.length >= word2.length && word1.length >= word3.length && word1.length >= word4.length)
        return word1;
    else if (word2.length >= word3.length && word2.length >= word4.length)
        return word2;
    else if (word3.length >= word4.length)
        return word3;
    else 
        return word4;
}


console.log(longerString("air","schoo","car","github"));




/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/


function isEven(numberEin) {
    if (numberEin % 2 == 0)
        return true;
    else
        return false;
}

console.log(isEven(2));



/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(numberee) {
    if (numberee % 2 != 0)
        return true;
    else
        return false;
}

console.log(isOdd(4));


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(pNumber) {
    if (pNumber <= 0)
        return pNumber * -1;
    else
        return pNumber;
}

console.log(positive(-4));


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName, lastName) {
    return firstName + " " + lastName
}

console.log(fullName("Adam","McCallen"));


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(n1, n2, n3, n4, n5) {
    let avg = (n1 + n2 + n3 + n4 + n5) / 5
    return avg;
}

console.log(average(5,7,9,3,5));


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/


function randomNumber() {
    return Math.random() * 1
}

console.log(randomNumber());


/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(nom1, nom2) {
    return (Math.random() * nom2) + nom1
}

console.log(randomBetweenNumbers(3,100));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(onePara) {
    if (onePara >= 95 && onePara < 100)
        return "A";
    else if (94 > onePara && onePara >= 85)
        return "B"
    else if (84 > onePara && onePara >= 70)
        return "C"
    else if (69 > onePara && onePara >= 50)
        return "D"
    else if (49 > onePara && onePara >= 0)
        return "F"
    else
        return "Enter Number Between 0 and 100"
    
}

console.log(scoreInUniversty(71));



/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/


let counterIncrement = 0
function counter() {
    counterIncrement += 1;
    return counterIncrement;
  }

  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
  


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/


let counterDecremetn = counter()
function resetCounter() {
    counterDecremetn -= 1;
    return counterDecremetn;
  }

  console.log(resetCounter());
  console.log(resetCounter());
  console.log(resetCounter());
  console.log(resetCounter());
  console.log(resetCounter());
  
