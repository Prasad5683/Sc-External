let input = document.getElementById("input");
let res = document.getElementById("res");

input.addEventListener("focus",function(){
  input.style.backgroundColor="lightblue";
});
input.addEventListener("keyup",function(){
  res.innerText=input.value;
});