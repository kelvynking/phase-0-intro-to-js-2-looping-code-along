function writeCards(arr, event) {
    const thankYouCards = [];

    for (let i = 0; i < arr.length; i++) {
        
        const message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`; 

        thankYouCards.push(message);
    }

    return thankYouCards;
}

function countDown(posInt) {

    while (posInt >= 0) {
        console.log(posInt);
        posInt--;
    }
}
