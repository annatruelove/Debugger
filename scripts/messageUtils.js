
// TODO should be called from root controller 
var populateMessage = function(performance, gamestatus) {
    // access messageBank 
    if (performance === "good") {

    } else if (performance === "average") {

    } else if (performance === "bad") {

    }
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

