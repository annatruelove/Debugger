const runGame = function() {
    startSequence();
}

const startSequence = function() {
    gameContainer.hide();
    statsContainer.hide();

    $('#startDebuggingButton').click(function(){
        gameContainer.fadeIn(3000);
        statsContainer.fadeIn(3000); 
        gameContainer.append(makeFirstBug());
    })


    
}