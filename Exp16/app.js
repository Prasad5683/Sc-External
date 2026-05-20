let btn = document.getElementById("btn");
let check = document.getElementById("check");


btn.addEventListener("mouseover",function(){
  btn.style.background="lightblue";
});
btn.addEventListener("click",function(){
  check.innerText="button clicked ";
});