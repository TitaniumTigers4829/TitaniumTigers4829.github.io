const cheatCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
let numberOfCorrectKeys = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === cheatCode[numberOfCorrectKeys]) {
    numberOfCorrectKeys++;
  } else {
    numberOfCorrectKeys = 0;
  }
  if (numberOfCorrectKeys === cheatCode.length) {
    numberOfCorrectKeys = 0;
    let easterEgg = document.getElementById("easter-egg");
    easterEgg.style.color = "black";
    easterEgg.style.background = "#FB9106";
    easterEgg.style.padding = "1.2% 1%";
    easterEgg.style.borderRadius = "10px";
    let teamName = document.getElementById("team-name");
    teamName.style.padding = "3% 0";
  }
}, false);