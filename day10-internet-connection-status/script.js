const statusDisplay = document.getElementById("status"),
  image = document.getElementById("image"),
  setBg = document.getElementById("main");


function setBgcolor(){
  setBg.classList.add("online");
}

async function connectionStatus() {
  try{
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ingushetia%2C_Russia%2C_Armkhi%2C_Ingush_tower.jpg/750px-Ingushetia%2C_Russia%2C_Armkhi%2C_Ingush_tower.jpg?time=" +
        new Date().getTime()
    );
    image.src = "./images/online1.png";
    setBgcolor();
    return (fetchResult.status >= 200 && fetchResult.status < 300);
  }catch(error){
    // console.log(error);
    statusDisplay.textContent = "OOPS!!! YOUR INTERNET CONNECTION IS DOWN";
    image.src = "./images/offline1.png";
    setBg.classList.remove("online");
  }
 
}


// monitor the connection

setInterval(async () => {
  const result = await connectionStatus();
  if(result){
    statusDisplay.textContent = "YOUR ARE ONLINE CONNECTION LOOKS GOOD";
    setBgcolor();
  }
}, 5000);

window.addEventListener("load",async (event) => {
  if(connectionStatus()){
    statusDisplay.textContent = "YOU ARE ONLINE";
  }else{
    statusDisplay.textContent = "YOU ARE OFFLINE";
  }
})