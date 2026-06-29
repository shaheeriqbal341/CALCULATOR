let display = document.getElementById('display');

function clearDisplay() {
    display.value = "0";
}

function append(value) {
    if(display.value === "0"){
        display.value = value;
    }else{
        display.value += value;
    }
}


function backspace() {
    display.value = display.value.slice(0,-1);
    if(display.value === ""){
        display.value = "0";
    }
}

function calculate() {
    try{
        display.value = eval(display.value);
    } catch(error){
        display.value = "Error";
    }
}