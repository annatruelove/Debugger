const runGame = function() {
    startSequence();
}

const startSequence = function() {

    loginPage.click(function() {
        loginPage.hide();
    }); 

    gameContainer.hide();
    statsContainer.hide();

    $('#startDebuggingButton').click(function(){
        gameContainer.fadeIn(3000);
        statsContainer.fadeIn(3000); 
        gameContainer.append(makeFirstBug());
    })



}