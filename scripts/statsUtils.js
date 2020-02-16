var userPts = 0;
var messageCounter = 0;

var loseLife = function () {
    let div = $('<div></div>');
    div.append(updateRAM(-2));
    div.append(updateScore(0));
    messageCounter += 1;
    if (messageCounter % 2 == 0) {
        calcPerformance();
        populateMessage(performance, "random");
    }
    if (userRAM == 0) {
        performance = "bad";
        // GAME LOSE AREA
        // alert(" YOU LOSE BRUH LEAVEEEEE ");
        if (userPts < 10){
            burnItAll();
        } else {
            endRound(performance);
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

    if (userRAM >= 8) {
        userRAM = 8;
    } else if (userRAM <= 0) {
        userRAM = 0;
    }

    var div = $('<div></div>');
    var percent = Math.floor(userRAM / 8 * 100);
    var progressBar = $("<div id='memoryBar' class='winInner winBar'></div>");
    progressBar.append("<div style='width: " + percent + "%' class='winBarInner'></div>");

    div.append(progressBar);

    div.append("<p>Memory remaining: " + userRAM + " GB</p>");

    return div;
}

var updateScore = function (newPts) {
    userPts += newPts;
    var div = $('<div></div>');
    var percent = Math.round(userRAM / 8);
    var progressBar = "<div id='pointsBar' class='winInner winBar'><div style='width: " + (0.5 * userPts) + "px' class='winBarInner'></div></div>";
    div.append(progressBar);
    div.append("<p>Bugs squashed: " + (userPts) + "</p>")
    return div;
}