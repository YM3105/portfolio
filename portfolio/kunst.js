var main = function () {
    "use strict";
    $("a").on("click", function(){
        $("li").removeClass("selected");
        $(this).closest("li").addClass("selected"); 
  
      $("p").addClass("onzichtbaar");
      var tetonenparagraaf = $(this).closest("li").data("par");
      //console.log(tetonenparagraaf);
      $(tetonenparagraaf).removeClass("onzichtbaar");
    });
};

$(document).ready(main);