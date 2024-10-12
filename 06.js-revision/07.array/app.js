// array is for looping
// object is mostly not for looping

const fruits = ["apple", "orange", "mango", "grapes", "banana"];

console.log(fruits.length); // length is a property
console.log(fruits.sort()); // sort is a method
console.log(fruits.at(-1)); // printing last value
console.log(fruits[fruits.length - 1]); // printing last value

const arr = {
  length: 5,
  mySort: function () {
    // sort ki logic
  },
};
console.log(arr.mySort());

console.log(fruits.join());
fruits.push("nehal");
fruits.pop();
fruits.pop();

const a = fruits.toSorted(); // this won't change the original array

console.log(a);

// shift unshift,splice,slice

// don't use shift and unshift
fruits.shift();
fruits.shift();

fruits.unshift("shehzad");

const b = fruits.splice(2, 1, "shehzad");

console.log(b);
console.log(fruits);

const myArr = [3, 1, 1, 3, 100, 6, -200, -1];

myArr.sort(); // sort sorts array in alphabetical order
myArr.sort((a, b) => a - b); // sorting number
myArr.sort((a, b) => b - a); // sorting number

console.log(myArr);

const test = new Set([2, 3, 4]);

test.add("shehzad");
test.add("shehzad");

console.log(test.has("shehzad"));
