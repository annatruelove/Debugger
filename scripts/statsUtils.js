var userRAM = 8;
var ramText;
var ramImg = new Image(75, 50);

// Creates initial full life with 8GB
var createRAM = function() {
    var div = $('<div class="stats"></div>');

    ramText = "8GB"

    div.append(ramText);

    ramImg.src =  "assets/stats/8GB.png";
    div.append(ramImg)
    return div;
}

// 8GB max, increments in 2GB, so 4 lives total
var updateRAM = function(gb){
    userRAM += gb;

    if (userRAM == 2){
        ramText = "2GB"
        ramImg.src = "assets/stats/2GB.png"
    } else if (userRAM == 4){
        ramText = "4GB"
        ramImg.src = "assets/stats/4GB.png"
    } else if (userRAM == 6){
        ramText = "6GB"
        ramImg.src = "assets/stats/6GB.png"
    } else if (userRAM == 8){
        ramText = "8GB"
        ramImg.src = "assets/stats/8GB.png"
    }
}
