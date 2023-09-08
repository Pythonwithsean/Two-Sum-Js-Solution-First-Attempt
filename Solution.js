const arr = [1,2,3,4,5,6,7,8];
target = 5

let map = new Map()
let num1;
let num2;

arr.map((num1,num2)=>{
   num1 = arr[num2]
   map.set(num1)
   num2 = target - num1
   if(map.has(num2)){
      console.log(num1)
      console.log(num2)
   }else{
      console.log(null)
   }
})

