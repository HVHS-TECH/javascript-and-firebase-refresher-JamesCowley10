var messageSpace = document.getElementById("welcomeMessage");
messageSpace.innerHTML = "You've connected to the JavaScript";

var textInput = document.getElementById("textInput");
var textInputFirebase = document.getElementById("textInputFirebase");

function onTextInputButtonClick() {
    messageSpace.innerHTML = textInput.value;
}