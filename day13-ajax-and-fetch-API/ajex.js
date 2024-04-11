const btn = document.querySelector(".btn");
const users = document.getElementById("users");

btn.addEventListener("click", getUsers);

function getUsers(e) {
  e.preventDefault();

  const http = new XMLHttpRequest();

  http.open("GET", "users.json", true);

  http.onload = function () {
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);
      let output = "";
      users.forEach((user) => {
        output += `
      <div>
       <p><b>ID:</b> ${user.id}</p>
       <p><b>NAME:</b> ${user.name}</p>
       <p><b>AGE:</b> ${user.age}</p>
       <p><b>EMAIL:</b> ${user.email}</p>
      </div>
      `;
      });

      users.innerHTML = output;
    }
  };

  http.send();
}
