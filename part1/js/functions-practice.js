//STEP 1
function halfNumber(num1){
    return num1/2;
}
var x = prompt("Enter a Number", "0");
var num1 = parseInt(x);
window.console.log("Half of "+num1+" is "+halfNumber(num1)+".");
//STEP 2
function squareNumber(num2){
    return num2*num2;
}
var sq=prompt("Enter a Number", "0");
var num2 = parseInt(sq);
window.console.log("The result of squaring the number "+num2+" is "+squareNumber(num2)+".");
//STEP 3
function percentOf(num3,num4){
    return (num3*100)/num4;
}
var per1=prompt("Enter a Number", "0");
var num3 = parseInt(per1);
var per2=prompt("Enter a Number", "0");
var num4 = parseInt(per2);
window.console.log(num3+" is "+percentOf(num3,num4)+"% of "+num4+".");
//STEP 4
function findModulus(num5,num6){
    return num6%num5;
}
var mod1=prompt("Enter a Number", "0");
var num5 = parseInt(mod1);
var mod2=prompt("Enter a Number", "0");
var num6 = parseInt(mod2);
window.console.log(findModulus(num5,num6)+" is the modulus of "+num5+" and "+num6+".");
//STEP 5
var arr = prompt("Enter the array of numbers seperated by comma for me to add:");
var arrNum = arr.split(",");
for(var i=0; i<arrNum.length;i++){
    arrNum[i] = parseInt(arrNum[i]);
}
function sumOfAGivenNumberArray(arrNum){
    var sum=0;
    for (var j=0;j<arrNum.length;j++){
        sum=sum+arrNum[j];
    }
    return sum;
}
var totSum =sumOfAGivenNumberArray(arrNum);
window.console.log(totSum);

