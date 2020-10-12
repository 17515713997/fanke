function getIndexPageCommodityShow() {
	var xmlhttp = getXMLHTTP();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
			//console.log(xmlhttp.responseText);
//			//取数据
			var arr = JSON.parse(xmlhttp.responseText);
			//console.log(arr);
//				//循环数据
				for(var i = 0; i < arr.length; i++) {
					var oLi = document.createElement("li");
					var oA = document.createElement("a");
//					//注意：a的href属性，要拼接id值
					oA.href = "sy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].sid;
					oA.setAttribute("target", "_blank");
					var oImg = document.createElement("img");
					oImg.src = "../images/" + arr[i].sBigImg;
					oA.appendChild(oImg);
					oLi.appendChild(oA);
					document.querySelector("#kill ul").appendChild(oLi);
					var div = document.createElement("div");
					div.setAttribute("class", "ame");
					oA = document.createElement("a");
					oA.style.fontSize = "16px";
					oA.className = "oA";
					//注意：a的href属性，要拼接id值
					oA.href = "sy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].sid;
					oA.setAttribute("target", "_blank");
					oA.innerHTML = arr[i].shopTitle;
					div.appendChild(oA);
					oLi.appendChild(div);
					

					oP = document.createElement("div");
					oP.setAttribute("class", "price");
					var oSpan = document.createElement("span");
					oSpan.className = "pr1";
					oSpan.innerHTML = "￥" ;
					oP.appendChild(oSpan);
					var em = document.createElement("em");
					em.innerHTML = parseFloat(arr[i].sPrice1).toFixed(2);
					oSpan.appendChild(em);
					
					var oSpan = document.createElement("span");
					oSpan.className = "pr2";
					oSpan.innerHTML = "￥" ;
					oP.appendChild(oSpan);
					var em = document.createElement("em");
					em.innerHTML = parseFloat(arr[i].sPrice3).toFixed(2);
					oSpan.appendChild(em);
					
					if(arr[i].sPrice2) {
						var oSpan = document.createElement("span");
						oSpan.className = "pr3";
						oSpan.innerHTML = "充值后" ;
						oP.appendChild(oSpan);
						var oEm = document.createElement("em");
						oEm.innerHTML = parseFloat(arr[i].sPrice2).toFixed(2);
						oSpan.appendChild(oEm);
					}
					oLi.appendChild(oP);
					document.querySelector("#kill ul").appendChild(oLi);
				}
		}
	}
	xmlhttp.open("get", "../php/jiazai.php", true);
	xmlhttp.send(true);
}

getIndexPageCommodityShow();