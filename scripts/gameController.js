var rootContainer;
var gameContainer;
var messagesContainerInbox;
var messagesContainerGroup;
var statsContainerInner;
var statsContainer;
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
    createGameScreen();
    createMessagePane();
    createStatsContainer();

    // this will be called when a game is over
    createShopContainer();

    hideShop(); // use to hide shop
    //showShop(); // use to show shop

    Prism.highlightAll();
    $(".window").draggable({
        handle: ".winHeader"
    });

    runGame();

})

const createGameScreen = function () {
    let codeContainer = $('#code');
    codeContainer.append(level1);
    var animationOffset = gameContainer.height() - codeContainer.height();
    console.log(gameContainer.height());
    console.log(codeContainer.height());
    codeContainer.parent().animate({
        "marginTop": animationOffset + "px"
    }, 45000, "linear", function () {
        weGamin = false;
    });
    createBugs();
}

var createMessagePane = function () {
    // initial email box 
    messagesContainerInbox.prepend(createMessage("email", startEmail));
}

var createStatsContainer = function () {
    statsContainerInner.append(updateRAM(0));
    statsContainerInner.append(updateScore(0));
}

const createBugs = function () {
    setInterval(function () {
            if (weGamin === true) {
                gameContainer.append(makeBug());
            } else {
                return;
            }
        },
        1000);
}

var createShopContainer = function () {
    shopContainer.append(createShop());
}

var hideShop = function () {
    shopPopUp.hide();
}

var showShop = function () {
    shopPopUp.show();
}