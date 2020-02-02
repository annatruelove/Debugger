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