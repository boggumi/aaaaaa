var colors = [];
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setupSquares();
    reset();
}

function setUpModeButtons(){
    for (var i = 0 ; i< modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares=3: numSquares=6;
            reset();
        });
    }
}


function setupSquares(){
	for (var i = 0; i< squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor){
				messageDisplay.textContent="CORRECT!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent= "Try Again!"
			}
		});
	}
}

function reset(){
	colors=generateRandomColors(numSquares);
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent=pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    for (var i = 0 ; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
  //Math.floor는 소수점 버리
}
// 여기 약간 이해 안됨!


function generateRandomColors(num){
  // make an array
  var arr = [];
  // reapeat random color and push into arr
  for(var i =0; i < num; i++){
// get random color and push into arr
   arr.push(randomColor())
   // 위에 arr를 비우두었으니까
  }
  // retrun
  return arr;
}

function randomColor(){
  // pick a "red"from 0 -25
  var r = Math.floor(Math.random() *256);
  // pick green
  var g = Math.floor(Math.random() *256);
  // pick a blue
  var b = Math.floor(Math.random() *256);

  return "rgb("+ r + ", " + g +", " +b+ ")";
}
// ", "의 공백가지도 똑같이 해야함
