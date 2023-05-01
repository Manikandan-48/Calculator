let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch{
        alert("invalid input❌")
    }
}
function clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(1)
}