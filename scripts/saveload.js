	function saveCookie(){
		$.cookie("gold",gold,{expires:365});
		$.cookie("faith",faith,{expires:365});
		$.cookie("souls",souls,{expires:365});
		$.cookie("iron",iron,{expires:365});
		$.cookie("peasants",peasants,{expires:365});
		$.cookie("miners",miners,{expires:365});
		$.cookie("personPage",personPage,{expires:365});
		$.cookie("tavernpeasants",tavernpeasants,{expires:365});
		$.cookie("taverns",taverns,{expires:365});
		$.cookie("priests",priests,{expires:365});
		$.cookie("paladins",paladins,{expires:365});
		$.cookie("minesOpened",minesOpened,{expires:365});
		$.cookie("cathedralOpened",cathedralOpened,{expires:365});
		$.cookie("barracksOpened",barracksOpened,{expires:365});
		alert("Your game has been saved!");
	};
	
	function deleteCookie(){
		$.removeCookie("gold");
		$.removeCookie("faith");			
		$.removeCookie("souls");
		$.removeCookie("iron");		
		$.removeCookie("peasants");
		$.removeCookie("miners");
		$.removeCookie("personPage")
		$.removeCookie("tavernpeasants");			
		$.removeCookie("taverns");
		$.removeCookie("priests");
		$.removeCookie("paladins");
		$.removeCookie("minesOpened");
		$.removeCookie("barracksOpened");
		$.removeCookie("cathedralOpened");
	};
	
	function loadCookie(){
	//	console.debug($.cookie("gold"));
		if($.cookie("gold") != null){
			gold = parseInt($.cookie("gold"));
		}
		if($.cookie("faith") != null){
			faith = parseInt($.cookie("faith"));
			document.getElementById("faith").innerHTML = faith;
		}			
		if($.cookie("souls") != null){
			souls = parseInt($.cookie("souls"));
			document.getElementById("souls").innerHTML = souls;
		}		
		if($.cookie("iron") != null){
			iron = parseInt($.cookie("iron"));
			document.getElementById("iron").innerHTML = iron;
		}			
		if($.cookie("peasants") != null){
			peasants = parseInt($.cookie("peasants"));
			document.getElementById("peasants").innerHTML = peasants;
		}	
		if($.cookie("miners") != null){
			miners = parseInt($.cookie("miners"));
			document.getElementById("miners").innerHTML = miners;
		}
		if($.cookie("personPage") != null){
			personPage = parseInt($.cookie("personPage"));
			document.getElementById("personPage").innerHTML = personPage;
		}			
		if($.cookie("minesOpened") != null){
			var myBool = ($.cookie("minesOpened") == "true")
			if(myBool == true){
				minesOpened = true
				document.getElementById("Mining").style.display = "block";
			}
		}			
		if($.cookie("tavernpeasants") != null){
			tavernpeasants = parseInt($.cookie("tavernpeasants"));
			document.getElementById("tavernpeasants").innerHTML = tavernpeasants;
		}					
		if($.cookie("taverns") != null){
			taverns = parseInt($.cookie("taverns"));
			document.getElementById("taverns").innerHTML = taverns;
		}
		if($.cookie("barracksOpened") != null){
			var myBool = ($.cookie("barracksOpened") == "true")
			if(myBool == true){
				barracksOpened = true
				document.getElementById('Barracks').style.display = "block";
				document.getElementById('BarracksMenu').style.display = "block";
			}
		}			
		if($.cookie("cathedralOpened") != null){
			var myBool = ($.cookie("cathedralOpened") == "true")
			if(myBool == true){
				cathedralOpened = true
				document.getElementById('Cathedral').style.display = "block";
				document.getElementById('FaithMenu').style.display = "block";
			}
		}		
		if($.cookie("priests") != null){
			priests = parseInt($.cookie("priests"));
			document.getElementById("priests").innerHTML = priests;
		}			
		if($.cookie("paladins") != null){
			paladins = parseInt($.cookie("paladins"));
			document.getElementById("paladins").innerHTML = paladins;
		}
	};
	
	function hardReset(){
	//set all variables to zero, delete cookies
	var answer
		answer = confirm("Are you sure you want to hard reset? You will LOSE ALL YOUR DATA!");
		if(answer == true){
			deleteCookie();
			gold = 0;
			souls = 0;
			iron = 0;
			faith = 0;
			peasants = 0;
			miners = 0;
			minesOpened = false;
			barracksOpened = false;
			cathedralOpened = false;
			tavernpeasants = 0;
			paladins = 0;
			priests = 0;
			weapons = 0;
			location.reload(false);
		}
	};
			