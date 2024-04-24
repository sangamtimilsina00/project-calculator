const Display=document.getElementById("display");

function appendToDisplay(x){
    Display.value+=x;
}
function calculate(){
    try{

        Display.value=eval(Display.value);
    }
    catch(e){
        Display.value="Error"
    }

}
function clearDisplay(){
    Display.value="";
}