var len = document.querySelectorAll(".drum").length;
for (let index = 0; index < len; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click",function(){
    // this.style.color = "white";
    var clickedButton = this.innerHTML;
    switch (clickedButton) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
            
        case "d":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "j":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "k":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;        
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;    
    
        default:
            alert("Incorrect");
            break;
    }
    });
}


document.addEventListener("keydown",function(event){
    // this.style.color = "white";
    // var clickedButton = this.innerHTML;
    if(event.key === 'enter'){
        alert('Key pressed:');
    }
    switch (event.key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
            
        case "d":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "j":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "k":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;        
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;    
    }
    });


// var audio = new Audio('./sounds/tom-1y.mp3');
// audio.play();