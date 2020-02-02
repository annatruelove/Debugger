var div = $('<div class="popUp"></div>');

var createShop = function () {
    // Youre a winner text
    div.append($('<br>'));

    div.append("Congratulations, You're Today's Lucky Winner!");
    div.append($('<br>'));
    div.append($('<br>'));

    div.append("Use your points to purchase an upgrade below:");
    div.append($('<br>'));
    div.append($('<br>'));

    // Buy more lives
    var ramImg = new Image(75, 50);
    ramImg.src = "assets/ui/win_code_16.png";
    div.append(ramImg);

    // button trigger pop up div to be created 


    div.append("Buy More Lives");
    var input = document.createElement("INPUT");
    input.setAttribute("type", "number");
    div.append(input);

    var livesButton = document.createElement("button")
    var livesText = document.createTextNode("Purchase");
    livesButton.onclick = function () { buyLives(input.value) };
    livesButton.appendChild(livesText);

    div.append(livesButton);

    return div;
}

// create pop up div
var buyLives = function (inputValue) {
    console.log("value: " + inputValue);

    if (userPts < inputValue) {
        div.append("Insufficient Funds")
    } else {
        userRAM += inputValue * 2;
        userPts -= inputValue;
        statsContainer.empty();
        statsContainer.append(updateRAM(0));
        statsContainer.append(updateScore(0));

    }

}