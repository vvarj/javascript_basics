console.log("BG changer app");

const colorBtns = document.querySelectorAll(".bg-button");
const body = document.querySelector("body");

colorBtns.forEach(function (colorDiv) {
  colorDiv.addEventListener("click", function (event) {
    console.log(event.target.id);
    body.style.backgroundColor = event.target.id;
  });
});
