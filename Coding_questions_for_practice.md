# Coding Practice Tips and Questions

You must have come across what to practice and what not when you are starting your coding career. I will be always working on this to improvement of this page by adding different types of questions.   <br />  <br />
This document covers various coding challenges and tips to improve your problem-solving skills in JavaScript. Each section focuses on a different category of questions, ranging from array manipulation to basic algorithms and data structures.

"[Get solution here](Coding_question_and_solution.md)" 

## 1. Array and Object Manipulation

### Merging Objects and Mapping Through Arrays

- **Merge Two Objects**  
  Write a function that takes two objects and returns a new object with combined key-value pairs. If the same key exists in both objects, the value from the second object should overwrite the first.

- **Transform Array of Objects**  
  Given an array of objects, return an object where keys are derived from one of the object properties, and values are arrays of objects.  
  **Example**: Convert `[{ id: 1, name: 'A' }, { id: 2, name: 'B' }]` into `{ 1: { name: 'A' }, 2: { name: 'B' } }`.

- **Convert Array of Strings to Object Format**  
  Given an array of strings like `["apple", "banana", "cherry"]`, convert it into an object where each element is a key with a default value.  
  **Example**: `{ "apple": 0, "banana": 0, "cherry": 0 }`.

- **Array Mapping**  
  Write a function to take an array of numbers and return an array of squared values.

- **Group by Property**  
  Given an array of objects, group them by a specified property.  
  **Example**: Group students by age, so `[{name: 'A', age: 20}, {name: 'B', age: 20}, {name: 'C', age: 21}]` becomes `{20: [{name: 'A', age: 20}, {name: 'B', age: 20}], 21: [{name: 'C', age: 21}]}`.

- **Combine Arrays Without Duplicates**  
  Write a function that merges two arrays into one, ensuring there are no duplicate values.  
  **Example**: `mergeArrays([1, 2, 3], [2, 3, 4])` should return `[1, 2, 3, 4]`.

- **Nested Property Access**  
  Write a function to access the value of a deeply nested property in an object using a dot-separated string.  
  **Example**: `getProperty({ a: { b: { c: 5 } } }, 'a.b.c')` should return `5`.
  
- **Deep Clone an Object**  
  Write a function to create a deep copy of a nested object without using JSON methods.

- **Filter Object Keys**  
  Write a function to remove specified keys from an object.  
  **Example**:  
  Input: `{ a: 1, b: 2, c: 3 }, Keys to remove: ['b', 'c']`.  
  Output: `{ a: 1 }`.

- **Calculate Sum of Object Values**  
  Given an object with numeric values, write a function to calculate the sum of all values.  
  **Example**:  
  Input: `{ a: 10, b: 20, c: 30 }`  
  Output: `60`.




## 2. Coding for Problem-Solving and Logic Building

- **Find Duplicates in Array**  
  Write a function to identify duplicates in an array and return them as a new array.

- **Count Frequency of Elements**  
  Given an array, count the frequency of each element and return an object with each element and its count.

- **Longest String in Array**  
  Write a function to find and return the longest string in an array of strings.

- **Count Vowels**  
  Write a function to count the number of vowels in a string.

- **Flatten an Array**  
  Implement a function to flatten a nested array.  
  **Example**: `[1, [2, [3, 4]]]` should return `[1, 2, 3, 4]`.

- **Anagram Checker**  
  Write a function to check if two strings are anagrams of each other.  
  **Example**: `isAnagram('listen', 'silent')` should return `true`.

- **Find Missing Number**  
  Given an array of n-1 numbers in the range 1 to n, find the missing number.  
  **Example**: `[1, 2, 4, 5]` should return `3`.

- **Majority Element**  
  Find the element that appears more than n/2 times in an array. If no such element exists, return null.  
  **Example**: `[3, 3, 4, 2, 3, 3]` should return `3`.

  

## 3. Arrays and Strings: Common Operations

- **Sorting an Array of Numbers**  
  Implement a function to sort an array of numbers in ascending or descending order.

- **Filter Elements Based on Condition**  
  Write a function that takes an array of numbers and returns an array with only even or odd numbers.

- **Reverse a String**  
  Write a function that takes a string and returns the reversed string.

- **Binary Search in Sorted Array**  
  Implement a binary search to find an element in a sorted array. Return the index if found, otherwise return `-1`.

- **Find Maximum and Minimum**  
  Write a function to find the maximum and minimum elements in an array.

- **Unique Characters in a String**  
  Write a function to check if a string has all unique characters.  
  **Example**: `"hello"` should return `false`, while `"world"` should return `true`.

- **Remove Duplicates from Sorted Array**  
  Write a function to remove duplicates from a sorted array in place.  
  **Example**: `[1, 1, 2]` should return `[1, 2]`.

- **Count Palindromic Substrings**  
  Given a string, count all substrings that are palindromes.  
  **Example**: `"aaa"` has 6 palindromic substrings: `"a"`, `"a"`, `"a"`, `"aa"`, `"aa"`, `"aaa"`.


## 4. Basic Algorithms

- **Bubble Sort Implementation**  
  Implement the bubble sort algorithm to sort an array of numbers.

- **Selection Sort**  
  Implement selection sort to arrange an array of numbers in ascending order.

- **Merge Sort**  
  Write a function that sorts an array using the merge sort algorithm.

- **Binary Search**  
  Implement binary search for an element in a sorted array.

- **Factorial with Recursion**  
  Write a recursive function to calculate the factorial of a given number.

## 5. Data Structures

- **Stack Implementation**  
  Implement a stack in JavaScript with `push`, `pop`, and `peek` methods.

- **Queue Implementation**  
  Implement a queue in JavaScript with `enqueue`, `dequeue`, and `peek` methods.

- **Hash Map Basics**  
  Implement a hash map to store key-value pairs with methods like `set`, `get`, and `delete`.

- **Palindrome Checker using Stack**  
  Check if a string is a palindrome by pushing characters to a stack and popping them in reverse order.

- **Balanced Parentheses Checker**  
  Write a function to check if a string has balanced parentheses using a stack.  
  **Example**: `"(())"` should return `true`, while `"(()"` should return `false`.

## 6. Logical and Math Challenges

- **Fibonacci Sequence**  
  Write a function to generate the Fibonacci sequence up to a specified number of terms.

- **Prime Number Checker**  
  Write a function to check if a number is prime.

- **Generate Multiplication Table**  
  Write a function that takes a number and prints its multiplication table up to 10.

- **Find Factors of a Number**  
  Write a function that returns all factors of a given number.

- **Number Patterns**  
  Print number patterns like:  1 12 123 1234

- **Find Greatest Common Divisor (GCD)**  
Implement a function that takes two numbers and returns their GCD using recursion.
