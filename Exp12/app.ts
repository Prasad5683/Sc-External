class Student {
     sname:string;
    m1:number;
    m2:number;
    m3:number;
    constructor (name:string,m1:number, m2:number, m3:number){
        this.sname=name ;
        this.m1=m1;
        this.m2=m2;
        this.m3 = m3;
    }
       isPass():boolean{
        if( this.m1>=35 && this.m2>=35 &&  this.m3 >= 35){
           return true;
        }else{
            return false;
        }
      }

} 



function checkIt (){
    let sname  = (document.getElementById("name")as HTMLInputElement).value;

let m1 = Number((document.getElementById("m1")as HTMLInputElement).value);
let m2 = Number((document.getElementById("m2")as HTMLInputElement).value);
let m3 = Number((document.getElementById("m3")as HTMLInputElement).value);

let s1 = new Student(sname,m1,m2,m3);
let res = (document.getElementById("res") as HTMLElement);
    if (s1.isPass()){
     res.innerText="Pass";
}else{
    res.innerText="Fail";
}
}


