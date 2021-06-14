"use strict";

console.log("start"); //1

setTimeout(() => {
  console.log("timer");//7
}, 0);

const p1 = new Promise((resolve, reject) => {
  console.log("create prom"); //2
  resolve();
  reject();
  console.log("prom created"); //3
});

p1.then(() => {
  console.log("prom cb body"); //5
})
  .catch(() => {
    console.log("catch body");//5 если ошибка
  })
  .finally(() => {
    console.log("fin");//6
  });

console.log("end"); //4
