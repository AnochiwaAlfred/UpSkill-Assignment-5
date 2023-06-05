// PROBLEM 1
// Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahToCel1(){
    let fah=eval(document.getElementById("f-value").value);
    let celValue=((fah-32)*5)/9;
    document.getElementById("c-value").value = celValue;
}

function clearTemp1(){
    document.getElementById("c-value").value = 0;
    document.getElementById("f-value").value = 0;
    console.clear()
}




// PROBLEM 2
// Create a function that will calculate the average of numbers in an array.


function arrayAverage2(){
    let array = JSON.parse(document.getElementById("array-entry-1").value)
    let sum = 0;
    for (let i=0; i<array.length; i++){
        sum+=array[i]
    }
    document.getElementById("result-2").value = sum/array.length;
}

function clearArray2(){
    document.getElementById("array-entry-1").value = ''
    document.getElementById("result-2").value = 0
    console.clear()
}




// PROBLEM 3
// Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.



function checkDivisibility3(){
    let n = document.getElementById("problem4-value-n").value
    let x = document.getElementById("problem4-value-x").value
    let y = document.getElementById("problem4-value-y").value
    var check;
    if (n%x==0 & n%y==0){
        check=true
    }else{
        check=false
    }
    document.getElementById("result-3").value = check
}

function clearCheck3(){
    document.getElementById("problem4-value-n").value = 0
    document.getElementById("problem4-value-x").value = 0
    document.getElementById("problem4-value-y").value = 0
    document.getElementById("result-3").value = ''
    console.clear()
}




// PROBLEM 4
// Create a function that will output the first 100 prime numbers.




function getPrimeNumbers4(){
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

    
    document.getElementById('prime-results-4').innerHTML=numbers

} 



function clearPrime4(){
    document.getElementById('prime-results-4').innerHTML='[ ]'
    console.clear()
}





// PROBLEM 5
// Create a function that will return a boolean specifying if a number is a prime number.


function checkPrime5(){
    input = document.getElementById("prime-entry-5").value

    let isPrime=true;
    for(let j=2; j<input; j++){
        if(input%j===0){
            isPrime&=false
            break
        }
    }
    if(isPrime){
    document.getElementById("result-5").value = true
    }else{
        document.getElementById("result-5").value = false
    }
    i++;
}

function clearPrime5(){
    document.getElementById("prime-entry-5").value = 0
    document.getElementById("result-5").value = ''
    console.clear()
}


// PROBLEM 6
// Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers


function filterArray6(){
    input = JSON.parse(document.getElementById("array-entry-6").value)
    array = []
    for (let i=0; i<input.length; i++){
        num = input[i]
        if(typeof num == 'number' & num>=0){
            array.push(num)
        }
    }
    document.getElementById("array-results-6").innerHTML = array
}


function clearArray6(){
    document.getElementById("array-entry-6").value = ''
    document.getElementById("array-results-6").innerHTML = '[ ]'
    console.clear()
}


// PROBLEM 7
//  Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

function fizzBuzz7(){
    clearFizzBuzz7()
    array = []
    count = 1
    while(count<101){
        if(count%3===0 && count%5===0){
            array.push('FizzBuzz')
        }else if(count%3==0){
            array.push('Fizz')
        }else if (count%5==0){
            array.push('Buzz')
        }else{
            array.push(count)
        }
        count++
    }
    ul =  document.getElementById("fizz-buzz-display")
    for(let i =0; i<array.length; i++){
        const childElement = document.createElement("li");
        childElement.textContent = array[i]
        ul.appendChild(childElement)
    }
}


function clearFizzBuzz7(){
    document.getElementById("fizz-buzz-display").innerHTML = ''
    console.clear()
}



// PROBLEM 8
// The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria;
// It must start with a hash symbol, #.
// Ignore all spaces in the input.
// All words must have their first letter capitalized.
// If the final result is going to be longer than 140 characters, it should return false.
// If the input or result is an empty string, it should return false.


function toTitleCase(str) { //Copied
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  }  


function hasher8(){
    let hashIn = document.getElementById("hash-in").value
    if(hashIn===''){
        document.getElementById("hash-out").value = false
    }else{
        let hashArray = hashIn.split(" ")
        var hashArray2 = ['#']
        for(let i=0; i<hashArray.length; i++){
            word = toTitleCase(hashArray[i])
            hashArray2.push(word)
        }
        new_string=hashArray2.join("")
        if(new_string.length>140){ 
            document.getElementById("hash-out").value = false
        }else{
            document.getElementById("hash-out").value = hashArray2.join("")
        }
    }
}



function clearHash8(){
    document.getElementById("hash-in").value = ''
    document.getElementById("hash-out").value = ''
    console.clear()
}