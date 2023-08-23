const text = document.querySelector(".model-text"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close"),
  model = document.querySelector(".model"),
  modelContent = document.querySelector(".model-content"),
  input = document.querySelector(".text");

btn.addEventListener("click", openModel);
close.addEventListener("click", closeModel);
input.addEventListener("keydown", (e) => {
  e.key == "Enter" ? openModel() : null;
})


function openModel() {
  let word = input.value.toLowerCase();
  let arr = word.split("");
  let count = 0;
  arr.map((val) => {
    val.match(/([a,e,i,o,u])/) ? count++ : null;
  });
  text.innerHTML = `${word.toUpperCase()} has ${count} vowels`;
  input.value = '';
  word == "" ? alert("plese enter text") : (model.style.display = "block");
}

function closeModel() {
  modelContent.classList.add("close-anime");
  setTimeout(() => {
    modelContent.classList.remove("close-anime");
    model.style.display = "none";
  }, 1100);
