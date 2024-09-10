// Calculating total no of buttons.
var noOfDrumButtons = document.querySelectorAll(".drum").length;

/* Syntax of EventListener
 .addEventListener(event, function, useCapture);
     1.The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
     2.The second parameter is the function we want to call when the event occurs.
     3.The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.
*/


//  Detecting Button press on the website on the screen
for(var i=0; i<noOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", // syntax of event listener is explained above.
    function () { // here
        var btnInnerHTML = this.innerHTML;

        makeSound(btnInnerHTML);

        buttonAnimation(btnInnerHTML);

    });
}

// Detecting keyboard press inside entire document.
document.addEventListener("keydown",function(event){ // keydown is used to get the details of the press keys.
    // passing the pressed key to makeSound fn to play the desired sound.
    makeSound(event.key);// key is Stored in key attribute of KeyboardEvent object which is here defined as Event

    buttonAnimation(event.key);
});

// function to play sound according the pressed key or touched button on the website.
function makeSound(key){
    // switch case to check for the key which sound to play
    switch (key) {
        case "w":
            // creating an object for Constructor function Audio which is predefined fn.
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();// calling the method of Audio which is also predefined and used to play sounds.
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

// Adding animation to the code.
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    // adding the class to get the animation which is defined in the css file.
    activeButton.classList.add("pressed");

/*  Syntax-
    setTimeout(function, milliseconds, param1, param2, ...)
        1.function	Required. -> The function to execute.
        2.milliseconds	Optional. -> Number of milliseconds to wait before executing. -> Default value is 0.
        3.param1,param2,-> ...	Optional. -> Parameters to pass to the function. -> Not supported in IE9 and earlier.
*/

    // It will delay task by 100ms (task is to remove animation after pressing button).
    setTimeout(function() {
        // removing the animation after key is pressed.
        activeButton.classList.remove("pressed");
    },100)
}