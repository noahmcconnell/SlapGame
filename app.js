let craziness = 0;
let hits = 0;
let resetButton = $("#reset-button");
let gameButtons = $("#annoy-button,#anger-button,#rage-button,#sleep-button,#steak-button,#wine-button");

function annoy() {
    craziness += 7;
    update(true);
}

function anger() {
    craziness += 12;
    update(true);
}

function rage() {
    craziness += 16;
    update(true);
}

function sleep() {
    craziness -= 4;
    update()
}

function steak() {
    craziness -= 8;
    update()
}

function wine() {
    craziness -= 12;
    update()
}

function reset() {
    craziness = 0;
    hits = 0;
    resetButton.addClass("invisible");
    gameButtons.removeClass("invisible")
    update()
}

function update(attack) {
    if (craziness < 0) {
        craziness = 0;
    };
    if (craziness >= 100) {
        endGame();
    }
    if (attack === true) {
        hits++;
    };
    updateView();
}

function endGame() {
    craziness = 100;
    resetButton.removeClass("invisible");
    gameButtons.addClass("invisible")

}
function updateView() {
    $("#craziness").text(craziness);
    $("#hits").text(hits);
    if (craziness < 34) {
        $('img[src]').attr("src", "./assets/smile.jpg")
    }
    else if (craziness > 34 && craziness < 70) {
        $('img[src]').attr("src", "./assets/cray.jpg")
    }
    else $("img[src]").attr("src", "./assets/sausage.gif")
}



