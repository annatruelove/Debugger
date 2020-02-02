const makeBug = function(){
    var newBug = $('<img class ="bug" src="assets/sprites/beetle.gif"></img>');
    
    newBug.css({top: 700, left: Math.floor(Math.random() * 536), position:'absolute'});
    newBug.animate({
        top: '-60px'
    }, 5000,"linear", function(){
        newBug.remove();
        statsContainer.empty();
        statsContainer.append(loseLife())
});

    newBug.click(function() {
        console.log("we clickin");
        newBug.attr("src","assets/sprites/splat.png")
        newBug.stop();
        
        newBug.fadeOut("slow", function(){
            newBug.remove();
            statsContainer.empty();
            statsContainer.append(increaseScore())
        }); 

        
    })
    
    return newBug;
}

