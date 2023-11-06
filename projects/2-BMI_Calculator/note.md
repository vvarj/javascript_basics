# BMI Calculator

## solution code

```javascript
console.log("BMI calculator");

const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;

  if (height === "" || isNaN(height) || height < 0) {
    results.innerHTML = "Enter a valid height";
    results.style.backgroundColor = "#802127";
    results.style.padding = "15px";
    return;
  } else if (weight === "" || isNaN(weight) || weight < 0) {
    results.innerHTML = "Enter a valid weight";
    results.style.backgroundColor = "#802127";
    results.style.padding = "15px";
    return;
  }
  const bmi = ((Number(weight) / Number(height * height)) * 10000).toFixed(1);
  results.innerHTML = `Your BMI is ${bmi}`;
  results.style.backgroundColor = "#1ea652";
  results.style.padding = "15px";
});
```
