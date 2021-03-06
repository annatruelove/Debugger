const runGame = function () {
    startSequence();
}

const startSequence = function () {

    loginButt.click(function () {
        loginPage.hide();
        $("#taskbarContainer").show();
        messagesContainer.fadeIn();
        playEmail();
    });
    setLevel(1)

    messagesContainer.hide()
    gameContainer.hide();
    statsContainer.hide();

    $('#startDebuggingButton').click(function () {
        $('#startDebuggingButton').prop('disabled', true);
        gameContainer.fadeIn(1000);
        statsContainer.fadeIn(1000, function () {
            gameContainer.append(makeFirstBug());
            statsTask.attr("class", "miniProgram clicked");
            codeTask.attr("class", "miniProgram clicked");

            statsTask.click(function () {
                toggle(statsContainer, statsTask);
            })

            $('#statsCloseButton').click(function () {
                toggle(statsContainer, statsTask);
            })

            codeTask.click(function () {
                toggle(gameContainer, codeTask);
            })

            $('#gameCloseButton').click(function () {
                toggle(gameContainer, codeTask);
            })

            messagesTask.click(function () {
                toggle(messagesContainer, messagesTask);
            })

            $('#messageCloseButton').click(function () {
                toggle(messagesContainer, messagesTask);
            })
        });
    })
}

const burnItAll = function () {
    $('#taskbarContainer').hide();
    document.body.style.backgroundImage = 'url("./assets/sprites/giphy.gif")';
    toggle(gameContainer, codeTask);
    toggle(statsContainer, statsTask);
    toggle(messagesContainer, messagesTask);
    weGamin = false;

    $('.bug').stop();
    $('.bug').remove();
    $('#code').parent().stop();
    playFailureMusic();

    setInterval(throwErrorMessages, 50);

}

const throwErrorMessages = function () {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var xOffset = Math.floor(Math.random() * w) + 1;
    var yOffset = Math.floor(Math.random() * h) + 1;
    $('body').append('<img class="endError" style="position: absolute; top: ' + xOffset + 'px; left: ' + yOffset + 'px;" src="assets/ui/win_error_windowww.png"></img>');
    playFailureMusic()
}

function numberRandomizer() {
    var x = Math.floor((Math.random() * 100));
    return x;
}