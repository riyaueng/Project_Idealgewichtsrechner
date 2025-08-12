import "./style.css"

const htmlElements = {
  bodyHeightInputElement: document.querySelector("#height-input") as HTMLInputElement,
  ageInputElement: document.querySelector("#age-input") as HTMLInputElement,
  boldRadioButton: document.querySelector("#bold") as HTMLInputElement,
  slimRadioButton: document.querySelector("#slim") as HTMLInputElement,
  submitButton: document.querySelector("button") as HTMLButtonElement,
  outputElement: document.querySelector(".output-container") as HTMLDivElement,
}

function calculateIdealWeight(): number {
  const bodyHeight: number = Number(htmlElements.bodyHeightInputElement.value)
  const age: number = Number(htmlElements.ageInputElement.value)
  const bold: boolean = htmlElements.boldRadioButton.checked
  const slim: boolean = htmlElements.slimRadioButton.checked
  let idealWeight: number = bodyHeight - 100 + (age / 10) * 0.9

  if (bold && !slim) {
    idealWeight = idealWeight * 1.1
  } else if (!bold && slim) {
    idealWeight = idealWeight * 0.9
  }

  return idealWeight
}

function printIdealWeight() {
  htmlElements.outputElement.textContent = "Das Idealgewicht ist " + calculateIdealWeight()
}

htmlElements.submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  printIdealWeight()
})
