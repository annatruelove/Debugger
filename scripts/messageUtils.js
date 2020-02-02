
var populateMessage = function(performance, gamestatus) {
    // access messageBank 

    var messages = "";
    if (performance === "good") {
        var messages = goodMap.get(gamestatus);
    } else if (performance === "average") {
        var messages = averageMap.get(gamestatus);
    } else if (performance === "bad") {
        var messages = badMap.get(gamestatus);
    }

    var message = messages[Math.floor(Math.random()*messages.length)];

    var splitMessage = message.split(":");
    return createMessage(splitMessage[0], splitMessage[1]);
}

// type is email or group, message is the actual message 
var createMessage = function (type, message) {
    var messageLabel;
    if (type === "email") {
        messageLabel = $('<div class="email"></div>');
    } else if (type === "group") {
        messageLabel = $('<div class="group"></div>');
    } 
    messageLabel.append(message);
    return messageLabel;
}

var showMsgTab = function () {
    alert();
}
