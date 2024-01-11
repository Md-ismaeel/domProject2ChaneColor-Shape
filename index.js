let div = document.querySelector(".box");
let Btn1 = document.querySelector(".changeColor");
let Btn2 = document.querySelector(".changeShape");
let shape = document.querySelector(".xyz");

// function randomColor() {
//   let str = "123456789abcdef";
//   let hasStr = "#";
//   for (let i = 0; i < 6; i++) {
//     let randomIndex = Math.floor(Math.random() * str.length);
//     hasStr += str[randomIndex];
//   }
//   return hasStr;
// }

// Btn1.addEventListener("click", () => {
//   let newColor = randomColor();
//   div.style.backgroundColor = newColor;
// });

Btn1.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let newColor = `rgb(${r},${g},${b})`;
  div.style.backgroundColor = newColor;
});

Btn2.addEventListener("click", () => {
  let arr = [
    "rectangle",
    "square",
    "circle",
    "triangle-up",
    "triangle-right",
    "diamond-shield",
    "heart",
  ];
  let randomIndex = Math.floor(Math.random() * arr.length);
  shape.classList.remove(...arr);
  shape.classList.add(arr[randomIndex]);
  shape.classList.add(arr[randomIndex]).style.transform = "rotate(360deg)";
});
