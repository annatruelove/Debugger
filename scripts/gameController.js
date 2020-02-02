var rootContainer;
var gameContainer;
var messagesContainerInbox;
var messagesContainerGroup;
var messagesContainer;
var statsContainerInner;
var statsContainer;
var statsTask;
var codeTask;
var messagesTask;
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
    messagesContainer = $('#messagesContainer');
    shopContainer = $('#shopPopUp .winInner');
    shopPopUp = $('#shopPopUp');
    gameContainer = $('#gameContainer');
    loginPage = $('#loginPage')
    loginButt = $('#loginButt');
    statsTask = $('#statstask');
    codeTask = $('#codetask');
    messagesTask = $('#messagestask')
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


const setLevel = function () {
    let codeContainer = $('#code');
    codeContainer.append(getScript(roundNumber));
    Prism.highlightAll();

}


const startGame = function () {
    let codeContainer = $('#code');
    var animationOffset = gameContainer.height() - codeContainer.height();
    codeContainer.parent().animate({
        "marginTop": animationOffset + "px"
    }, 20000, "linear", function () {
        endRound();
    });
    createBugs();
}

const endRound = function(){
    weGamin = false;
    $('.bug').stop();
    $('.bug').remove();
    $('#code').parent().stop();
    showShop();
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

var toggle = function(container, tab) {
    if (container.is(":visible")) {
        container.hide();
        tab.attr("class", "miniProgram");
    } else {
        container.show();
        tab.attr("class", "miniProgram clicked");
    }
}