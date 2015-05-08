var main = function() {
  $(".eerste").on("click", function(){
 	var tetonenprijs=$(this).data("prijs");
 	$(tetonenprijs).removeClass("onzichtbaar");
 	$(this).closest("button").addClass("onzichtbaar");
 	$(".tekst").addClass("selected");
 });
    $(".tweede").on("click", function(){
 	var tetonenprijs=$(this).data("prijs");
 	$(tetonenprijs).removeClass("onzichtbaar");
 	$(this).closest("button").addClass("onzichtbaar");
 	$(".tekst2").addClass("selected");
});
      $(".derde").on("click", function(){
 	var tetonenprijs=$(this).data("prijs");
 	$(tetonenprijs).removeClass("onzichtbaar");
 	$(this).closest("button").addClass("onzichtbaar");
 	$(".tekst3").addClass("selected");
});
};

$("document").ready(main);