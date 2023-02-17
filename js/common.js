// function : get value from input field
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString =  inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString).toFixed(2);
    inputField.value = '';
    return inputFieldValue;
}


// function : get value from innerHtml
function getInnerElementValueById(firstId, secondId){
    const firstValue = document.getElementById(firstId).innerText;
    const secondValue = document.getElementById(secondId).innerText;
    const FinalResult = firstValue * secondValue;
    return FinalResult;
}


// function : display data in summary box
function displayData(cardName, cardValue) {
    const container = document.getElementById("table-container");
  
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${cardName}</td>
      <td>${cardValue}</td>
    `;
    container.appendChild(tr);
  }