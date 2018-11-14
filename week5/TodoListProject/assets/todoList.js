// check off specific todo by clicking
$("ul").on("click","li", function(){
  $(this).toggleClass("completed");
});
// 맨처음에 ul설정하고 추가로 li를 설정하는이유는
// 원래는 li이만 쓰면 되는데 나중에 새로운 li를 추가할 때 이것도 기능이적용되기 우해
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
      // this=span을 클릭하 .parent()부모 요소인 li가 지워진다
    $(this).remove(); //여기서 this는 li
  });
  event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
  if(event.which === 13){
    // grabbing new todo text form input
    var todoText = $(this).val();
    $(this).val("");
    // create ne li and to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText +"</li>")
  }
});
$(".fa-plus").click(function(){
  $("input[type='text'").fadeToggle();
});


// $(this).css({
//   color:"gray",
//   textDecoration:"line-through"
// $(this).css("color", "gray");
// $(this).css("text-decoration", "line-through"); 위와 같은내용
