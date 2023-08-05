let count = document.querySelector(".count");
let buttons = document.querySelector(".buttons");

buttons.addEventListener('click',(e) => {
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        colorset();
    }
    if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
        colorset();
    }
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        colorset();
    }
});

const colorset = () => {
    if(count.innerHTML < 0){
        count.style.color = "orangered";
    }else if(count.innerHTML > 0){
        count.style.color = "lightgreen";
    }else{
        count.style.color = "white";
    }
}