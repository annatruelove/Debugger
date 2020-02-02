var rootContainer;
var gameContainer;
var messagesContainerInbox;
var messagesContainerGroup;
var statsContainerInner;
var statsContainer;
var loginPage;
var shopPopUp;
var bugs = []
let weGamin = true;

$(document).ready(() => {
    rootContainer = $('#rootContainer');
    statsContainerInner = $('#statsContainer .winInner');
    statsContainer = $('#statsContainer');
    messagesContainerInbox = $('#messagesContainer #inboxContent');
    shopContainer = $('#shopPopUp .winInner');
    shopPopUp = $('#shopPopUp');
    gameContainer = $('#gameContainer');
    loginPage = $('#loginPage')
    createGameScreen();
    createMessagePane();
    createStatsContainer();

    // this will be called when a game is over
    createShopContainer();

    hideShop(); // use to hide shop
    // showShop(); // use to show shop

    Prism.highlightAll();
    $(".window").draggable({
        handle: ".winHeader"
    });

    runGame();

})

const createGameScreen = function () {
    let codeContainer = $('#code');
    codeContainer.append(level1);
    console.log(gameContainer.height());
    console.log(codeContainer.height());
}


const startGame = function () {
    let codeContainer = $('#code');
    var animationOffset = gameContainer.height() - codeContainer.height();
    codeContainer.parent().animate({
        "marginTop": animationOffset + "px"
    }, 45000, "linear", function () {
        weGamin = false;
    });
    createBugs();
}

var createMessagePane = function () {
    // initial email box 
    createMessage("email", startEmail);
}

var createStatsContainer = function () {
    statsContainerInner.append(updateRAM(0));
    statsContainerInner.append(updateScore(0));
}

const createBugs = function () {
    setInterval(function () {
            if (weGamin === false) {
                return;
            } else {
                gameContainer.append(makeBug());
            }
        },
        1000);
}

var createShopContainer = function () {
    setUpShop();
}

var hideShop = function () {
    shopPopUp.hide();
}

var showShop = function () {
    shopPopUp.show();
}