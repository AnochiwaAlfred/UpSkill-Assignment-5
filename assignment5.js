// PROBLEM 1
// Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahToCel(fahValue){
    let celValue=((fahValue-32)*5)/9;
    console.log(celValue)
}
// fahToCel(220)
// fahToCel(-23)




// PROBLEM 2
// Create a function that will calculate the average of numbers in an array.

function arrayAverage(input){
    let array = JSON.parse(input)
    let sum = 0;
    for (let i=0; i<array.length; i++){
        sum+=array[i]
    }
    average = sum/array.length;
    console.log(average)
}
// arrayAverage('[1,4,6,34,81,23,43]')




// PROBLEM 3
// Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
function checkDivisibility(n,x,y){
    var check;
    if (n%x==0 & n%y==0){
        check=true
    }else{
        check=false
    }
    console.log(check)
}
// checkDivisibility(20,2,3)
// checkDivisibility(270,2,3)




// PROBLEM 4
// Create a function that will output the first 100 prime numbers.

function getPrimeNumbers(){
    const numbers = [2]
    let i=3
    while(numbers.length<100){
        let isPrime=true;
        for(let j=2; j<i; j++){
            if(i%j===0){
                isPrime&=false
                break
            }
        }
        if(isPrime){
            numbers.push(i)
        }
        i++;
    }
    console.log(numbers)
}
// getPrimeNumbers()




// PROBLEM 5
// Create a function that will return a boolean specifying if a number is a prime number.

function checkPrime(input){
    let isPrime=true
    for(let j=2; j<input; j++){
        if(input%j===0){
            isPrime=false
            break
        }
    }
    console.log(isPrime)
}
// checkPrime(23)
// checkPrime(27)
// checkPrime(1215)




// PROBLEM 6
// Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers

function filterArray(input1){
    input = JSON.parse(input1);
    array = [] ;
    for(let i=0; i<input.length; i++){
        num = input[i]
        if (num>=0){
            array.push(num)
        }
    }
    console.log(array)
}
// filterArray('[34, -98, -90,56]')




// PROBLEM 7
//  Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

function fizzBuzz(){
    for(let count=1; count<=100; count++){
        if(count%3===0 && count%5===0){
            console.log('FizzBuzz')
        }else if(count%3===0){
            console.log('Fizz')
        }else if(count%5===0){
            console.log('Buzz')
        }else{
            console.log(count)
        }
    }
}
// fizzBuzz()




// PROBLEM 8
// The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria;
// It must start with a hash symbol, #.
// Ignore all spaces in the input.
// All words must have their first letter capitalized
// If the final result is going to be longer than 140 characters, it should return false.
// If the input or result is an empty string, it should return false.


function hashTagGenerator(hashIn){
    if(hashIn===''){
        console.log(false)
    }else{
        array = hashIn.split(" ")
        array2 = ['#']
        for(let i=0; i<array.length; i++){
            word = toTitleCase(array[i])
            array2.push(word)
        }
        new_string=array2.join("")
        if(new_string.length>140){  // check how to get length of string
            console.log(false)
        }else{
            console.log(new_string)
        }
    }
}


function toTitleCase(str) { //Copied
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
}

// hashTagGenerator('obi will soon enter');
// hashTagGenerator('popular hash tAgs On twitteR');
