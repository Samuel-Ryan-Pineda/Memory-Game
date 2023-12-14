function finish() {
    clearInterval(stopwatch);
    if (levelActual < levels.length - 1) {
        document.querySelector("#levelUp").classList.add("visible");
    } else {
        document.querySelector("#endGame").classList.add("visible");
    }
}