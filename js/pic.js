function iMG(){
		var xmlhttp = getXMLHTTP();
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				//console.log(xmlhttp.responseText);
				var arr = JSON.parse(xmlhttp.responseText);
				//console.log(arr);
				for(var i = 0;i<arr.length;i++){
					var li = document.createElement("li");
					var a = document.createElement("a");
					var oImg = document.createElement("img");
					var h3 = document.createElement("h3");
					var span = document.createElement("span");
					var em = document.createElement("em");
					document.querySelector("#picList ul").appendChild(li);
					li.appendChild(a);
					a.appendChild(oImg);
					li.appendChild(h3);
					h3.innerHTML = arr[i].name;
					span.innerHTML = arr[i].sapn;
					em.innerHTML = arr[i].price;
					h3.appendChild(span);
					span.appendChild(em);
					oImg.src = "../images/" + arr[i].Pimg;
					a.href = "sy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].pid;
				}
			}
		}
		xmlhttp.open("get","../php/pic.php",true);
		xmlhttp.send();
	}
iMG();