const model = document.querySelector(".model"),
      modelContent = document.querySelector(".model-content"),
      btn = document.querySelector(".btn"),
      close = document.querySelector(".close");

btn.addEventListener("click",openModel);
close.addEventListener("click",closeModel);

function openModel(e){
    e.preventDefault();
    model.style.display = "block";
}

function closeModel(){
    modelContent.classList.add("slide-up");
    setTimeout(() => {
        modelContent.classList.remove("slide-up")
        model.style.display = "none";
    }, 500);
}
