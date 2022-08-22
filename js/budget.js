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

    if (isNaN(perPlayerPrice) || perPlayerPrice < 0) {
        alert('Enter a valid Number');
        return;
    }

    const PlayerOrderList = document.getElementById('player-list');
    const playerListItem = PlayerOrderList.children;
    const totalPlayer = playerListItem.length;

    const totalPlayerPrice = perPlayerPrice * totalPlayer;

    setInnerTextValue('total-player-expenses', totalPlayerPrice);

})

//add event listner on calculate total button

document.getElementById('calcalute-total-btn').addEventListener('click', function () {

    const managerPrice = getInputValue('manager-input-field');
    const coachPrice = getInputValue('coach-input-field');

    if (isNaN(managerPrice) || managerPrice < 0 || isNaN(coachPrice) || coachPrice < 0) {
        alert('Enter a valid Number');
        return
    }

    const totalPlayerTextField = document.getElementById('total-player-expenses');
    const totalPlayerExpenses = parseFloat(totalPlayerTextField.innerText)

    console.log(totalPlayerExpenses);

    const totalPrice = totalPlayerExpenses + managerPrice + coachPrice;

    setInnerTextValue('total-text-field', totalPrice)
})