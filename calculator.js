function userText(param) {
    // alert("Hello" + " " + param)
    document.getElementById("userInput").innerText += param;
}

function evaluateResult(){
    let userInput = document.getElementById("userInput").innerText
    // console.log(userInput) 
    console.log(eval(userInput));
    let result = eval(userInput);
    document.getElementById('result').innerText = result;
}

function clearScreen() {
    document.getElementById("userInput").innerText = "";
    document.getElementById("result").innerText = "0";
}