var rootContainer;
var gameContainer;
var messagesContainer;
var statsContainer;
var shopPopUp;

$(document).ready(() => {
    rootContainer = $('#rootContainer');
    messagesContainer = $('#messagesContainer');
    statsContainer = $('#statsContainer');
    createGameScreen();
    createMessagePane();
    createStatsContainer();
    // testing this function
    updateRAM(-6);
    Prism.highlightAll();
    $(".window").draggable({ handle: ".winHeader" });
})

const createGameScreen = function () {
    gameContainer = $('#gameContainer');
    let codeContainer = $('#code');
    codeContainer.append(level1);
    var animationOffset = gameContainer.height() - codeContainer.height();
    console.log(gameContainer.height());
    console.log(codeContainer.height());
    codeContainer.parent().animate({
        "marginTop": animationOffset + "px"
    }, 100000, "linear");
}

var createMessagePane = function () {
    // initial email box 
    // messagesContainer.append(createMessage("email", startEmail));
}

var createStatsContainer = function () {
    statsContainer.append(createRAM());
}

