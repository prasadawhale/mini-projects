//detecting which button was clicked.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var innerHTML = this.getAttribute("class");
        var dataKey = this.getAttribute("data-key");

        console.log(innerHTML);
        
        makeSound(innerHTML);
        buttonAnimation(dataKey);
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
    }); //this.style.color = "blue";

}



//detecting keyboard press
document.addEventListener("keydown", function (event){
    makeSound(event.key + " drum");
    console.log(event.key + " drum");
    
    buttonAnimation(event.key)
});


//function to make sound based on key

function makeSound(key) {
    switch (key) {
        case "w drum":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a drum":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s drum":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d drum":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j drum":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k drum":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l drum":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

        default:
            console.log(key);
            break;
    }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){ activeButton.classList.remove("pressed");}, 100)
}





// let audio = new Audio("sounds/tom-1.mp3");
//     audio.play();

// document.querySelectorAll("button")[5].addEventListener("click", function (){
//     alert("I got clicked" );
// }
// );