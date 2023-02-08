"use strict";
//------------------------Q-1
// const user = {};
// function setterGenerator(params) {
//   return function (name) {
//     this[params] = name;
//   }.bind(user);
// }

// const nameSetter = setterGenerator("age");
// nameSetter("30");
// console.log(user);
//

//------------------------------Q-2

// const callback = function (params) {
//   params.style.backgroundColor = "red";
// };
// function elemCreator(er, callback) {
//   const params = document.getElementById(er);

//   callback(params);
// }
// elemCreator("elem", callback);
//
//
//
//-------------------------------Q-3
// function counterMaker() {
//   let count = 0;
//   return function (num) {
//     return (count += num);
//   };
// }
// const counter = counterMaker();
// console.log(counter(0));
// console.log(counter(1));
// console.log(counter(0));
// console.log(counter(3));
// console.log(counter(7));
// console.log(counter(-5));
