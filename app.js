const body = document.querySelector("body");

const snow = document.querySelector(".snow");

const galaxy = document.querySelector(".galaxy");

function createSnow() {
  const cloneSnow = snow.cloneNode(true);
  const randomRed = Math.random * 200;
  const randomGreen = Math.random * 250;
  const randomBlue = Math.random * 60;
  cloneSnow.style.paddingLeft = Math.random() * 5 + "px";
  cloneSnow.style.animationDuration = Math.random() * 3 + 2 + "s";
  cloneSnow.style.opacity = Math.random() * 1;
  cloneSnow.style.color = `(${randomRed + 200},${randomGreen + 200},${
    randomBlue + 50
  })`;

  galaxy.append(cloneSnow);
}
const s = setInterval(createSnow, 100);
setTimeout(() => {
  clearInterval(s);
}, 3000);
console.log(createSnow(), "i");
