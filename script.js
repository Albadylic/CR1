const numberElements = document.querySelectorAll("p");
const calculateButton = document.getElementById("calculate-button");
const outputField = document.querySelector("output");
const resetButton = document.getElementById("reset-button");

numberElements.forEach((element) => {
  element.addEventListener("click", () => {
    addToArray(element);
    element.classList.remove("unclicked");
    element.classList.add("clicked");
  });
});

let chosenNumbers = [];

const addToArray = (element) => {
  chosenNumbers.push(Number(element.textContent));
};

resetButton.addEventListener("click", () => {
  chosenNumbers = [];
  numberElements.forEach((element) => {
    element.classList.remove("clicked");
    element.classList.add("unclicked");
  });
  outputField.textContent = "Result will generate here";
  calculateButton.disabled = false;
});

function calculate() {
  const total = chosenNumbers.reduce(
    (accumulator, current) => (accumulator += current),
    0
  );
  const result = total / chosenNumbers.length;
  outputField.textContent = result;
  calculateButton.disabled = true;
}

calculateButton.addEventListener("click", calculate);
