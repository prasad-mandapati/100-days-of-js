const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const reset = document.querySelector(".reset");
const body = document.body

reset.addEventListener('click',() => {
    hex.innerHTML = "#ffffff"
    body.style.backgroundColor = "#ffffff"
})

const getNumber = () => {
    let randomColor ="#"+ Math.random().toString(16).substring(2,8);
    hex.innerHTML = randomColor;
    body.style.backgroundColor = randomColor;
}

btn.addEventListener("click",getNumber)
document.body.addEventListener("keydown",(event) => {
    if(event.keyCode == 13){
        getNumber()
    }
})
