var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("level " + level);
    var randomNumber = Math.floor(Math.random() * 4);   
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor); 
    
    // if(level == 2){
    //     alert("You Won");
    //     startOver();
    // }
}

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function clickFlash(chosenColor){
    $("#" + chosenColor).addClass("pressed");

    setTimeout(function(){
        $("#" + chosenColor).removeClass("pressed");
    },100);
}

function checkAnswer(level){
    var finished = false;
    if(userClickedPattern[level] === gamePattern[level]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }else{
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

$(document).on('keydown', function(){
    if(!started){
    nextSequence();
    started = true;
    }
});

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
  
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    clickFlash(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
    
});