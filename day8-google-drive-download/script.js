const input = document.querySelector(".glink");
const btn = document.querySelector(".btn");
const downloadLink = document.getElementById("download-link");
const audioEmbed = document.getElementById("embed-audio");
const videoEmbed = document.getElementById("embed-video");

btn.addEventListener("click", generateLink);

function generateLink(e) {
  e.preventDefault();
  const conform = input.value.includes("https://drive.google.com/file/d/");
  let glink = "";
  if (conform) {
    let head = input.value
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.usercontent.google.com/download?id="
      )
      .replace("/view?usp=drive_link", "&export=download&authuser=0&confirm=t");
    glink = head;

    function copyLink(target){
        target.value ? navigator.clipboard.writeText(target.value) : alert("please generate link first");
    }

// code for generating download link
    input.value
      ? (downloadLink.value = head)
      : alert("please enter the google drive file link");
    const copy = document.querySelector(".copy");
    copy.addEventListener('click', () => {
        return copyLink(downloadLink);
    })


// code for embeding audio
    audioEmbed.value = `<audio controls><source src="${downloadLink.value}" type="audio/mp3">Your browser does not support the audio element.</audio> `;
    const copyAudio = document.querySelector(".copy-audio");
    copyAudio.addEventListener('click', () => {
        return copyLink(audioEmbed);
    })

    
// code for video embed
    let videolink = input.value.replace("view?usp=drive_link", "preview");
    videoEmbed.value = `<iframe width="640" height="360" src="${videolink}" frameborder="0" allowfullscreen></iframe>`;
    const copyVideo = document.querySelector(".copy-video");
    copyVideo.addEventListener('click', () => {
        return copyLink(videoEmbed);
    })


  } else {
    alert("Please enter only google drive link");
  }
}
