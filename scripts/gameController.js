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
var performance = "good";
var userRAM = 8;

$(document).ready(() => {
    rootContainer = $('#rootContainer');
    statsContainerInner = $('#statsContainer #statsContentNew');
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
    // showShop(); // use to show shop

    $(".window").draggable({
        handle: ".winHeader"
    });

    runGame();

})


const setLevel = function () {
    let codeContainer = $('#code');
    codeContainer.empty();
    codeContainer.append(getScript(roundNumber));
    codeContainer.parent().css({
        "marginTop": "0px"
    });
    Prism.highlightAll();

}


const startGame = function () {
    let codeContainer = $('#code');
    var animationOffset = gameContainer.height() - codeContainer.height();
    weGamin = true;
    console.log("game started");
    codeContainer.parent().animate({
        "marginTop": animationOffset + "px"
    }, 45000, "linear", function () {
        calcPerformance();
        endRound(performance);
    });
    calcPerformance();
    populateMessage(performance, "beginround");
    createBugs();
}

const endRound = function (performance) {
    weGamin = false;
    $('.bug').stop();
    $('.bug').remove();
    $('#code').parent().stop();

    if (roundNumber === 3) {
        // won the game! 
        calcPerformance();
        populateMessage(performance, "endgame");
        playWinMusic();
        gameContainer.hide();
        statsContainer.hide();
        shopContainer.hide();
        $('#win').show();
        // SHOW PIPES HERE

    }
    roundNumber++;
    setLevel();
    $('#startDebuggingButton').unbind();
    $('#startDebuggingButton').prop('disabled', false);
    $('#startDebuggingButton').click(function () {
        $('#startDebuggingButton').prop('disabled', true);
        startGame()
    })
    populateMessage(performance, "endround");

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
    const interval = setInterval(function () {
            if (weGamin === false) {
                clearInterval(interval);
            } else {
                gameContainer.append(makeBug());
            }
        },
        levelSpeed(roundNumber));
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

var toggle = function (container, tab) {
    if (container.is(":visible")) {
        container.hide();
        tab.attr("class", "miniProgram");
    } else {
        container.show();
        tab.attr("class", "miniProgram clicked");
    }
}

var calcPerformance = function () {
    if (userRAM >= 6) {
        performance = "good";
    } else if (userRAM >= 2) {
        performance = "average";
    } else {
        performance = "bad";
    }
}