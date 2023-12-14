function deckCards(dealCards) {
    let result;
    let totalCards = dealCards.concat(dealCards);
    result = totalCards.sort(function () {
        return 0.5 - Math.random();
    });
        return result;
}

function distributeCard(dealCards){
    let table = document.querySelector("#table"); 
    let shuffledCards = deckCards(dealCards);
    table.innerHTML = "";

    shuffledCards.forEach(function (element) {
        let card = document.createElement("div");
    
        card.innerHTML = 
            "<div class='card' data-value= " + 
            element + 
            ">" +
            "<div class='card_content'>" + 
            element + 
            "</div>" +
            "</div>";
            
        table.appendChild(card);
    });
    
}