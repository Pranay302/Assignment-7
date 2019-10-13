/*eslint-env browser*/
//STEP 1
function message(){
    window.alert("I have been clicked");
}

//STEP 2
var Button1 = document.getElementById("Button1");
Button1.onclick = message;

//STEP 3
var Button2 = document.getElementById("Button2");
Button2.addEventListener("click",message);

//STEP 4
var Button3 = document.getElementById("Button3");
Button3.addEventListener("click",function(){
    window.alert("I have been clicked");
});

//STEP 5
function init(){
    var Button4 = document.getElementById("Button4");
    Button4.addEventListener("click",function(){
    window.alert("I have been clicked");
});
}
window.addEventListener("load", init);

