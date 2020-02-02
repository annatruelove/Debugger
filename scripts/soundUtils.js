var playBackgroundMusic = function () {
    var music = document.getElementById("background_music");

    var promise = music.play();
    if (promise !== undefined) {
        promise.then(_ => {
            music.play();
        }).catch(error => {
            console.log(error.name + " " + error.message);
        });
    }
}

var playEmail = function() {
    var music = document.getElementById("email_notif");
    // add flashers
    var promise = music.play();
    
    $("#messagesContainer").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)

    if (promise !== undefined) {
        promise.then(_ => {
            music.play();
        }).catch(error => {
            console.log(error.name + " " + error.message);
        });
    }

}

var playFanSound = function() {
    var music = document.getElementById("fans");

    var promise = music.play();
    if (promise !== undefined) {
        promise.then(_ => {
            music.play();
        }).catch(error => {
            console.log(error.name + " " + error.message);
        });
    }
}

var playPurchaseSound = function() {
    var music = document.getElementById("purchase");

    var promise = music.play();
    if (promise !== undefined) {
        promise.then(_ => {
            music.play();
        }).catch(error => {
            console.log(error.name + " " + error.message);
        });
    }
}