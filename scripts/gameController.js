var rootContainer;
var gameContainer;
var messagesContainerInbox;
var messagesContainerGroup;
var statsContainerInner;
var statsContainer;
var loginPage;
var shopPopUp;
var bugs = [];
var weGamin = true;
var roundNumber = 1;

$(document).ready(() => {
    rootContainer = $('#rootContainer');
    statsContainerInner = $('#statsContainer .winInner');
    statsContainer = $('#statsContainer');
    messagesContainerInbox = $('#inboxContent');
    messagesContainerGroup = $('#groupContent');

    shopContainer = $('#shopPopUp .winInner');
    shopPopUp = $('#shopPopUp');
    gameContainer = $('#gameContainer');
    loginPage = $('#loginPage')
    createMessagePane();
    createStatsContainer();
    // this will be called when a game is over
    createShopContainer();

    hideShop(); // use to hide shop
    //showShop(); // use to show shop

    $(".window").draggable({
        handle: ".winHeader"
    });

    runGame();

})


const setLevel = function (round) {
    let codeContainer = $('#code');
    codeContainer.append(getScript(roundNumber));
    Prism.highlightAll();

}


const startGame = function () {
    let codeContainer = $('#code');
    var animationOffset = gameContainer.height() - codeContainer.height();
    codeContainer.parent().animate({
        "marginTop": animationOffset + "px"
    }, 45000, "linear", function () { // Change based on round
        endRound();
    });
    createBugs();
}

const endRound = function(){
    weGamin = false;
    $('.bug').remove();
    $('#code').parent().stop();
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
        levelSpeed(roundNumber));
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