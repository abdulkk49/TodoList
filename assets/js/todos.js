//todos listener
//add event listeners to elements that arer already there so that we can account for newly added elements
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//CLick on button to remove todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){  //this works on span
		$(this).remove();     // this works on li
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab input and clear text
		var todoText = $(this).val();
		$(this).val("");
		//add input to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})