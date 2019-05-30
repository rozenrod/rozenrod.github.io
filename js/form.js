$(document).ready(function() {

	$(".form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Благодарим вас за сообщение");
			$(".form").trigger("reset");
		});
		return false;
	});

});
