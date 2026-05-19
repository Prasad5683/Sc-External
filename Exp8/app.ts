function add(){
    let num1 =Number ((document.getElementById("num1") as HTMLInputElement).value);
    let num2  = Number ((document.getElementById("num2") as HTMLInputElement).value);
    if (num1==null || num2 ==null){
        alert("Enter Both Number ...!");
        return  ;
    }
    (document.getElementById("result")!.innerHTML="Answer:"+(num1+num2));
}
function sub(){
    let num1 =Number ((document.getElementById("num1") as HTMLInputElement).value);
    let num2  = Number ((document.getElementById("num2") as HTMLInputElement).value);
    if (num1==null|| num2 ==null){
        alert("Enter Both Number ...!");
        return  ;
    }
    (document.getElementById("result")!.innerHTML="Answer:"+(num1-num2));
}
function mul(){
    let num1 =Number ((document.getElementById("num1") as HTMLInputElement).value);
    let num2  = Number ((document.getElementById("num2") as HTMLInputElement).value);
    if (num1==null|| num2 ==null){
        alert("Enter Both Number ...!");
        return  ;
    }
    (document.getElementById("result")!.innerHTML="Answer:"+(num1*num2));
}
function div(){
    let num1 =Number ((document.getElementById("num1") as HTMLInputElement).value);
    let num2  = Number ((document.getElementById("num2") as HTMLInputElement).value);
    if (num1==null|| num2 ==null){
        alert("Enter Both Number ...!");
        return  ;
    }
    (document.getElementById("result")!.innerHTML="Answer:"+(num1 / num2));
}