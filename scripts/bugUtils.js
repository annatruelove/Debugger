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
        statsContainer.empty();
        statsContainer.append(loseLife())
    });

    newBug.click(function () {
        console.log("we clickin");
        newBug.attr("src", "assets/sprites/splat.png")
        newBug.stop();
        playBackgroundMusic();

        newBug.fadeOut("slow", function () {
            // SPLAT, POINT GAINED
            newBug.remove();
            statsContainer.empty();
            statsContainer.append(increaseScore())
        });


    })

    return newBug;
}