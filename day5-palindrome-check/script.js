const btn = document.querySelector(".btn"),
  model = document.querySelector(".model"),
  close = document.querySelector(".close"),
  modelContent = document.querySelector(".model-content"),
  modelText = document.querySelector(".model-text");

btn.addEventListener("click", openModel);
close.addEventListener("click", closeModel);

function openModel(e) {
  e.preventDefault();
  let word = document.querySelector(".text").value.toLowerCase();
  let revWord = word.split("").reverse().join("");
  word == revWord
    ? (modelText.innerHTML = `${word.toUpperCase()} -> is a Palindrome`)
    : (modelText.innerHTML = `${word.toUpperCase()} -> is not a Palindrome`); 
  word == "" ? alert("please enter a word") : model.style.display = "block";
}

function closeModel() {
  modelContent.classList.add("slide-up");
  setTimeout(() => {
    modelContent.classList.remove("slide-up");
    model.style.display = "none";
  }, 500);
}
