Q1. What will be the output?
● A. null, number, array
● B. object, number, object
● C. object, NaN, array
● D. undefined, number, object
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof []);
answer:B

Q2. Predict the output.
● A. 205, 200, 24
● B. 205, 200, NaN
● C. NaN, 200, NaN
● D. 2203, 403203, 24
console.log(2 + "203");
console.log(403 - "203");
console.log(2 * "12abc");
answer:None of the above. The output should be 2203, 200, NaN

Q3. Which statement about let, const, and var is correct?
● A. var is block-scoped.
● B. let can be redeclared in the same scope without error.
● C. A const object cannot have its properties modified.
● D. let and const are block-scoped, while var is function-scoped.
answer:D

Q4. What is the output?
● A. Pass, Eligible
● B. Pass, followed by a ReferenceError
● C. ReferenceError, ReferenceError
● D. undefined, undefined
let score = 12;
if (score > 10) {
var result = "Pass";
let status = "Eligible";
}
console.log(result);
console.log(status);
answer:B

Q5. Which loop is most suitable when you need to iterate over the values of an array?
● A. for...in
● B. for...of
● C. if...else
● D. switch
answer:B

Q6. What is the main difference between return and console.log() inside a function?
● A. Both return values to the caller.
● B. console.log() returns the calculated result.
● C. return sends a value back to the caller; console.log() displays a value.
● D. return can only be used in arrow functions.
answer:C

Q7. What does the rest parameter do in this function?
● A. Converts all arguments into a string.
● B. Collects the arguments into an array.
● C. Expands an existing array into arguments.
● D. Allows only one argument.
function calculateTotal(...prices) {
return prices.length;
}
answer:B

Q8. Which statement about arrow functions and “this” is correct?
● A. Arrow functions always bind this to the object that calls them.
● B. Regular functions always bind this to the object in which they are defined.
● C. Arrow functions inherit this from their surrounding lexical context.
● D. Arrow functions cannot access object properties.
answer:C

Q9. Operators and type coercion
Predict the output of each statement and explain why the results differ.
console.log("5" + 2); 52(concatenates the string and number)
console.log("5" - 2); 3(perforns normal substraction)
console.log(true + 2); 3(in numeric operations boolean gives 1 for true and 0 for false)
console.log(Boolean("false")); true(because Boolean does not check the value passed inside it, it sees a string which is not empty and gives true)

Q10. Scope and variable declarations
Write the output in order. Explain why amount and discount behave differently.
var amount = 100;
function calculate() {
var amount = 200;
let discount = 20;
if (true) {
var amount = 300;
let discount = 50;
console.log(amount, discount); 300 50
}
console.log(amount, discount); 300 20
}
calculate();
console.log(amount); 100

Q11. Functions and return values
What will be printed? Rewrite the function so that result stores the calculated price.
function calculatePrice(price, quantity) {
console.log(price * quantity); 300
}
const result = calculatePrice(100, 3);
console.log(result); undefined
instead of console.log inside the calculatePrice function we need to return the value of price*quantity

Q12. Array mutation
Predict the output. Why are modifications to the array allowed even though it was declared using const?
const products = ["Milk", "Bread", "Rice"];
products[1] = "Eggs";
products.push("Oil");
console.log(products); ['Milk', 'Eggs', 'Rice', 'Oil']
console.log(products.length); 4

Q13. Object methods and this
Predict the output. What does this refer to during this method call?
const employee = {
name: "Aman",
salary: 30000,
showDetails() {
console.log(this.name, this.salary);
}
};
employee.showDetails(); Aman 3000

Q14. Rest parameters and spread syntax
Predict both outputs and explain the difference between the two function calls.
function addNumbers(...numbers) {
return numbers.length;
}
const values = [10, 20, 30, 40];
console.log(addNumbers(values)); 1
console.log(addNumbers(...values)); 4

Q15. Fix the variable scope issue
The developer wants to print the message after the if block, but the code produces an error. Identify the error,
correct the code, and explain why the original code fails.
if (true) {
let message = "Order placed successfully";
}
console.log(message); ReferenceError

Q16. Fix the shopping cart calculation
Identify the logical error, correct the loop, and explain why the original code produces an incorrect result.
function calculateCartTotal(...prices) {
let total = 0;
for (let i = 0; i <= prices.length; i++) {
total += prices[i];
}
return total;
}
console.log(calculateCartTotal(100, 200, 300)); NaN
loop accesses index not present in the array. Instead of i<=prices.length, it should be i<prices.length

Q17. Fix the object method
Explain why the expected username may not be printed. Rewrite the method correctly and state one situation
where using an arrow function is appropriate.
const user = {
userName: "Rahul",
showName: () => {
console.log(this.userName);
}
};
user.showName();

Q .18 Type Coercion — Predict the Output
console.log([] + []);
console.log([] + {}); [object Object]
console.log("5" - - "2"); 7(5-(-2))
console.log(null + 1); 1(null converts to 0 in numeric operations)
Predict the output of each statement and explain why.

Q19. Scope and Hoisting
console.log(a); undefined
var a = 10;

console.log(b); ReferenceError

let b = 20;
● Which statement executes successfully? console.log(a);
● Which statement produces an error? console.log(b);
● Explain the role of hoisting and the Temporal Dead Zone (TDZ). 
Hoisting is JavaScript's behavior of processing declarations before executing the code in their scope.
The TDZ is the period between entering a variable's scope and the point where its declaration is initialized.

JavaScript Interview-Level Questions
1. What is the difference between == and ===?
== checks equality after allowing type conversion.
=== checks equality without converting the types.

2. What is the difference between undefined and null?
undefined means a value has not been assigned or is unavailable.
null means the absence of a value has been explicitly represented.

3. What is the difference between for...in and for...of?
for...in iterates over keys or property names.
for...of iterates over values.

4. Can a function return another function? Give a real-world use case.
Yes, a function can return another function in JavaScript.
function createDiscount(percent) {
    return function(price) {
        return price - (price * percent / 100);
    };
}

const studentDiscount = createDiscount(10);

console.log(studentDiscount(1000));

5. What happens if a function has no explicit return statement?
In JavaScript, if a function has no explicit return statement, it returns undefined by default.

6. What is the difference between passing a primitive value and passing an object to a function?
The main difference is that changing a primitive parameter does not change the original variable, but modifying an object's properties inside a function can affect the original object.

7. What is the difference between shallow copying and deep copying an object?
Shallow copy: Copies the outer object, but nested objects are still shared.
Deep copy: Copies the outer object and nested objects separately, so changes to the copy don't affect the original.

8. Why is NaN !== NaN true?
In JavaScript, NaN !== NaN is true because NaN is not equal to any value, including itself.

9. What is the difference between function declarations and function expressions regarding
hoisting?
The main difference is that function declarations are fully hoisted, while function expressions are not available until the assignment is executed.

10. When would you use an arrow function instead of a regular function?
Use an arrow function when you want shorter syntax or when you want this to come from the surrounding scope. Use a regular function when you need its own this, such as in many object methods.
