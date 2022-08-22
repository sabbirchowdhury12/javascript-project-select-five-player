
let playerArray = [];

function player(array) {

    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';

    for (let i = 0; i < array.length; i++) {

        const player = array[i];
        const listItem = document.createElement('li');
        listItem.innerText = player

        playerList.appendChild(listItem);
    }

}
function addToCart(event) {

    const btton = event.parentNode.children[1];
    console.log(btton)
    btton.setAttribute('disabled', '')

    const playerName = event.parentNode.children[0].innerText

    playerArray.push(playerName);
    player(playerArray);

}



