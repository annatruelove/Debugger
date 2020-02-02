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

    // <div>
    //     <div id="memoryBar" class="winInner winBar">
    //         <div class="winBarInner"></div>
    //         69%
    //     </div>
    //     <p>Memory remaining: </p>
    // </div>
    // <div>
    //     <div id="pointsBar" class="winInner winBar">
    //         <div class="winBarInner"></div>
    //         69%
    //     </div>
    //     <p>Bugs squashed: </p>
    // </div>

    if (userRAM >= 8) {
        userRAM = 7;
    } else if (userRAM <= 0) {
        // div.append("Memory Remaining: 0GB ");
        // ramImg.src = "assets/stats/0GB.png"
        // div.append(ramImg);
        userRAM = 0;
    }

    var div = $('<div></div>');
    var percent = Math.floor(userRAM / 8);
    var progressBar = "<div id='memoryBar' class='winInner winBar'><div class='winBarInner></div>" + percent + "%</div>";
    
    div.append(progressBar);
    div.append("<p>Memory remaining: " + userRAM + " GB</p>")

    return div;
}

var updateScore = function (newPts) {
    userPts += newPts;
    var div = $('<div></div>');
    var percent = Math.floor(userRAM / 8);
    var progressBar = "<div id='pointsBar' class='winInner winBar'><div class='winBarInner></div></div>";
    div.append(progressBar);
    div.append("<p>Bugs squashed: " + userPts + "</p>")
    return div;
}