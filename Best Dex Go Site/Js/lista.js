$(function() {
    $("#successBtn").click(function(){
      if($("#produtos").css('display') === 'none'){
        $("#produtos").show();
      }else{
        $("#produtos").hide();
      }
      
    });
  });