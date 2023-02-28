import getRandomColor from "../../utils/randomColor.js";

export default function Square(color) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.backgroundColor = getRandomColor;
  square.addEventListener("click", () => {
    square.style.backgroundColor = "#ccc";
  });
  return square;
}
