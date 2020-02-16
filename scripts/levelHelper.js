const getScript = function (level) {
    switch (level) {
        case 1:
            return level1Code;
        case 2:
            return level2Code;
        case 3:
            return level3Code;
    }
}

const levelSpeed = function(level){
    switch (level) {
        case 1:
            return 1000;
        case 2:
            return 850;
        case 3:
            return 750;
    }

}