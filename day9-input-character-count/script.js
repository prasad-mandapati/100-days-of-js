const input = document.querySelector(".text");
const count = document.querySelector(".count");

input.addEventListener("keyup",() => {
    count.innerHTML = input.value.replaceAll(" ","").length;
})