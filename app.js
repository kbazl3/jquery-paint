
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

	$("#teal").on("click", function() {
		color = "teal";
	})

	$("#brown").on("click", function() {
		color = "brown";
	})

	$("#orange").on("click", function() {
		color = "orange";
	})

	$("#purple").on("click", function() {
		color = "purple";
	})


	$('.box').on('click', function() {
		console.log(color);
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
		if (isDragging) {
			$(this).addClass(color);
		}
	})



});
