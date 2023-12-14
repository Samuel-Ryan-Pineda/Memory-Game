function initial() {
    movement = 0;
    distributeCard(levels[levelActual].cards);
    document.querySelector("#mov").innerText = "00";
    maxCounter();
    document.querySelector(".level-selection").classList.remove("visible");
    document.querySelector("#endGame").classList.remove("visible");
    document.querySelector("#timeOver").classList.remove("visible");
    document.querySelector("#gameOver").classList.remove("visible");
    document.querySelector("#levelUp").classList.remove("visible");

    document.querySelectorAll(".card").forEach(function (element) {
        element.addEventListener("click", discover);
    });
    
    if (!modeRelax) {
        countDown();  
    } else {
        document.querySelector("#timer").classList.add("hide-timer");
    }   
}

function restart() {
    levelActual = 0;
    updateLevel();
    initial();
}

function startNormalGame() {
    modeRelax = false;
    document.querySelector("#welcome").classList.remove("visible");
    initial();
    document.querySelector(".level-control").classList.add("hide-control");
}

function startRelaxGame() {
    modeRelax = true;
    document.querySelector("#welcome").classList.remove("visible");
    initial();
}