// ### Q1. Create a function that returns the sum of two numbers.
// add(10, 20);
// function accept 2 value and return there sum.
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// ### Q2. Create a function that returns the square of a number.
// square(5);
// this function accept 1 value and return there square.
function square(a) {
    return a * a;
}
console.log(square(5));

// ### Q3. Create a function that checks whether a number is Even or Odd.
// checkEvenOdd(7);
// this function accept 1 number and return "Even" or "Odd".
function checkEvenOdd(num) {
    if (num % 2 === 0) return "Even";
    return "Odd"
}
console.log(checkEvenOdd(2));

// ### Q4. Create a function that returns the larger number among two numbers.
// max(10, 20);
// this function accept 2 numbers and return the larger number.
function max(a, b) {
    if (a > b) return a;
    return b;
}
console.log(max(10, 20));

// ### Q5. Create a function that checks if a person is eligible to vote.
// isEligible(18);
// this function accept age and return vote eligibility.
function isEligible(num) {
    if (num >= 18) return "Eligible For Vote";
    return "Not Eligible For Vote";
}
console.log(isEligible(20));

// # Part 2: Loops

// ### Q6. Print numbers from 1 to 50 using a loop.
// this loop prints numbers from 1 to 50.
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

// ### Q7. Print all even numbers between 1 and 100.
// this loop prints all even numbers between 1 and 100.
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ### Q8. Find the sum of numbers from 1 to 100.
// Output: 5050
// this loop calculates and prints the sum of numbers from 1 to 100.
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log(total);

// ### Q9. Print the multiplication table of a number.
// Example:
// table(5);
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 10 = 50
// this loop prints the multiplication table of 5.
function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${i * num}`);
    }
}
table(5);

// ### Q10. Count how many digits are present in a number.
// Example: countDigits(12345);
// this function accept a number and return total digits.
function countDigits(num) {
    if (num === 0) {
        return 1;
    }
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
console.log(countDigits(12345));

// # Part 3: Strings

// ### Q11. Reverse a string.
// reverseString("hello");
// this function accept a string and return the reversed string.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Sir"));

// ### Q12. Count vowels in a string.
// countVowels("javascript");
// this function accept a string and return the total number of vowels.
function countVowels(str) {
    let countVow = 0;
    for (let i = 0; i < str.length; i++) {
        // if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        //     countVow++;
        // }
        if (/[aeiou]/.test(str[i])) {
            countVow++
        }
    }
    return countVow;
}
console.log(countVowels("javascript"));

// ### Q13. Check whether a string is a palindrome.
// isPalindrome("madam");
// this function accept a string and return true if palindrome otherwise false.
function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("Sir"));

// ### Q14. Convert the first letter of every word to uppercase.
// capitalize("hello world");
// this function accept a string and capitalize the first letter of every word.
function capitalize(str) {
    let result = []
    let a = str.split(" ");
    for (let value of a) {
        if (value === "") {
            result.push("");
        } else {
            result.push(value[0].toUpperCase() + value.slice(1));
        }
    }
    return result.join(" ");
}
console.log(capitalize("hello world"));

// ### Q15. Count how many times a character appears in a string.
// countChar("javascript", "a");
// this function accept a string and a character then return the character count.
function countChar(str, char) {
    let countC = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            countC++;
        }
    }
    return countC;

}
console.log(countChar("javascript", "a"));

// # Part 4: Arrays

// ### Q16. Find the largest number in an array.
// [10, 20, 30, 40, 50]
// this function accept an array and return the largest number.
function largest(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}
let arr = [2, 3, 4, 5, 90, 100, 50];
console.log(largest(arr));

// ### Q17. Find the smallest number in an array.
// this function accept an array and return the smallest number.
let arrSm = [10, 20, 30, 40, 50]
function smallest(arr) {
    let smallNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallNum) {
            smallNum = arr[i];
        }
    }
    return smallNum;
}
console.log(smallest(arrSm));

// ### Q18. Find the sum of all array elements.
// this function accept an array and return the sum of all elements.
let arrayS = [1, 2, 3, 4, 5];
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(arraySum(arrayS));

// ### Q19. Return only even numbers from an array.
// this function accept an array and return only even numbers.
let arrayE = [1, 2, 3, 4, 5, 6];
function arrayEven(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    return even;
}
console.log(arrayEven(arrayE));

// ### Q20. Remove duplicate values from an array.
// this function accept an array and return a new array without duplicate values.
let duplicate = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicate(arr) {
    let original = {};
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in original)) {
            original[arr[i]] = arr[i]
        }
    }
    return Object.values(original);
}
console.log(removeDuplicate(duplicate));

// ### 🎯 Bonus Task (For Fast Learners)
// Build a **Student Marks Calculator**.
// this function accept an array of student marks and return highest, lowest, average and total marks.
let studentMarks = [50, 60, 70, 80, 90];
function classRoomResult(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "No marks available";
    }

    let highestMarks = arr[0];
    let lowestMarks = arr[0];
    let averageMarks = 0;
    let totalMarks = 0;
    for (let i = 0; i < arr.length; i++) {
        if (highestMarks < arr[i]) {
            highestMarks = arr[i];
        }
        if (lowestMarks > arr[i]) {
            lowestMarks = arr[i];
        }
        totalMarks += arr[i];
    }
    return `Highest Marks: ${highestMarks}
Lowest Marks: ${lowestMarks}
Average Marks: ${totalMarks / arr.length}
Total Marks: ${totalMarks}`
}
console.log("------ Class Result ------");
console.log(classRoomResult(studentMarks));