var populateMessage = function (performance, gamestatus) {
    // access messageBank 

    var messages = "";
    if (performance === "good") {
        var messages = goodMap.get(gamestatus);
    } else if (performance === "average") {
        var messages = averageMap.get(gamestatus);
    } else if (performance === "bad") {
        var messages = badMap.get(gamestatus);
    }

    var message = messages[Math.floor(Math.random() * messages.length)];

    var splitMessage = message.split(":");
    createMessage(splitMessage[0], splitMessage[1]);
}

// type is email or group, message is the actual message 
var createMessage = function (type, message) {
    var messageLabel;
    if (type === "email") {
        messageLabel = $('<div class="email"><b>BOSS:</b>  </div>');
        messageLabel.append(message);
        messagesContainerInbox.prepend(messageLabel);
        messagesContainerInbox.prepend('<hr>');
    } else if (type === "group") {
        messageLabel = $('<div class="group"></div>');
        messageLabel.append(message);
        messagesContainerGroup.prepend(messageLabel);
        messagesContainerGroup.prepend('<hr>');
    }
}

var showMsgTab = function (id) {
    $("#messagesContainer .winInner").hide();
    $(id).show();
    $("#messagesContainer .winTab").removeClass("active");
    $(id + "Tab").addClass("active");
}