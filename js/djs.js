	var oNew = document.getElementsByClassName("sp")[0];
		function _jdym(){
			var oDate = new Date();
				var daojishi = new Date("2019/9/30");
				
				var temp = daojishi - oDate;
				
				var oshi =  parseInt(temp %(24*60*60*1000) / (60*60*1000));
				if(oshi < 10){
					oshi = oshi < 10? "0" + oshi : oshi;
				}
				var ofen =  parseInt(temp % (24*60*60*1000) % (60*60*1000) / (60*1000));
				if(ofen < 10){
					ofen = ofen < 10? "0" + ofen : ofen;
				}
				var omiao =  parseInt(temp % (24*60*60*1000) % (60*60*1000) % (60*1000) / 1000);
				if(omiao < 10){
					omiao = omiao < 10? "0" + omiao : omiao;
				}
				oNew.getElementsByTagName("em")[1].innerHTML = oshi;
				oNew.getElementsByTagName('em')[2].innerHTML = ofen;
				oNew.getElementsByTagName('em')[3].innerHTML = omiao;
				setTimeout(_jdym,1000);	
			}
_jdym();



