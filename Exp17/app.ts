function sum():void {
  let input = (document.getElementById("arr") as HTMLInputElement).value;

  let arr: number[]=input.split(",").map(num => Number(num.trim()));
      // let arr: number[] = input.split(",").map(num => Number(num.trim()));
  let sum =0;
  for (let i =0;i<arr.length;i++){
    sum+=arr[i];
  }
  let Tsum = (document.getElementById("sum") as HTMLElement);
  Tsum.innerText="Sum : " +sum;
   
}