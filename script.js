const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector("button");
const output = document.querySelector("output");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let checkedInputs = [];

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked === true) {
      checkedInputs.push(inputs[i]);
    }
  }

  if (checkedInputs.length === 0) {
    output.textContent = "Please check at least one box";
  } else {
    output.textContent = calculate(checkedInputs);
  }
});

function calculate(selectedInputs) {
  const sum = selectedInputs.reduce((accumulator, currentElement) => {
    return (accumulator += Number(currentElement.value));
  }, 0);
  return sum / selectedInputs.length;
}
