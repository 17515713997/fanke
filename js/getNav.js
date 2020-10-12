function getNav(){
		var xmlhttp = getXMLHTTP();
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				var arr = JSON.parse(xmlhttp.responseText);
				for(var i = 0;i<arr.length;i++){
					var li = document.createElement("li");
					var a = document.createElement("a");
					var em = document.createElement("em"); 
					var span = document.createElement("span");
					span.className = "span";
					a.innerHTML = arr[i].name;
					a.href = arr[i].href;
					li.appendChild(a);
					a.appendChild(em);
					li.appendChild(span);
					li.className = "er fl";
					li.id = "er"; 
					em.className ="em";
					em.style = "display:block;width:25px; height:13px; background:url(../images/hot.png) no-repeat scroll; position:absolute;left:67px;top:-5px;";
					document.querySelector("#nav ul").appendChild(li);
					var emm = document.querySelectorAll(".em");
					emm[0].style.display = "none";
					for(var j=3;j<emm.length;j++){
						emm[j].style.display = "none";
					}					
				}
			}
			
		}
		xmlhttp.open("get","../php/getNav.php",true);
		xmlhttp.send(true);
	}