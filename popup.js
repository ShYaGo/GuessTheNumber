var submit = document.getElementById("Submit");
var restart = document.getElementById("Restart");
var message = document.getElementById("message");
var myNumber = Math.floor(Math.random() * Math.floor(1000));;
var messageTextContent;
var calo;
chrome.sync.get("clr", (data) => {
	calo = data.clr;
	document.body.style.backgroundColor = calo;
})
WhenRestartIsClicked = function() {
    	myNumber = Math.floor(Math.random() * Math.floor(1000));
    	message.textContent = "";
}

var WhenSubmitIsClicked = function() {
    var yourAnswer = document.getElementById("yourAnswer").value;
    if ( parseFloat(yourAnswer) == parseFloat(myNumber) ) {
        messageTextContent = "Great, you guessed my number, click \"Restart\" to play again.";
    }
    else if ( parseFloat(yourAnswer) > parseFloat(myNumber) ) {
        messageTextContent = "My number is less than " + yourAnswer + ".";     
    } else {
        messageTextContent = "My number is greater than " + yourAnswer + ".";
    }
    message.textContent = messageTextContent;
}

submit.addEventListener("click", WhenSubmitIsClicked);
restart.addEventListener("click", WhenRestartIsClicked);