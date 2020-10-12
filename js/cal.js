function simg(){
		var xmlhttp = getXMLHTTP();
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				console.log(xmlhttp.responseText);
				var arr = JSON.parse(xmlhttp.responseText);
				console.log(arr);
				for(var i = 0;i<arr.length;i++){
					var li = document.createElement("li");
					var a = document.createElement("a");
					var oImg = document.createElement("img");
					document.querySelector("#the ul").appendChild(li);
					oImg.src = "../images/" + arr[i].sImg;
					li.appendChild(a);
					a.appendChild(oImg);
					var a = document.createElement("a");
					li.appendChild(a);
					a.innerHTML = arr[i].name;
					var p = document.createElement("p");
					li.appendChild(p);
					p.innerHTML = "售价:￥";
					var span = document.createElement("sapn");
					p.appendChild(span);
					span.innerHTML = arr[i].prcie;
//					var a = document.createElement("a");
//					var oImg = document.createElement("img");
//					oImg.src = "../images/" + arr[i].sImg;
//					document.querySelector("#the ul").appendChild(a);
//					a.appendChild(oImg);
//					a.href = "sy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].caid;
				}
			}
		}
		xmlhttp.open("get","../php/cal.php",true);
		xmlhttp.send(true);
	}
simg();