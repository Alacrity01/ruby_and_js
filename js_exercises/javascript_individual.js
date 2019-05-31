 // Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

 function everyOtherString(array_of_strings) {
  var new_array = [];
  for(var i = 0; i < array_of_strings.length; i += 2) {
    new_array.push(array_of_strings[i]);
  }
  return new_array;
 }
 console.log(everyOtherString(["a", "b", "c", "d", "e", "f"]));

 // # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

function greatestNumber(array_of_numbers) {
  var max = array_of_numbers[0];
  for (var i = 0; i < array_of_numbers.length; i++) {
    if (array_of_numbers[i] > max) {
      max = array_of_numbers[i];
    }
  }
  return max
}
console.log(greatestNumber([5, 4, 8, 1, 2]));

function max(numbers) {
  var currentMax = numbers[0];
  numbers.forEach(function(number) {
    if (number > currentMax) {
      currentMax = number;
    }
  })
  return currentMax
}
console.log(max([5, 4, 8, 1, 2]))

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(number) {
  var product = number;
  while (number > 1) {
    number--;
    product *= number;
  }
  return product
}
console.log(factorial(5));

function factorialAlternative(number) {
  var product = 1;
  var currentNumber = number;
  for(var i = 0; i < number; i++){
    product *= currentNumber;
    currentNumber--;
  }
  return product;
}
console.log(factorialAlternative(5));

function factorialRecursion(number, product=1) {
  if (number === 1)
    return product;
  
  product *= number
  number--;

  return factorialRecursion(number, product);
}
console.log(factorialRecursion(5));

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

function descend(ascendingNumbers) {
  var descendingNumbers = [];
  for (i = ascendingNumbers.length - 1; i >= 0; i--) {
    descendingNumbers.push(ascendingNumbers[i]);
  }
  return descendingNumbers
}
console.log(descend([5, 4, 8, 1, 2]))

// ```# Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].```

function sumCombinations(numbers1, numbers2) {
  var sums = [];
  var i = 0;
  while (i < numbers1.length) {
    for(j = 0; j < numbers1.length; j++) {
      sums.push(numbers1[i] + numbers2[j]);
    }
    i++;
  }
  return sums;
}
console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));

function sumCombinationsWithForEachLoop(numbers1, numbers2) {
  var sums = [];

  numbers1.forEach(function(number1) {
    numbers2.forEach(function(number2) {
      sums.push(number1 + number2);
    });
  });
  return sums;
}
console.log(sumCombinationsWithForEachLoop([1, 5, 10], [100, 500, 1000]));


