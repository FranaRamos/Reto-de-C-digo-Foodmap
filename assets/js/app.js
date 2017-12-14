
$(document).ready(function() {
var catProduct = $(this).attr("category");

	/*código splash*/
		setTimeout(function(){
			$(".splash").fadeOut(500);
		}, 2000);

	/*código modal mapa*/
	$("#open").click(function() {
		$(".modal").toggle("slow");
	});
	$(".modal").click(function() {
		$(this).css({display: "none"});
	});

/*clase active a los enlaces*/

	//active al primer enlace
	$(".list-group .categoryItem[category='all']").addClass("ct_item-active");
	$(".categoryItem").click(function() {
		
		//active a los enlaces que se seleccionan
	$(".categoryItem").removeClass("ct_item-active");
	$(this).addClass("ct_item-active");
	
});

	//ocultando los productos
	$(".img-item").hide();

	//mostrando productos por categoría
	$(".img-item [category='"+ catProduct +"']").show();

	});

	$(".categoryItem[category='all']").click(function() {
		$(".img-item").show();

});