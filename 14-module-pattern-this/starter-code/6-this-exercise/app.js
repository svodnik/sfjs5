/*

1. Predict the results of the code below, but without running it in the browser.
  - What is logged by the first console.log statement? Why?
  - What is logged by the second console.log statement? Why?

2. Run the code, check the results against your predictions. If the results were different, explain why.

3. Write a new statement that calls the `test()` function and returns `Aurelio De Rosa`.
__Hint__: You need to manipulate the context in which you're calling the `test()` function.

*/

var fullName = 'John Doe';
var obj = {
   fullName: 'Colin Ihrig',
   prop: {
      fullName: 'Aurelio De Rosa',
      getFullName: function() {
         return this.fullName;
      }
   }
};

console.log(obj.prop.getFullName());

var test = obj.prop.getFullName;

console.log(test());


