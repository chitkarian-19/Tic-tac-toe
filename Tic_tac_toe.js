var player=1;
$(document).ready(function(){
	function check(symbol){   //total 8 test cases are there
		if($(".sq1").hasClass(symbol)&&$(".sq2").hasClass(symbol)&&$(".sq3").hasClass(symbol))//for horizontal
			return true;
		else if($(".sq4").hasClass(symbol)&&$(".sq5").hasClass(symbol)&&$(".sq6").hasClass(symbol))
			return true;
		else if($(".sq7").hasClass(symbol)&&$(".sq8").hasClass(symbol)&&$(".sq9").hasClass(symbol))
			return true;
		else if($(".sq1").hasClass(symbol)&&$(".sq4").hasClass(symbol)&&$(".sq7").hasClass(symbol))//for vertical
			return true;
		else if($(".sq2").hasClass(symbol)&&$(".sq5").hasClass(symbol)&&$(".sq8").hasClass(symbol))
			return true;
		else if($(".sq3").hasClass(symbol)&&$(".sq6").hasClass(symbol)&&$(".sq9").hasClass(symbol))
			return true;
		else if($(".sq1").hasClass(symbol)&&$(".sq5").hasClass(symbol)&&$(".sq9").hasClass(symbol))//for diagonal
			return true;
		else if($(".sq3").hasClass(symbol)&&$(".sq5").hasClass(symbol)&&$(".sq7").hasClass(symbol))
			return true;
		else{
			return false;
		}
	}
  $("button").click(function(){
   if($(this).hasClass("fa fa-times")||$(this).hasClass("fa fa-circle-o"))
   {
	   alert("You have clicked on this button please try another one");
   }
    else{ if(player==1)
		  { $("#screen").val("Player2 please click");
			  $(this).addClass("fa fa-circle-o");
		     if(check("fa fa-circle-o"))
				 $("#screen").val("Player"+player+" Wins").css("background-color", "yellow");
		      else
			  player=2;
		  }
       else
	    { $("#screen").val("Player1 please click");
			$(this).addClass("fa fa-times");
          if(check("fa fa-times"))
		$("#screen").val("Player"+player+" Wins").css("background-color", "yellow");
		  else
            player=1;
		 }
	}
  });
});