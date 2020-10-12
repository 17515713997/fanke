
//下载推荐

function img(){
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
					oImg.src = "../images/" + arr[i].Timg;
					document.querySelector("#pic ul").appendChild(li);
					li.appendChild(a);
					li.appendChild(h3);
					h3.innerHTML = arr[i].name;
					em.innerHTML = arr[i].price+"元";
					span.innerHTML = "充值购买相当于";
					h3.appendChild(span);
					span.appendChild(em);
					a.appendChild(oImg);
					a.href = "xqy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].sid;
				}
			}
		}
		xmlhttp.open("get","../php/com.php",true);
		xmlhttp.send(true);
	}
img();






//早秋换新  活动专区

function iMG(){
		var xmlhttp = getXMLHTTP();
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				//console.log(xmlhttp.responseText);
				var arr = JSON.parse(xmlhttp.responseText);
				//console.log(arr);
				for(var i = 0;i<arr.length;i++){
					var a = document.createElement("a");
					var oImg = document.createElement("img");
					oImg.src = "../images/" + arr[i].iMg;
					document.querySelector("#cs").appendChild(a);
					a.appendChild(oImg);
					a.href = "xqy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].gid;
				}
			}
		}
		xmlhttp.open("get","../php/IIMMGG.php",true);
		xmlhttp.send(true);
	}
iMG();


//新品推荐

function Newimg(){
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
					a.href = "xqy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].sid;
				}
			}
		}
		xmlhttp.open("get","../php/Iimg.php",true);
		xmlhttp.send(true);
	}
Newimg();


//T恤限量
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
					oA.href = "xqy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].sid;
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
					oA.href = "xqy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].sid;
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



//优选推荐
function BeforeiMG(){
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
					a.href = "xqy.html?msg=" + arr[i].firstId + '-' + arr[i].secondId + '-' + arr[i].thirdId + '-' + arr[i].sid;
				}
			}
		}
		xmlhttp.open("get","../php/pic.php",true);
		xmlhttp.send();
	}
BeforeiMG();




