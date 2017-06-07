
$(document).ready(function() {

	let color;

	$("#red").on("click", function() {
		color = "red";
	})

	$("#green").on("click", function() {
		color = "green";
	})

	$("#blue").on("click", function() {
		color = "blue";
	})

	$("#yellow").on("click", function() {
		color = "yellow";
	})

	$("#white").on("click", function() {
		color = "white";
	})


	$('.box').on('mouseover', function() {
		$(this).addClass(color)
	});

	$(".reset").on("click", function() {
		$(".box").addClass("black");
	});



});
