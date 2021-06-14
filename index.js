"use strict";

const number = 42;

const numberPromise = Promise.resolve(number);
function handlePromise(promise) {
  return promise.then((data) => {
    console.log("Data is:", data);
  });
}
handlePromise(numberPromise);
