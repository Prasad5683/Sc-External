// let input = document.getElementById("input");
let check = document.getElementById("output");


document.addEventListener("keyup",function(event){
  check.innerText="key Realeased : "+event.key;
});
document.addEventListener("keydown",function(event){
    check.innerText="key Pressed : "+event.key;
});