# ES6: Prevent Object Mutation

As seen in previous challenge, `const` declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function `Object.freeze` to prevent data mutation.

Once the object is freezed, you can no longer add/update/delete properties from it. Any attempt at changing the object will be rejected without any error.

    let obj = {
    name:"FreeCodeCamp"
    review:"Awesome"
    };
    Object.freeze(obj);
    obj.review = "bad"; //will be ignored. Mutation not allowed
    obj.newProp = "Test"; // will be ignored. Mutation not allowed
    console.log(obj); 
    // { name: "FreeCodeCamp", review:"Awesome"}


## Task:

In this challenge you are going to use `Object.freeze` to prevent mathematical constants from changing. You need to freeze `MATH_CONSTANTS` object so that noone is able alter the value of `PI` or add any more properties to it.

## Test:

* Do not replace `const` keyword.
* `MATH_CONSTANTS` is declared with const.
* Do not change original `MATH_CONSTANTS`.
* `MATH_CONSTANTS.PI` should be equal to `3.14`.