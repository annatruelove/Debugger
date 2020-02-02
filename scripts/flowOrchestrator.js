const runGame = function() {
    startSequence();
}

const startSequence = function() {

    loginButt.click(function() {
        loginPage.hide();
        messagesContainer.fadeIn();
    }); 

    messagesContainer.hide()
    gameContainer.hide();
    statsContainer.hide();

    $('#startDebuggingButton').click(function(){
        gameContainer.fadeIn(3000);
        statsContainer.fadeIn(3000); 
        gameContainer.append(makeFirstBug());
    })
 


}