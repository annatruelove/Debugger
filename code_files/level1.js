const level1Code = `
var rootContainer;
var gameContainer;
var messagesContainerInbox;
var messagesContainerGroup;
var messagesContainer;
var statsContainerInner;
var statsContainer;
var statsTask;
var codeTask;
var messagesTask;
var loginPage;
var shopPopUp;
var bugs = [];
var weGamin = true;
var roundNumber = 1;
var performance = "good";
var userRAM = 8;

$(document).ready(() => {
    rootContainer = $('#rootContainer');
    statsContainerInner = $('#statsContainer .winInner');
    statsContainer = $('#statsContainer');
    messagesContainerInbox = $('#inboxContent');
    messagesContainerGroup = $('#groupContent');
    messagesContainer = $('#messagesContainer');
    shopContainer = $('#shopPopUp .winInner');
    shopPopUp = $('#shopPopUp');
    gameContainer = $('#gameContainer');
    loginPage = $('#loginPage')
    loginButt = $('#loginButt');
    statsTask = $('#statstask');
    codeTask = $('#codetask');
    messagesTask = $('#messagestask')
    createMessagePane();
    createStatsContainer();
    // this will be called when a game is over
    createShopContainer();

    hideShop(); // use to hide shop
    // showShop(); // use to show shop

    $(".window").draggable({
        handle: ".winHeader"
    });

    runGame();

})


const setLevel = function () {
    let codeContainer = $('#code');
    codeContainer.empty();
    codeContainer.append(getScript(roundNumber));
    codeContainer.parent().css({
        "marginTop": "0px"
    });
    Prism.highlightAll();

}


const startGame = function () {
    let codeContainer = $('#code');
    var animationOffset = gameContainer.height() - codeContainer.height();
    weGamin = true;
    console.log("game started");
    codeContainer.parent().animate({
        "marginTop": animationOffset + "px"
    }, 10000, "linear", function () {
        calcPerformance();
        endRound(performance);
    });
    createBugs();
}

const endRound = function (performance) {
    weGamin = false;
    $('.bug').stop();
    $('.bug').remove();
    $('#code').parent().stop();

    if (roundNumber === 3) {
        alert(" you won the game ? ");
    }
    roundNumber++;
    setLevel();
    $('#startDebuggingButton').unbind();
    $('#startDebuggingButton').prop('disabled', false);
    $('#startDebuggingButton').click(function () {
        $('#startDebuggingButton').prop('disabled', true);
        startGame()
    })
    populateMessage(performance, "endround");

    setTimeout(function () {
        showShop();
    }, 3000)

}

var createMessagePane = function () {
    // initial email box 
    createMessage("email", startEmail);
}

var createStatsContainer = function () {
    statsContainerInner.append(updateRAM(0));
    statsContainerInner.append(updateScore(0));
}

const createBugs = function () {
    const interval = setInterval(function () {
            if (weGamin === false) {
                clearInterval(interval);
            } else {
                gameContainer.append(makeBug());
            }
        },
        levelSpeed(roundNumber));
}

var createShopContainer = function () {
    setUpShop();
}

var hideShop = function () {
    shopPopUp.hide();
}

var showShop = function () {
    shopPopUp.show();
}

var toggle = function (container, tab) {
    if (container.is(":visible")) {
        container.hide();
        tab.attr("class", "miniProgram");
    } else {
        container.show();
        tab.attr("class", "miniProgram clicked");
    }
}

var calcPerformance = function () {
    if (userRAM >= 6) {
        performance = "good";
    } else if (userRAM >= 2) {
        performance = "average";
    } else {
        performance = "bad";
    }
}
`
const level2Code = `
var userPts = 0;

var loseLife = function () {
    let div = $('<div></div>');
    div.append(updateRAM(-2));
    div.append(updateScore(0));
    if (userRAM == 0) {
        performance = "bad";
        // GAME LOSE AREA
        // alert(" YOU LOSE BRUH LEAVEEEEE ");
        if (userPts < 10){
            burnItAll();
        } else {
            endRound(performance);
            showShop()    
        }
    }
    return div;
}

var increaseScore = function () {
    let div = $('<div></div>');
    div.append(updateRAM(0));
    div.append(updateScore(1));
    return div;
}

// 8GB max, increments in 2GB, so 4 lives total
var updateRAM = function (gb) {
    userRAM += gb;

    var div = $('<div class="stats"></div>');
    var ramImg = new Image(75, 50);

    if (userRAM == 2) {
        div.append("Memory Remaining: 2GB ");
        ramImg.src = "assets/stats/2GB.png";
        div.append(ramImg);
    } else if (userRAM == 4) {
        div.append("Memory Remaining: 4GB ");
        ramImg.src = "assets/stats/4GB.png";
        div.append(ramImg);
    } else if (userRAM == 6) {
        div.append("Memory Remaining: 6GB ");
        ramImg.src = "assets/stats/6GB.png";
        div.append(ramImg);
    } else if (userRAM >= 8) {
        div.append("Memory Remaining: 8GB ");
        ramImg.src = "assets/stats/8GB.png";
        div.append(ramImg);
    } else if (userRAM <= 0) {
        div.append("Memory Remaining: 0GB ");
        ramImg.src = "assets/stats/0GB.png"
        div.append(ramImg);
    }

    return div;
}

var updateScore = function (newPts) {
    userPts += newPts;
    var div = $('<div class="stats"></div>');
    div.append("Points: " + userPts);
    return div;
}

var div = $('<div class="popUp"></div>');

function setUpShop() {
    $("#swatterItem .shopImg").on("click", increaseRadius);
    $("#sprayItem .shopImg").on("click", increaseRadius);
    $("#livesItem .shopImg").on("click", null, 1, buyLives);
}

// create pop up div
var buyLives = function (event) {
    let inputValue = event.data;
    console.log("value: " + inputValue);

    if (userPts < inputValue) {
        div.append("Insufficient Funds");
    } else {
        userRAM += inputValue * 2;
        userPts -= inputValue * 50;
        statsContainer.empty();
        statsContainer.append(updateRAM(0));
        statsContainer.append(updateScore(0));
    }
}

var increaseRadius = function () {

    //increase the radius
    console.log("increasing radius");
    // subtract points
    if (userPts < 10) {
        div.append("Insufficient Funds");
    } else {
        statsContainer.empty();
        statsContainer.append(updateRAM(0));
        statsContainer.append(updateScore(-10));
    }
}

startLightAnimation = function () {
    $('#shopPopUp').animate({
        'border-image': 'linear-gradient(to bottom right, #b827fc 100%, #2c90fc 75%, #b8fd33 50%, #fec837 25%, #fd1892 0%)'
    }, "slow", function () {
        startDarkAnimation();
    });

}

startDarkAnimation = function () {
    $('#shopPopUp').animate({
        'border-image': 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)'
    }, "fast", function () {
        startLightAnimation();
    });

}
`

level3Code = `
const runGame = function() {
  startSequence();
}

const startSequence = function() {

  loginButt.click(function() {
      loginPage.hide();
      $("#taskbarContainer").show();
      messagesContainer.fadeIn();
  }); 
  setLevel(1)

  messagesContainer.hide()
  gameContainer.hide();
  statsContainer.hide();

  $('#startDebuggingButton').click(function(){
      $('#startDebuggingButton').prop('disabled', true);   
      gameContainer.fadeIn(1000);
      statsContainer.fadeIn(1000, function() {
          gameContainer.append(makeFirstBug());
          statsTask.attr("class", "miniProgram clicked");
          codeTask.attr("class", "miniProgram clicked");

          statsTask.click(function() {
              toggle(statsContainer, statsTask);
          })

          $('#statsCloseButton').click(function() {
              toggle(statsContainer, statsTask);
          })

          codeTask.click(function() {
              toggle(gameContainer, codeTask);
          })

          $('#gameCloseButton').click(function() {
              toggle(gameContainer, codeTask);
          })

          messagesTask.click(function() {
              toggle(messagesContainer, messagesTask);
          })  

          $('#messageCloseButton').click(function() {
              toggle(messagesContainer, messagesTask);
          })
      }); 
  })
}

const burnItAll = function () {
  $('#taskbarContainer').hide();
  document.body.style.backgroundImage = 'url("./assets/sprites/giphy.gif")';
  toggle(gameContainer, codeTask);
  toggle(statsContainer, statsTask);
  toggle(messagesContainer, messagesTask);
  weGamin = false;

  $('.bug').stop();
  $('.bug').remove();
  $('#code').parent().stop();

  throwErrorMessages();

}

const throwErrorMessages = function() {  
  for (let i = 0; i < 50; i++) {
      $('body').delay(100).append('<img id="pic" src="assets/ui/win_error_window.png"></img>');
     // document.getElementById('pic').style.top = numberRandomizer() + 'px';
      //document.getElementById('pic').style.left = numberRandomizer() + 'px';
  }
}

function numberRandomizer(){
  var x = Math.floor((Math.random() * 100)); 
  return x;
}

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
`