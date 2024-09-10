function anotherAddEventListener(typeOfEvent,callback){

    // Detect the event code
    var eventThatHappened = {
        eventType : "keydown",
        key : "p",
        durationOfKeypress : 2
    };

    if(eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened);
    }
}

anotherAddEventListener("keydown",function(event){ //As callback is there in the place of function then here this anonymous function will trigger the value of key in event by the callback function's parameter which is eventThatHappened.
    console.log(event); // it will print the value of evenThatHappened.
});

// this will record the keypress as here keydown eventType is given this function is also written similar to above function but it has a lot of varieties and harwarw features also implemented in that.
document.addEventListener("keydown", function(event){
    // In above function eventThatHappened object has the details of a single key which is 'p' similary in this addEventListener function KeyboardEvent object has stored the details of all the keys.
    console.log(event);
});

// Study callback functions again. from articles and youtube.