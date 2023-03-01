// // fetch("https://jsonplaceholder.typicode.com/todos/1")
// //   .then((response) => response.json())
// //   .then((data) => console.log(data));

// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((Data) => console.log(Data));
// }

function loadData2() {
  fetch("https://jsonplaceholder.typicode.com/users/2") //load this url in JSON placeholder site with users
    .then((response) => response.json())
    .then((Data) => Addbutton(Data));
}

function Addbutton(Data) {
  console.log(Data);
}
