// function resolveATaskin2Seconds() {
//   return setTimeout(() => {
//     console.log("Response 1");
//   }, 2000);
// }

// const promiseResolved = new Promise((r, d) => {
//   r("Hello this is the reponse");
// });

// const promiseRejected = new Promise((resolve, reject) => {
//   reject("This is rejected Promise");
// });

// promiseResolved
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log("THis is an error", error);
//   });

// promiseRejected
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log("THis is an error", error);
//   });

const fetchingTheData = fetch("https://jsonplaceholder.typicode.com/todos/1");

console.log(fetchingTheData);

fetchingTheData
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log("this is an error ", error);
  });
