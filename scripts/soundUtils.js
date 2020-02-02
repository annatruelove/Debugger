var playBackgroundMusic = function () {
    var music = document.getElementById("full_music");

    var promise = music.play();
    if (promise !== undefined) {
        promise.then(_ => {
            music.play();
        }).catch(error => {
            console.log(error.name + " " + error.message);
        });
    }
    $('#intro_music').pause();
    $('#intro_music').pause();

}

var playFullMusic = function () {
    var music = document.getElementById("full_music");

    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        audios[i].pause();
    }

    var promise = music.play();
    if (promise !== undefined) {
        promise.then(_ => {
            music.play();
        }).catch(error => {
            console.log(error.name + " " + error.message);
        });
    }
}

var playFailureMusic = function () {
    var music = document.getElementById("fail");

    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        audios[i].pause();
    }

    var promise = music.play();
    if (promise !== undefined) {
        promise.then(_ => {
            music.play();
        }).catch(error => {
            console.log(error.name + " " + error.message);
        });
    }
}

var playEmail = function () {
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

var playFanSound = function () {
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

var playPurchaseSound = function () {
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

var playSplatSound = function () {
    var music = document.getElementById("splat");

    var promise = music.play();
    if (promise !== undefined) {
        promise.then(_ => {
            music.play();
        }).catch(error => {
            console.log(error.name + " " + error.message);
        });
    }
}