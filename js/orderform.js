		var xian = document.querySelector(".xian");
		var Ul = xian.querySelector("ul");
		var Li = document.querySelectorAll(".li1");
		var form = document.querySelector("#form");
		var one = form.querySelectorAll("div");
		var i = 0;
			Li[i].style.background = "#fafafa";
			Li[i].style.border = "1px solid #a10000";
			Li[i].style.borderBottom = "none";
			Li[i].style.borderTopLeftRadius = "4px";
			Li[i].style.borderTopRightRadius = "4px";
			for(; i < Li.length; i++){
				Li[i].index = i;
				Li[i].onclick = function() {
					var j = 0;
					for(var j = 0; j < one.length; j++) {
						Li[j].style.background = "#fafafa";
						Li[j].style.border = "1px solid #d2d2d2";
						Li[j].style.borderBottom = "none";
						Li[j].style.borderTopLeftRadius = "4px";
						Li[j].style.borderTopRightRadius = "4px";
						one[j].style.display = "block";
					}
					this.style.background = "#fafafa";
					this.style.border = "1px solid #a10000";
					this.style.borderBottom = "none";
					this.style.borderTopLeftRadius = "4px";
					this.style.borderTopRightRadius = "4px";
					one[this.index].style.display = "none";
				}
			}