
let playerArray = [];

function playerList(array) {

    //select player order list --------
    const playerOrderList = document.getElementById('player-list');
    playerOrderList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {

        // create and add player list item------
        const playerName = array[i];
        const listItem = document.createElement('li');
        listItem.innerText = playerName;

        playerOrderList.appendChild(listItem);
    }

}

//select button-- event----------

function addPlayer(event) {

    event.disabled = true;

    const playerName = event.parentNode.children[0].innerText;

    playerArray.push(playerName);

    if (playerArray.length > 5) {
        alert("you have already selected 5 players");
        event.disabled = false;
        return;
    }

    playerList(playerArray);

}



