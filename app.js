
$(document).ready(function() {

	let color;
	let isDragging = false;

	$('.box').mousedown(function() {
		isDragging = true;
	})

	$('.box').mouseup(function() {
		isDragging = false;
	})

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


	$('.box').on('click', function() {
		$(this).addClass(color)
	});

	$('.box').on('mousedown', function() {
		$(this).addClass(color)
	});

	$(".box").on('dblclick', function() {
		$(this).removeClass(color);
	})

	$(".reset").on("click", function() {
		$(".box").addClass("black");
	});

	$('.box').on('mouseover', function() {
		console.log("hitting");
		if (isDragging) {
			$(this).addClass(color);
		}
	})



});
