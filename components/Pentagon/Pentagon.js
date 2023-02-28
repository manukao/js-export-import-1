import getRandomColor from "../../utils/randomColor.js";

export default function Pentagon(color) {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.style.backgroundColor = getRandomColor;
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = "#ccc";
  });
  return pentagon;
}
