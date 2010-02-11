$(function() {
	//alternate tr colors
	$('tr:even').css({
		background: "#edf3fe"
	});
	//make the sidebar selection work
	$('#sidebar ul li ul li').click(function() {
		$('#sidebar ul li ul li').removeClass('selected');
		$(this).addClass('selected');
	});
	//make the list selection work
	$('tr').click(function() {
		$('tr').removeClass('selected');
		$(this).addClass('selected');
	});
});