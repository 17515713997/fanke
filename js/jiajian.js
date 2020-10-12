function aaaa() {
	var xq = document.querySelectorAll(".xq");
	var jian = document.querySelectorAll("a.jian");
	var jia = document.querySelectorAll("a.jia");
	var zhong = document.querySelector("input.zhong").value;
	var n6 = document.querySelectorAll(".xq li:nth-of-type(5)");
	var n4 = document.querySelectorAll(".xq li:nth-of-type(7)");
	var mon = document.querySelector("#money");
	var num = document.querySelector("#num");
	var ipt = document.querySelectorAll("#IPT");
	for(var u = 0; u < jian.length; u++) {
		jian[u].onclick = function() {
			if(this.nextSibling.value > 1){
				var mon1 = 0;
				this.nextSibling.value--;
				num.innerHTML--;
				this.parentNode.parentNode.nextSibling.innerHTML = "￥"+(this.parentNode.parentNode.previousSibling.childNodes[0].innerHTML.split("￥")[1] * this.nextSibling.value).toFixed(2);
				for(var k = 0; k < n4.length; k++) {
					mon1 += n4[k].innerHTML.split("￥")[1] * 1;
				}
				mon.innerHTML = mon1;
			}
		}
	}
	for(var p = 0; p < jia.length; p++) {
		jia[p].index = p;
		jia[p].onclick = function() {
			var mon1 = 0;
			num.innerHTML++;
			this.previousSibling.value++;
			this.parentNode.parentNode.nextSibling.innerHTML = "￥"+(this.parentNode.parentNode.previousSibling.childNodes[0].innerHTML.split("￥")[1] * this.previousSibling.value).toFixed(2);
			for(var k = 0; k < n4.length; k++) {
				mon1 += n4[k].innerHTML.split("￥")[1] * 1;
			}
			mon.innerHTML = mon1;
		}	
	}

	var n7 = document.querySelectorAll(".xq li:nth-of-type(7)");
	for(var c = 0; c < n7.length; c++) {
		var oSc = document.querySelectorAll(".clear");
		oSc[c].index = c;
		oSc[c].onclick = function() {
			if(confirm("是否删除")) {
				this.parentNode.parentNode.remove();
				console.log(this.index);
				num.innerHTML--;
				var money = 0;
					$(".shop ul.xq").each(function(_a, obj) {
					money += $(obj).find("li.li").html().split("￥")[1] * 1;
				})
				$("#money").html(money); 
				var oUl = document.querySelectorAll("ul.xq");
				console.log(this.name);
				$.ajax({
					type: "POST",
					async: true,
					data: "addcarId=" + this.name,
					url: "../php/delete.php",
					success: function(data) {
						console.log(data);
					}
				})
			}
		}
	}
	var Dlt = document.querySelector("#delete");
	Dlt.onclick = function() {
		if(confirm("是否全部删除")) {
			this.parentNode.parentNode.parentNode.childNodes[1].childNodes[2].remove();
		}
	}
}
