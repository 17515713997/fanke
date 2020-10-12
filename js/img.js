function img(){
		var xmlhttp = getXMLHTTP();
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				//console.log(xmlhttp.responseText);
				var arr = JSON.parse(xmlhttp.responseText);
				//console.log(arr);
				for(var i = 0;i<arr.length;i++){
					var a = document.createElement("a");
					var oImg = document.createElement("img");
					oImg.src = "../images/" + arr[i].Iimg;
					document.querySelector("#clo").appendChild(a);
					a.appendChild(oImg);
					a.href = "sy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].mid;
				}
			}
		}
		xmlhttp.open("get","../php/Iimg.php",true);
		xmlhttp.send(true);
	}
img();