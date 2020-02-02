const runGame = function() {
    startSequence();
}

const startSequence = function() {

    loginPage.click(function() {
        loginPage.hide();
    }); 
    setLevel(1)

    gameContainer.hide();
    statsContainer.hide();

    $('#startDebuggingButton').click(function(){
        gameContainer.fadeIn(3000);
        statsContainer.fadeIn(3000, function() {
            gameContainer.append(makeFirstBug());
            $('#startDebuggingButton').prop('disabled', true);    
        }); 
    })
}