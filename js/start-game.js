loadLevels();

document.querySelectorAll(".restart").forEach(function (element) {
    element.addEventListener("click", restart);
});

document
    .querySelector("#normal-game")
    .addEventListener("click", startNormalGame);
document
    .querySelector("#relax-game")
    .addEventListener("click", startRelaxGame);

document
    .querySelector("#level-control")
    .addEventListener("click", showLevelMenu);
document
    .querySelector("#close-level")
    .addEventListener("click", hideLevelMenu);

document.querySelectorAll(".level").forEach(function (element) {
    element.addEventListener("click", changeLevel);
});

document.querySelector("#nextLevel").addEventListener("click", loadNewLevel);

document.querySelector("body").addEventListener("click", clickOutofMenu);

document.addEventListener("keydown", escapeMenu);

document.querySelector("#welcome").classList.add("visible");