// global scope................
var age = 21;
console.log(age);

{
    console.log(age);
}

if(true){
    console.log(age);
}
function myAge(age){
    console.log(age);
}
myAge(age);