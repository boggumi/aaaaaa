var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetbutton = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numinput = document.querySelector("input");
var winningscoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver= false;
var winningScore= 5;

p1button.addEventListener("click", function() {
  if(!gameOver){
    p1score++;
    if(p1score === winningScore){
       p1display.classList.add("winner");
       gameOver = true;
  }
    p1display.textContent = p1score;
  }
});


p2button.addEventListener("click", function(){
  if(!gameOver){
      p2score++;
      if(p2score === winningScore) {
        gameOver = true;
        p2display.classList.add("winner");
      }
      p2display.textContent = p2score;
    }
});

resetbutton.addEventListener("click", function(){
  reset();
});

function reset(){
  p1score = 0;
  p2score = 0;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  gameOver = false;
}

numinput.addEventListener("change", function(){
  winningscoreDisplay.textContent=this.value;
  winningScore = Number(this.value);
});
// this는 numinput나타냄
// 맨마지막에 number을 해주는 건 numinput.value가 string으로 간주되기 때문
