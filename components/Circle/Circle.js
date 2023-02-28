import getRandomColor from "../../utils/randomColor.js";

export default function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = getRandomColor();
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = "#ccc";
  });
  return circle;
}
