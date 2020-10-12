/*function recommendation(){
	var xmlhttp = getXMLHTTP();
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			console.log(xmlhttp.responseText);
			var arr = JSON.parse(xmlhttp.responseText);
			console.log(arr);
			for(var i = 0;i<arr.length;i++){
				var ul = document.createElement("ul");
				var li = document.createElement("li");
				var img = document.createElement("img");
				var a = document.createElement("a");
				var p = document.createElement("p");
				
			}
		}
	}
	xmlhttp.open("get", "../php/recommendation.php", true);
	xmlhttp.send(true);
}
recommendation();*/

$(function() {
	var HREF = window.location.search;
	console.log(HREF);
	$.ajax({
		type: "get",
		url: "../PHP/recommendation.php",
		async: true,
		data: "",
		success: function(data) {
			var arr = JSON.parse(data);
			console.log(arr);
			$.each($("div.shopBox ul.five li"), function(i, obj) {
				var img = document.createElement("img");
				$(img).attr("src","../images/"+arr[i].Img);
				$(obj).append($(img));
				
				var a = document.createElement("a");
				$(a).html(arr[i].Name);
				$(obj).append($(a));
				
				var p = document.createElement("p");
				$(p).html("售价￥"+arr[i].Price);
				$(obj).append($(p));
			})
		}
	});
})