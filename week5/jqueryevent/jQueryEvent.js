// click()
$('button').click(function(){
  var text = $(this).text();
  console.log("you clicked"+ text);
});
$('h1').click(function(){
  $(this).css("background", "pink")
});
// 그냥 this는 js기능이고달러로 묵어줘야 제이쿼''

// key
// .keydown()
$('input').kepress(function(){
  console.log("youpresskey");
});
// .keypress()
$('input').keypress(function(){
  console.log("youpresskey");
});
input에 단어하나를 입력할 때마다 console.log가 실행y
// .keyup()

// on  js의 eventLisner 같은 느낌
$("h1").on("click", function(){
  $(this).css("color","purple");
});

$("h1").on("keypress", function(){
  console.log("keypressd!");
});
// 마우스 올려놓았을때
$("button").on("mouseenter", function(){
  $(this).css("font-weight", "bold");
});

// 그냥 click보다는 on click이 더 미래를 위해서는 좋음


// jQuery event  제이쿼리사이트에도 event영역에 코드있음
$("button").on("click", function(){
  $('div').fadeOut(1000, function(){
    $(this).remove();
  });
});

fadeOut, fadeIn, fadeToggle(out이면 in역할/ in이면 out역할)

slideToggle(); 이것도 일종의 없어졌다 생겼다하는거
