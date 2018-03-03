$(document).ready(function() {

	$(".form__submit-btn").on("click", function(e) {

		e.preventDefault();

		var newBurger = {

			burger: $("#form__user-input").val().trim()
		
		};

		$.ajax("/api/burgers", {

			type: "POST",
			data: newBurger

		}).then(function(data) {

			console.log("done");

			location.reload();

		});

	});

	$(".munch-btn").on("click", function() {

		$.ajax("/api/burgers/" + id, {

	      type: "PUT",
	      data: newSleepState

	    }).then(function(data) {

	    	console.log(data);

	        location.reload();

	    });
	
	});

});