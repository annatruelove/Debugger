var rootContainer;
var gameContainer;
var messagesContainer;
var statsContainer;
var shopPopUp;

$(document).ready(() => {
    rootContainer = $('#rootContainer');
    messagesContainer = $('#messagesContainer');
    gameContainer = $('#gameContainer');

    gameContainer.click(function (e) {
        bugClick(e);
    })

    createGameScreen();
    createMessagePane();
    Prism.highlightAll();

})

const createGameScreen = function () {
    let codeContainer = $('#code');
    codeContainer.append(level1);
    var animationOffset = gameContainer.height() - codeContainer.height();
    codeContainer.parent().animate({
        "marginTop": animationOffset + "px"
    }, 100000, "linear");
}

var createMessagePane = function () {
    // initial email box 
    messagesContainer.append(createMessage("email", startEmail));
}

const bugClick = function (e) {
    let bug = $('.bug');


    var p1 = {
        x: bug.position().left,
        y: bug.position().top
    };

    var p2 = {
        x: e.pageX - gameContainer.offset().left,
        y: e.pageY- gameContainer.offset().top
    };
    
    
    
    console.log(p1)
    console.log(p2)

    var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

    bug.animate({rotate:"angleDeg"});
    
    bug.css("transform","rotate(" + angleDeg + "deg);");
    bug.css("-webkit-transform","rotate(" + angleDeg + "deg);");
    bug.css("-moz-transform","rotate(" + angleDeg + "deg);");

    bug.animate({
        left: e.pageX - gameContainer.offset().left,
        top: e.pageY - gameContainer.offset().top
    },"slow", "swing")
}