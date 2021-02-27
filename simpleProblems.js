// const isPalindrome = string => {
//     string = string.toLowerCase();
//     console.log(string === string.split("").reverse().join(""));
// };

// console.log("Wieniec".split(""));
// console.log("Wieniec".split("").reverse());
// isPalindrome("Wieniec");
// isPalindrome("Kajak");

// // Fibonacci 1
// const fibonacci = number => {
//     const result = [0, 1]

//     for (let i = 2; i <= number; i++) {
//         const previousNumber1 = result[i - 1];
//         const previousNumber2 = result[i - 2];
//         result.push(previousNumber1 + previousNumber2);
//     };
    
//     console.log(result[number]);
// };
// fibonacci(9);

// // Fibonacci 2 - Recursive
// const fibonacciRecursive = number => {
//     if (number < 2) {
//         return number;
//     };
//     return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
// };
// console.log(fibonacciRecursive(9));

const fizzBuzz = num => {
    for(let i = 1; i <= num; i++) {
        // check if the number is a multiple of 3 and 5
        if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
        } // check if the number is a multiple of 3
        else if(i % 3 === 0) {
        console.log('fizz')
        } // check if the number is a multiple of 5
        else if(i % 5 === 0) {
        console.log('buzz')
        } else {
        console.log(i)
        }
    }
}

fizzBuzz(15)