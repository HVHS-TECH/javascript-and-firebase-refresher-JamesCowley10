var messageSpace = document.getElementById("welcomeMessage");
messageSpace.innerHTML = "You've connected to the JavaScript!";

var textInput = document.getElementById("textInput");

function onTextInputButtonClick() {
    messageSpace.innerHTML = textInput.value;
}