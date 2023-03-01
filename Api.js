// // fetch("https://jsonplaceholder.typicode.com/todos/1")
// //   .then((response) => response.json())
// //   .then((data) => console.log(data));

// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((Data) => console.log(Data));
// }

function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((DataArray) => AddData(DataArray));
}

function AddData(DataArray) {
  const ul = document.getElementById("user-list");
  for (const User of DataArray) {
    const nameuser = User.username;
    const li = document.createElement("li");
    li.innerText = nameuser;
    ul.appendChild(li);
  }
}
