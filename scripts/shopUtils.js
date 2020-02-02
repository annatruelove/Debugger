var div = $('<div class="shop"></div>');

var createShop = function () {
    // Youre a winner text
    div.append($('<br>'));

    div.append("Congratulations, You're Today's Lucky Winner!");
    div.append($('<br>'));
    div.append($('<br>'));

    div.append("Use your points to purchase an upgrade below:");
    div.append($('<br>'));
    div.append($('<br>'));


    div.append("Points to spend: " + userPts);

    // Buy more lives
    var ramImg = new Image(75, 50);
    ramImg.src = "assets/ui/win_code_16.png";
    div.append(ramImg);

    // button trigger pop up div to be created 
    var livesButton = document.createElement("button")
    var livesText = document.createTextNode("Buy More Lives");
    livesButton.onclick = function () { livesPopUp() };
    livesButton.appendChild(livesText);

    div.append(livesButton);

    return div;
}

// create pop up div
var livesPopUp = function () {
    var popUpDiv = $('<div class="popUp"></div>');

    var input = document.createElement("INPUT");
    input.setAttribute("type", "number");

    popUpDiv.append(input);

    div.append(popUpDiv);

    var numLives = input.value;
        
    if (userPts < numLives) {
        
    } else {
        userRam +=numLives * 2;
    }

    
}