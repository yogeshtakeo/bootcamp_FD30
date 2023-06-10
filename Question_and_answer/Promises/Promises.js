// do we have to every time do a handling of the promises on fetch?

const errorURL = `https://https://jsonplaceholder.typicode.com/todos/1`;
const correctURL = `https://jsonplaceholder.typicode.com/todos/1`;

// let data = fetch(correctURL);

// // Handling by .then
// data
//   .then((httpReponse) => {
//     return httpReponse.json();
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error.stack);
//   });

// console.log(data);

// Handling by async / await

const fetchData = async () => {
  try {
    let httpReponse = await fetch(errorURL);
    response = await httpReponse.json();
    console.log(response);
  } catch (error) {
    console.log(error.stack);
  }
};

fetchData();
