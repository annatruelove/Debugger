const makeBug = function(){
    var newBug = $('<img class ="bug" src="assets/sprites/beetle.gif"></img>');
    
    newBug.css({top: 700, left: Math.floor(Math.random() * 536), position:'absolute'});
    newBug.animate({
        top: '-60px'
    }, 5000,"linear", function(){
        newBug.remove();
        // lose life
    });

    newBug.click(function() {
        //newBug.attr("src",) update image
        console.log("we clickin");
        newBug.stop();
        newBug.fadeOut("fast", function(){
            newBug.remove();
            //addPoints
        });
    })
    
    return newBug;
}

