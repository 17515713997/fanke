function gettwo() {
	var xmlhttp = getXMLHTTP();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//			console.log(xmlhttp.responseText);
			var arr = JSON.parse(xmlhttp.responseText);
//			console.log(arr);
			var Li = document.querySelectorAll("#nav ul li.er");
			for(var i=0;i<Li.length;i++){
				var div = document.createElement("div");
				var span = document.createElement("span");
				var ul = document.createElement("ul");
				Li[i].appendChild(div);
				div.appendChild(span);
				div.appendChild(ul);
				div.className = "subNav";
				span.className="red";
				ul.className="ul";
				var subNav = document.querySelectorAll(".subNav");
				for(var s = 0;s<subNav.length;s++){
					Li[s].index = s;
					Li[s].onmouseover = function(){
						subNav[this.index].style.display = "block";
					}
					Li[s].onmouseout = function(){
						subNav[this.index].style.display = "none";
					}
				}
				for(var j=0;j<arr.length;j++){
					if((i + 1) == arr[j].firstId && (j + 1) == arr[j].secondId) {
						var li = document.createElement("li");
						var a = document.createElement("a");
						ul.appendChild(li);
						li.appendChild(a);
						a.innerHTML = arr[j].secondName;
						a.href = arr[j].secondHref;
					}
				}
			}
		}
	}
	xmlhttp.open("get", "../php/gettwo.php", true);
	xmlhttp.send(true);
}
