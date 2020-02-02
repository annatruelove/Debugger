var rootContainer;
var gameContainer;
var messagesContainerInbox;
var messagesContainerGroup;
var statsContainer;
var shopPopUp;
var bugs = []

$(document).ready(() => {
    rootContainer = $('#rootContainer');
    statsContainer = $('#statsContainer .winInner');
    messagesContainerInbox = $('#messagesContainer #inboxContent');
    shopContainer = $('#shopPopUp .winInner');
    createGameScreen();
    createMessagePane();
    createStatsContainer();

    // this will be called when a game is over
    createShopContainer();

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
    }, 200000, "linear");
    createBugs();
}

var createMessagePane = function () {
    // initial email box 
    messagesContainerInbox.prepend(createMessage("email", startEmail));
}

var createStatsContainer = function () {
    statsContainer.append(updateRAM(0));
    statsContainer.append(updateScore(0));
}

const createBugs = function(){
    gameContainer.append(makeBug()); 
}

var createShopContainer = function () {
    shopContainer.append(createShop());
}
