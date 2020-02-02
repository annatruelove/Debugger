const runGame = function() {
    startSequence();
}

const startSequence = function() {

    loginButt.click(function() {
        loginPage.hide();
        messagesContainer.fadeIn();
    }); 
    setLevel(1)

    messagesContainer.hide()
    gameContainer.hide();
    statsContainer.hide();

    $('#startDebuggingButton').click(function(){
        $('#startDebuggingButton').prop('disabled', true);   
        gameContainer.fadeIn(1000);
        statsContainer.fadeIn(1000, function() {
            gameContainer.append(makeFirstBug());
            statsTask.attr("class", "miniProgram clicked");
            codeTask.attr("class", "miniProgram clicked");

            statsTask.click(function() {
                toggle(statsContainer, statsTask);
            })

            $('#statsCloseButton').click(function() {
                toggle(statsContainer, statsTask);
            })

            codeTask.click(function() {
                toggle(gameContainer, codeTask);
            })

            $('#gameCloseButton').click(function() {
                toggle(gameContainer, codeTask);
            })

            messagesTask.click(function() {
                toggle(messagesContainer, messagesTask);
            })

            $('#messageCloseButton').click(function() {
                toggle(messagesContainer, messagesTask);
            })

        
        }); 


    })

    
}