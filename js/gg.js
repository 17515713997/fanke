function img(){
		var xmlhttp = getXMLHTTP();
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				console.log(xmlhttp.responseText);
				var arr = JSON.parse(xmlhttp.responseText);
				console.log(arr);
				for(var i = 0;i<arr.length;i++){
					var li = document.createElement("li");
					var p = document.createElement("p");
					var img = document.createElement("img");
					img.src = "../images/"+arr[i].img;
					p.appendChild(img);
					li.appendChild(p);
					document.querySelector("#div .tabs ul").appendChild(li);
					var p = document.createElement("p");
					var a = document.createElement("a");
					a.innerHTML = arr[i].name;
					p.appendChild(a);
					li.appendChild(p);
					var p = document.createElement("p");
					var span = document.createElement("span");
					p.innerHTML = "售价:￥";
					span.innerHTML = arr[i].price;
					p.appendChild(span);
					li.appendChild(p);
				}
			}
		}
		xmlhttp.open("get","../php/gg.php",true);
		xmlhttp.send(true);
	}
img();