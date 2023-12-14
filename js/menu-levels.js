function loadLevels() {
    let menuLevels = document.querySelector(".level-selection ul");
    levels.forEach(function (element, index) {
        let controlLevel = document.createElement("li");
        controlLevel.innerHTML =
        "<button class='level' data-level=" +
         index +
         ">Level " +
         (index + 1) +
         "</button";
         menuLevels.appendChild(controlLevel);
    });
}

function changeLevel() {
    let level = parseInt(this.dataset.level);
    levelActual = level;
    updateLevel();
    initial();
}

function showLevelMenu(event) {
    event.stopPropagation();
    document.querySelector(".level-selection").classList.toggle("visible");
}

function hideLevelMenu() {
    document.querySelector(".level-selection").classList.remove("visible");
}

function clickOutofMenu(event) {
    if (event.target.closest(".level-selection")){
        return;
    }
    document.querySelector(".level-selection").classList.remove("visible");
}

function escapeMenu(event) {
    console.log(event.key);
    if (event.key === "Escape"){
        hideLevelMenu();
    }
}