$(function(){

	$(".history").click(function(){
		var id = $(this).attr('data-raw');
		$.get($("base").attr('href') + "index.php/listofissue/history/" + id, function(data){
			console.log(data);
		});
		return false;
	});

});