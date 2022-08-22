// common function for get input value 

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

// common function for set inner text value 

function setInnerTextValue(textElementId, value) {

    const textField = document.getElementById(textElementId);
    textField.innerText = value;
}


//add event listner on calculate button

document.getElementById('calcalute-btn').addEventListener('click', function () {

    const perPlayerPrice = getInputValue('per-player-input-field');

    const totalPlayerPrice = perPlayerPrice * 5;

    setInnerTextValue('total-player-expenses', totalPlayerPrice);

})

//add event listner on calculate total button

document.getElementById('calcalute-total-btn').addEventListener('click', function () {

    const managerPrice = getInputValue('manager-input-field');
    const coachPrice = getInputValue('coach-input-field');

    const totalPlayerTextField = document.getElementById('total-player-expenses');
    const totalPlayerExpenses = parseFloat(totalPlayerTextField.innerText)

    console.log(totalPlayerExpenses);

    const totalPrice = totalPlayerExpenses + managerPrice + coachPrice;

    setInnerTextValue('total-text-field', totalPrice)
})