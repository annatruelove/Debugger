var userRAM = 8;
var userPts = 0;

var loseLife = function () {
    let div = $('<div></div>');
    div.append(updateRAM(-2));
    div.append(updateScore(0));
    if (userRAM == 0) {
        // GAME LOSE AREA
        // alert(" YOU LOSE BRUH LEAVEEEEE ");
        if (userPts < 50){
            burnItAll();
        } else {
            endRound();
            showShop()    
        }
    }
    return div;
}

var increaseScore = function () {
    let div = $('<div></div>');
    div.append(updateRAM(0));
    div.append(updateScore(1));
    return div;
}

// 8GB max, increments in 2GB, so 4 lives total
var updateRAM = function (gb) {
    userRAM += gb;

    var div = $('<div class="stats"></div>');
    var ramImg = new Image(75, 50);

    if (userRAM == 2) {
        div.append("Memory Remaining: 2GB ");
        ramImg.src = "assets/stats/2GB.png";
        div.append(ramImg);
    } else if (userRAM == 4) {
        div.append("Memory Remaining: 4GB ");
        ramImg.src = "assets/stats/4GB.png";
        div.append(ramImg);
    } else if (userRAM == 6) {
        div.append("Memory Remaining: 6GB ");
        ramImg.src = "assets/stats/6GB.png";
        div.append(ramImg);
    } else if (userRAM >= 8) {
        div.append("Memory Remaining: 8GB ");
        ramImg.src = "assets/stats/8GB.png";
        div.append(ramImg);
    } else if (userRAM <= 0) {
        div.append("Memory Remaining: 0GB ");
        ramImg.src = "assets/stats/0GB.png"
        div.append(ramImg);
    }

    return div;
}

var updateScore = function (newPts) {
    userPts += newPts;
    var div = $('<div class="stats"></div>');
    div.append("Points: " + userPts);
    return div;
}