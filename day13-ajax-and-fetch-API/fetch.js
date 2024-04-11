const btn = document.querySelector(".btn");
const users = document.getElementById("users");

btn.addEventListener("click", getUsers);

function getUsers(e) {
 e.preventDefault();
 fetch("users.json").then((response) => response.json()).then((data) => {
  let output = "";
  data.forEach(user => {
    output += `<div>
       <p><b>ID:</b> ${user.id}</p>
       <p><b>NAME:</b> ${user.name}</p>
       <p><b>AGE:</b> ${user.age}</p>
       <p><b>EMAIL:</b> ${user.email}</p>
      </div>`;
  });

  users.innerHTML = output;
 })
}
