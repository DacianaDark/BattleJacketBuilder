var click = 0;

$("#blackswatch").click(function(){
    $("#bluejacket, #greenjacket, #redjacket, purplejacket").hide();
  });
  
  $("#blackswatch").click(function(){
    $("#blackjacket").show();
  });

  $("#swatch").on("click", function() {
      console.log("clicked on swatch")
  
      click++;
      console.log(click);
  
      if ("click", function("blackswatch")) {
      $("#blackjacket").show();
      $("#bluejacket, #greenjacket, #redjacket, purplejacket").hide();
      } else if ("click", function("blueswatch")) {
          $("#bluejacket").show();
          $("#blackjacket, #greenjacket, #purplejcket, #redjacket").hide();
      }
  })
  