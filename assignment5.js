// PROBLEM 1
// Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahToCel(fahValue){
    let celValue=((fahValue-32)*5)/9;
        return celValue
}
// console.log(fahToCel(90)) // 32.22222222222222
// console.log(fahToCel(-23)) // -30.555555555555557




// PROBLEM 2
// Create a function that will calculate the average of numbers in an array.

function arrayAverage(input){
    let array = JSON.parse(input)
    let sum = 0;
    for (let i=0; i<array.length; i++){
        sum+=array[i]
    }
    average = sum/array.length;
    return average
}
// console.log(arrayAverage('[1,2,3,4,5,6,7,8,9,10]')) // 5.5
// console.log(arrayAverage('[1,4,6,34,81,23,43]')) // 27.428571428571427




// PROBLEM 3
// Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
function checkDivisibility(n,x,y){
    var check;
    if (typeof n !== 'number' || typeof x !== 'number' || typeof y !== 'number') {
        return {'Error':'All parameters must be numbers.'}
    }else if (n%x==0 & n%y==0){
        check=true
        return `${check}, ${n} is divisible by both ${x} and ${y}`
    }else{
        check=false
        return `${check}, ${n} is not divisible by ${x} and ${y}`
    }
}
// console.log(checkDivisibility(20,2,'3'))  // { Error: 'All parameters must be numbers.' }
// console.log(checkDivisibility(20,2,3)) // false, 20 is not divisible by 2 and 3
// console.log(checkDivisibility(270,2,3)) // true, 270 is divisible by both 2 and 3




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
    return isPrime
}
// console.log(checkPrime(23))  // true 
// console.log(checkPrime(27))  // false
// console.log(checkPrime(1215))  // false




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
    return array
}
// console.log(filterArray('[34, -98, -90,56]'))  // [ 34, 56 ]
// console.log(filterArray('[20, 6, -19, 900, -98, 45, -90,    56]'))  // [ 20, 6, 900, 45, 56 ]




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
        return false
    }else{
        array = hashIn.split(" ")
        array2 = ['#']
        for(let i=0; i<array.length; i++){
            word = toTitleCase(array[i])
            array2.push(word)
        }
        new_string=array2.join("")
        if(new_string.length>140){  // check how to get length of string
            return false
        }else{
            return new_string
        }
    }
}


function toTitleCase(str) { //Copied
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
}

// console.log(hashTagGenerator('obi will soon enter'))  //  #ObiWillSoonEnter
// console.log(hashTagGenerator('popular hash tAgs On twitteR'))  //  #PopularHashTagsOnTwitter
// TEST THE CONDITIONS
// console.log(hashTagGenerator(''))  // false
// console.log(hashTagGenerator(' The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria'))  // false
