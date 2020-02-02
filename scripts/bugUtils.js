const makeBug = function () {
    var newBug = $('<img class ="bug" src="assets/sprites/beetle.gif"></img>');

    newBug.css({
        top: 700,
        left: Math.floor(Math.random() * 836),
        position: 'absolute'
    });
    newBug.animate({
        top: '-60px'
    }, 5000, "linear", function () {
        // WASSSSSSUP YA LOST A POINT
        newBug.remove();
        $('#statsContent').empty();
        $('#statsContent').append(loseLife())
    });

    newBug.click(function () {
        newBug.attr("src", "assets/sprites/splat.png")
        newBug.stop();
        playBackgroundMusic();

        newBug.fadeOut("slow", function () {
            // SPLAT, POINT GAINED
            newBug.remove();
            $('#statsContent').empty();
            $('#statsContent').append(increaseScore())
        });


    })

    return newBug;
}

const makeFirstBug = function() {
    var newBug = $('<img class ="bug" src="assets/sprites/beetle.gif"></img>');

    newBug.css({
        top: 700,
        left: 418,
        position: 'absolute'
    });
    newBug.animate({
        top: '218px'
    }, 5000, "linear", function(){
        newBug.attr("src", "assets/sprites/beetle.png")
    });
    newBug.click(function(){
        newBug.attr("src", "assets/sprites/splat.png")
        newBug.stop();
        playBackgroundMusic();

        newBug.fadeOut("slow", function () {
            // SPLAT, POINT GAINED
            newBug.remove();
            $('#statsContent').empty();
            $('#statsContent').append(increaseScore())
            startGame();
        });

    })

    return newBug;
}