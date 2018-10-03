console.log("print all numbers -10 and 19");
var num = -10;
while(num < 20){
  console.log(num);
  num++;
}
console.log("even numbers btw 10 and 40");
var num = 10;

while(num<41){
  if(num%2 ===0){
    console.log(num);
  }
  num+=1;
}

// while(num<41){
//   console.log(num);
//   console+=2;
// }
console.log("all odd numbers btw 300 and 333");
var num = 300;

while(num<334){
  if(num%2 !==0){
    console.log(num);
  }
  num+=1;
}

console.log("all numbers divisible by 5 and 3 btw 5 and 50");
var num = 5;

while(num<51){
  if(num%3 === 0 && num%5 === 0 ){
    console.log(num);
  }
  num+=1;
}
