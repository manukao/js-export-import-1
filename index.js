import getRandomColor from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

const circleElement = Circle(getRandomColor());
circleElement.addEventListener("click", () => {
  circleElement.style.backgroundColor = getRandomColor();
});

const squareElement = Square(getRandomColor());
squareElement.addEventListener("click", () => {
  squareElement.style.backgroundColor = getRandomColor();
});

const pentagonElement = Pentagon(getRandomColor());
pentagonElement.addEventListener("click", () => {
  pentagonElement.style.backgroundColor = getRandomColor();
});

root.append(circleElement, squareElement, pentagonElement);

/* Original Code:
console.clear();

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  circle.style.backgroundColor = "#ccc";
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = "#ccc";
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = "#ccc";
});

root.append(circle, square, pentagon);
*/
