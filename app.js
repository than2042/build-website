const body = document.querySelector("body");
const snow = document.querySelector(".snow");
const galaxy = document.querySelector(".galaxy");

// createing snow using Math.random to get random px, color, duration and opacity
function createSnow() {
  // intital number of snow
  const snows = 7;
  // looping each time cloning number of snow
  for (i = 0; i < snows; i++) {
    // cloneNode method to create a copy of snows
    const cloneSnow = snow.cloneNode(true);
    const randomRed = Math.random * 250;
    const randomGreen = Math.random * 250;
    const randomBlue = Math.random * 60;
    cloneSnow.style.paddingLeft = Math.random() * 5 + "px";
    cloneSnow.style.animationDuration = Math.random() * 3 + 2 + "s";
    cloneSnow.style.opacity = Math.random() * 1;
    cloneSnow.style.color = `rgb(${randomRed + 200},${randomGreen + 200},${
      randomBlue + 50
    })`;

    galaxy.append(cloneSnow);
  }
}

// addEventlistener to triger click event button to start snow falling
galaxy.addEventListener("click", function () {
  const snowFlake = document.querySelectorAll(".snow");
  snowFlake.forEach((flake) => {
    flake.style.display = "inline-block";
  });
  createSnow();

  const s = setInterval(createSnow, 100);
  setTimeout(() => {
    clearInterval(s);
  }, 3000);
});

// change background color on text and button function

function bgChange() {
  const bgBtn = document.getElementById("landscape");
  bgBtn.addEventListener("click", function () {
    document.querySelector(".landText").classList.toggle("bgChange");
    document.querySelector("#landscape").classList.toggle("btnBg");
  });
}
bgChange();
