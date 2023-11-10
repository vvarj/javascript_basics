# Background Color Changer App

## solution code

```javascript
console.log("Background changer");

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const randomColorGenerator = function () {
  let color = "#";
  const hexValue = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    const randomPlace = Math.floor(Math.random() * 16);
    color += hexValue[randomPlace];
  }
  return color;
};

startBtn.addEventListener("click", function () {
  startColorChanger();
});

stopBtn.addEventListener("click", function () {
  stopColorChanger();
});

let intervalId;

const startColorChanger = function () {
  if (!intervalId) {
    intervalId = setInterval(colorChangeNow, 1000);
    function colorChangeNow() {
      document.body.style.backgroundColor = randomColorGenerator();
    }
  }
};

const stopColorChanger = function () {
  clearInterval(intervalId);
  intervalId = null;
};
```
