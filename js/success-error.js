function success(lastCard) {
    lastCard.forEach(function (element) {
        element.classList.add("successful");
    });
    
    document.querySelector("#sound-success").play();
}

function error(lastCard) {
    lastCard.forEach(function (element) {
        element.classList.add("error");
    });

    document.querySelector("#sound-error").play();

    setTimeout(function () {
        lastCard.forEach(function (element) {
            element.classList.remove("discovered");
            element.classList.remove("error");
        });
    }, 1000);
}