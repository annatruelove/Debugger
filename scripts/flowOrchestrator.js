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
        $('#startDebuggingButton').prop('disabled', true);   
        gameContainer.fadeIn(3000);
        statsContainer.fadeIn(3000, function() {
            gameContainer.append(makeFirstBug());
            statsTask.attr("class", "miniProgram clicked");
            codeTask.attr("class", "miniProgram clicked");

            statsTask.click(function() {
                toggle(statsContainer, statsTask);
            })
            codeTask.click(function() {
                toggle(gameContainer, codeTask);
            })
            messagesTask.click(function() {
                toggle(messagesContainer, messagesTask);
            })
        
        }); 


    })

    
}