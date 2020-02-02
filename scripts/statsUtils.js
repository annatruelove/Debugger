var userRAM = 8;
var userPts = 0;

var loseLife = function() {
    userRAM = userRAM - 2;
    return updateRAM(userRam);
}

var increaseScore = function(){
    userPts = userPts + 1;
    return updateScore(userPts);
}

// 8GB max, increments in 2GB, so 4 lives total
var updateRAM = function(gb){
    userRAM += gb;

    var div = $('<div class="stats"></div>');
    var ramImg = new Image(75, 50);


    if (userRAM == 2){
        div.append("Memory Remaining: 2GB ");
        ramImg.src = "assets/stats/2GB.png"
        div.append(ramImg);
    } else if (userRAM == 4){
        div.append("Memory Remaining: 4GB ");
        ramImg.src = "assets/stats/4GB.png"
        div.append(ramImg);
    } else if (userRAM == 6){
        div.append("Memory Remaining: 6GB ");
        ramImg.src = "assets/stats/6GB.png"
        div.append(ramImg);
    } else if (userRAM == 8){
        div.append("Memory Remaining: 8GB ");
        ramImg.src = "assets/stats/8GB.png"
        div.append(ramImg);
    }

    return div;
}

var updateScore = function(newPts){

    userPts += newPts;

    var div = $('<div class="stats"></div>');

    div.append("Points: " + userPts);

    return div;
}