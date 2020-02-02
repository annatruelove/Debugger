var div = $('<div class="popUp"></div>');

var createShop = function () {
    startLightAnimation();
    // Youre a winner text
    div.append($('<br>'));

    div.append("Congratulations, You're Today's Lucky Winner!");
    div.append($('<br>'));
    div.append($('<br>'));

    div.append("Use your points to purchase an upgrade below:");
    div.append($('<br>'));
    div.append($('<br>'));

    // Buy more lives
    var ramImg = new Image(50, 25);
    ramImg.src = "assets/ui/win_code_16.png";
    div.append(ramImg);

    div.append("Buy More Lives: 50pts/life");
    var input = document.createElement("INPUT");
    input.setAttribute("type", "number");
    div.append(input);

    var livesButton = document.createElement("button")
    var livesText = document.createTextNode("Purchase");
    livesButton.onclick = function () {
        buyLives(input.value)
    };
    livesButton.appendChild(livesText);

    div.append(livesButton);

    div.append($('<br>'));
    div.append($('<br>'));


    // fly swatter
    var swatImg = new Image(50, 25);
    swatImg.src = "assets/ui/win_code_16.png";
    div.append(swatImg);

    div.append("Upgrade radius with fly swatter for 10 pts");

    var swatButton = document.createElement("button")
    var swatText = document.createTextNode("Purchase");
    // need to implement
    swatButton.onclick = function () {
        increaseRadius()
    };
    swatButton.appendChild(swatText);

    div.append(swatButton);


    return div;
}

// create pop up div
var buyLives = function (inputValue) {
    console.log("value: " + inputValue);

    if (userPts < inputValue) {
        div.append("Insufficient Funds");
    } else {
        userRAM += inputValue * 2;
        userPts -= inputValue * 50;
        statsContainer.empty();
        statsContainer.append(updateRAM(0));
        statsContainer.append(updateScore(0));

    }

}

var increaseRadius = function () {

    //increase the radius

    // subtract points
    if (userPts < 10) {
        div.append("Insufficient Funds");
    } else {
        statsContainer.empty();
        statsContainer.append(updateRAM(0));
        statsContainer.append(updateScore(-10));
    }
}

startLightAnimation = function () {
    $('#shopPopUp').animate({
        'border-image' : 'linear-gradient(to bottom right, #b827fc 100%, #2c90fc 75%, #b8fd33 50%, #fec837 25%, #fd1892 0%)'
    }, "slow",function(){
        startDarkAnimation();
    });

}

startDarkAnimation = function () {
    $('#shopPopUp').animate({
        'border-image' : 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)'
    }, "fast",function(){
        startLightAnimation();
    });

}