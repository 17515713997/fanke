window.onload = function() {
	//普通登录
	var oShow = document.querySelector(".show");
	console.log(oShow);
	var aIpt = oShow.querySelectorAll("input");
	console.log(aIpt);
	//快速登录
	var oShow_Two = document.querySelector(".two");
	console.log(oShow_Two);
	var aTwo_Ipt = oShow_Two.querySelectorAll("input");
	console.log(aTwo_Ipt);

	var oCode = document.getElementById("code");
	console.log(oCode);
	var oLable = document.querySelector("label");
	console.log(oLable);

	var oHYZ = document.getElementById("huanyizhang");
	console.log(oHYZ);
	var oYZ = document.querySelector("input.yy");
	console.log(oYZ);
	var REG = {
		yanzheng: false,
		iphone: false,
		regCode: false,
		Password: false,
		repwd: false,
		che: false
	};

	function signbox() {
		var oCenter = document.getElementsByClassName("center")[0];
		console.log(oCenter);
		var oDl = oCenter.querySelector("dl.tt");
		console.log(oDl);
		var odenglu = oDl.querySelector("dd.denglu");
		console.log(odenglu);
		var ozhuce = oDl.querySelector("dd.zhuce");
		console.log(ozhuce);
		var oA = document.querySelectorAll("#ss");
		console.log(oA);
		var oUl = document.querySelector("#signning");
		console.log(oUl);
		var oLi = document.querySelectorAll("li.signn");
		console.log(oLi);
		var oShow = document.querySelectorAll("div.show");
		console.log(oShow);
		var ofount = document.querySelectorAll("a.fount");
		console.log(ofount);
		var osign = document.getElementById("sign_show");
		console.log(osign);
		var oIpt = osign.querySelectorAll("input.fouce");
		console.log(oIpt);
		var osign = document.getElementById("sign_show");
		console.log(osign);
		odenglu.style.display = "block";
		oA[0].onclick = function() {
			ozhuce.style.display = "block";
			odenglu.style.display = "none";

		}
		oA[1].onclick = function() {
			ozhuce.style.display = "none";
			odenglu.style.display = "block";

		}

		oLi[0].onclick = function() {
			oLi[1].style.background = "#f5f5f5";
			oLi[1].style.color = "#000";
			oLi[0].style.background = "#b42025";
			oLi[0].style.color = "#fff";
			oShow[1].style.display = "none";
			oShow[0].style.display = "block";
			ofount[0].style.display = "block";
		}

		oLi[1].onclick = function() {
			oLi[0].style.background = "#f5f5f5";
			oLi[0].style.color = "#000";
			oLi[1].style.background = "#b42025";
			oLi[1].style.color = "#fff";
			oShow[0].style.display = "none";
			oShow[1].style.display = "block";
			ofount[0].style.display = "none";
		}

		for(var i = 0; i < oIpt.length; i++) {
			oIpt[i].index = i;
			oIpt[i].onfocus = function() {
				for(var j = 0; j < oIpt.length; j++) {
					oIpt[j].style.borderColor = "gray";
				}
				console.log(oIpt[this.index]);
				oIpt[this.index].style.borderColor = "#d2e3fe";
			}
		}

		//获取验证码
		//	var ohuanyizhang = document.querySelector("#huanyizhang");
		//	
		//	var tempNum = 120;
		//	console.log(ohuanyizhang);
		//	var timerCode=null;
		//	function getCode(n) {
		//		clearInterval(timerCode);
		//		tempNum = 120;
		//		var arr = "1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
		//		var str = arr.split("").sort();
		//		str = "";
		//		for(var i = 0; i < n; i++) {
		//			str += arr[parseInt(Math.random() * arr.length)];
		//		}
		//		if(n==4){
		//			fSession(str,"");
		//			timerCode=setInterval(removeCode,1000);
		//		}
		//		return str;
		//	}
		//	aIpt[3].parentNode.querySelector("u").innerHTML =  getCode(4);	
	}
	signbox();

	var oSign = document.querySelector("div.SIGN");
	console.log(oSign);

	console.log(aIpt);

	//登录页面
	oSign.onclick = function() {
		var i = 0;

		var errorArr = [
			"用户名不能为空",
			"密码不能为空",
		]
		if(aIpt[i].value && aIpt[1].value) {
			alert("有值");
			console.log(document.querySelector(".SIGN input"));
			document.querySelector(".SIGN input").value = "正在验证";
			var xmlhttp = getXMLHTTP();
			xmlhttp.onreadystatechange = function() {
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					console.log(xmlhttp.responseText);
					var data = JSON.parse(xmlhttp.responseText);
					console.log(data);
					alert(data.msg);
					if(data.phone == "ok") {
						alert("失败");
						console.log(aIpt[1].nextSibling.nextSibling);
						aIpt[1].nextSibling.nextSibling.innerHTML = "账户不存在";
						Preservation("");
						
					} else {
						alert("成功");
						aIpt[1].nextSibling.nextSibling.innerHTML = "";
						var obj = {
							user: data.msg.phone
						}
						console.log(obj);
						var str = JSON.stringify(obj);
						console.log(str);
						window.localStorage.setItem("fankeuser", str);
						window.open("sy.html");
						
						Preservation(obj.user);
					}
				}
			}
			console.log(aIpt[0].value);
			xmlhttp.open("POST", '../php/sign.php', true);
			xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xmlhttp.send("phoneing=" + aIpt[0].value + "&mima=" + aIpt[1].value);

			document.querySelector(".SIGN input").value = "登录";
		} else if(!aIpt[i].value) {
			var oP = aIpt[i].nextSibling.nextSibling;
			oP.style.border = "1px solid red";
			oP.style.background = "#fff6f7";
			oP.innerHTML = errorArr[0];
			aIpt[i].focus();
		} else if(aIpt[i].value && aIpt[1].value == "") {
			var aP = aIpt[1].nextSibling.nextSibling;
			aP.style.border = "1px solid red";
			aP.style.background = "#fff6f7";
			aP.innerHTML = errorArr[1];
			aIpt[1].focus();
		}

	}

	var SIGN = {
		phone: false
	};

	aTwo_Ipt[0].onblur = function() {
		if(aTwo_Ipt[0].value.length == 11) {
			console.log("是11位");
			var regExp = /^1[3-9][0-9]{9}$/;
			if(regExp.test(aTwo_Ipt[0].value) && aTwo_Ipt[0].value != "") {
				document.querySelector("div.two p#yz").innerHTML = "";
				console.log(document.querySelector("div.two p#yz"));
				aTwo_Ipt[1].onclick = function() {
					aTwo_Ipt[1].value == xunhuan();
				}
				SIGN.phone = aTwo_Ipt[0].value;
			} else {

				aTwo_Ipt[1].onclick = function() {
					document.querySelector("div.two p#yz").innerHTML = "请输入有效的手机号";
					document.querySelector("div.two p#yz").style.color = "red";
				}
				SIGN.phone = false;
			}

		} else {
			aTwo_Ipt[1].onclick = function() {
				document.querySelector("div.two p#yz").innerHTML = "请输入有效的手机号";
				document.querySelector("div.two p#yz").style.color = "red";
			}
		}

	}

	aTwo_Ipt[2].onblur = function() {
		var oLab = document.querySelector("label.two_tt");
		console.log(oLab.innerHTML);
		if(aTwo_Ipt[2].value.toLowerCase() == oLab.innerHTML.toLowerCase()) {
			document.querySelector("li.er span.kbq").innerHTML = "一致";
		} else {
			document.querySelector("li.er span.kbq").innerHTML = "不一致";
		}
	}

	aTwo_Ipt[3].onblur = function() {

		if(aTwo_Ipt[3].value == aTwo_Ipt[1].value) {
			var xmlhttp = getXMLHTTP();
			console.log(aTwo_Ipt[1].value);
			xmlhttp.onreadystatechange = function() {
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					console.log(xmlhttp.responseText);
					var obj = JSON.parse(xmlhttp.responseText);
					console.log(obj);
				}
			}

		} else {

			alert("bu nyangyiyang");
		}

	}

	var oSign_two = document.querySelector("div.SIGN_two input");
	console.log(oSign_two);

	oSign_two.onclick = function() {
		var num = 0;
		var i = 0;
		for(var j in SIGN) {
			console.log(j + "的值为：" + SIGN[j]);
			if(SIGN[j] == false) {
				alert("mei");
				Preservation(aIpt[0].value);
			} else {
				num++;
				Preservation("");
			}
			i++;
		}

		if(num == i) {
			alert("scuuse");
			var phoneName = xunhuan();
			var xmlhttp = getXMLHTTP();
			xmlhttp.onreadystatechange = function() {
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					console.log(xmlhttp.responseText);
					var arr = JSON.parse(xmlhttp.responseText);
					if(arr["phone"] == "ok") {

						window.open("sy.html");

					}
				}
			}
			xmlhttp.open("post", "../php/sign_two.php", true);
			xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xmlhttp.send("phone=" + aTwo_Ipt[0].value);
			window.open("sy.html");

		}

	}
	
	//本地存储
	var storageArr=[];
	var ohref=window.location.href;
	console.log(ohref);
	function Preservation(user){
		var storageHref=window.localStorage.getItem(ohref);
		storageHref=storageHref?JSON.parse(storageHref):{};
		storageHref.User=user;
		console.log(storageHref.User);
		var str=JSON.stringify(storageHref);
		console.log(str);
		window.localStorage.setItem(ohref,str);
		storageArr.push(storageHref);
		console.log(storageArr);
	}
	var storageHref=window.localStorage.getItem(ohref);
	if(storageHref){
		
		      	storageHref=JSON.parse(storageHref);
			
			console.log(storageHref.User);
			aIpt[0].value=storageHref.User;
			aIpt[0].style.background="wheat";
			
	}else{
		window.localStorage.clear();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	//注册页面
	var Ipt = document.querySelectorAll(".register_box input");
	console.log(Ipt);
	Ipt[0].onblur = function() {

		if(Ipt[0].value.toLowerCase() == Ipt[1].value.toLowerCase()) {
			Ipt[0].parentNode.querySelector("span.alert").style.display = "none";
			REG.yanzheng = Ipt[0].value;
		} else {
			alert('a');
			Ipt[0].parentNode.querySelector("span.alert").style.display = "block";
			Ipt[0].parentNode.querySelector("span.alert").style.color = "red";
			REG.yanzheng = false;
		}

	}
	var alertArr = [
		"请填写真实的手机号，并验证",
		"请输入手机接收到的验证码",
		"6-16位字符，可使用字母，数字符号的组合",
		"请再次输入登录密码，两次输入必须一致"
	]

	Ipt[2].onfocus = function() {
		console.log(document.querySelector("li.shoujihao span"));
		document.querySelector("li.shoujihao span").innerHTML = alertArr[0];
		Ipt[2].style.borderColor = "#d2e3fe";
	}
	Ipt[2].onblur = function() {
		document.querySelector("li.shoujihao span").innerHTML = "";
		Ipt[2].style.borderColor = "gainsboro";
		if(Ipt[2].value.length == 11) {
			console.log("是11位");
			//定义正则表达式，验证输入的数据是否符合标准
			var regExp = /^1[3-9][0-9]{9}$/;
			if(regExp.test(Ipt[2].value)) {
				Ipt[3].onclick = function() {
					xunhuan();
				}
				var xmlhttp = getXMLHTTP();
				xmlhttp.onreadystatechange = function() {
					if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						console.log(xmlhttp.responseText);
						var obj = JSON.parse(xmlhttp.responseText);
						console.log(obj);

						if(obj.phone != "ok") {
							document.querySelector("li.shoujihao span").innerHTML = "对不起，该用户名已经被人占用";
							document.querySelector("li.shoujihao span").style.color = "red";
							REG.iphone = false;
						} else {

							document.querySelector("li.shoujihao span").innerHTML = "";
							REG.iphone = Ipt[2].value;
						}
					}
				}
				console.log(Ipt[2].value);
				xmlhttp.open("POST", '../php/user.php', true);
				xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xmlhttp.send("phone=" + Ipt[2].value);

			} else {
				Ipt[3].style.disabled = "disabled";
				document.querySelector("li.shoujihao span").innerHTML = "请输入有效的手机号";
			}

		} else {
			document.querySelector("li.shoujihao span").innerHTML = "请输入有效的手机号";
		}

	}

	Ipt[4].onfocus = function() {
		console.log(document.querySelector("li.phone span"));
		document.querySelector("li.phone span").innerHTML = alertArr[1];
		Ipt[4].style.borderColor = "#d2e3fe";
	}
	Ipt[4].onblur = function() {
		document.querySelector("li.phone span").innerHTML = "";
		Ipt[4].style.borderColor = "gainsboro";
		if(Ipt[4].value == Ipt[3].value) {
			document.querySelector("li.phone span").innerHTML = "";
			REG.regCode = Ipt[4].value;
		} else {
			document.querySelector("li.phone span").innerHTML = "输入的验证码错误，请重试";
			REG.regCode = false;
		}

	}

	Ipt[5].onfocus = function() {
		console.log(document.querySelector("li.mima span"));
		document.querySelector("li.mima span").innerHTML = alertArr[2];
		Ipt[5].style.borderColor = "#d2e3fe";

	}
	Ipt[5].onblur = function() {
		var This = this;
		var elem = function(temp) {
			return document.querySelector(temp);
		}
		elem("li.mima span").innerHTML = "";
		Ipt[5].style.borderColor = "gainsboro";
		if(This.value.length < 6 || This.value.length > 15) {
			elem("li.mima span").innerHTML = "您输入的密码超出范围，请重新输入";
			REG.Password = false;
		} else {
			if(/^(?![0-9\W]+$)(?![a-zA-Z_\W]+$)(?![0-9a-zA-Z]+$)[0-9a-zA-Z_\W]{6,15}$/.test(this.value)) {
				elem("li.mima span").innerHTML = "密码设置安全，放心使用";
			} else if(/^((?=.*[a-zA-Z])(?=.*\d)|(?=.*\d)(?=.*[\W_]) |(?=.*[a-zA-Z])(?=.*[\W_]) )[0-9a-zA-Z_\W]{6,15}$/.test(this.value)) {
				elem("li.mima span").innerHTML = "试试字母、符号、数字的组合更安全";
			} else {
				elem("li.mima span").innerHTML = "密码过于简单";
			}
			REG.Password = Ipt[5].value;
		}

	}
	Ipt[6].onfocus = function() {
		console.log(document.querySelector("li.repeat span"));
		document.querySelector("li.repeat span").innerHTML = alertArr[3];
		Ipt[6].style.borderColor = "#d2e3fe";
	}
	Ipt[6].onblur = function() {
		document.querySelector("li.repeat span").innerHTML = "";
		Ipt[6].style.borderColor = "gainsboro";
		if(Ipt[5].value === Ipt[6].value) {
			document.querySelector("li.repeat span").innerHTML = "";
			REG.repwd = Ipt[6].value;
		} else {
			document.querySelector("li.repeat span").innerHTML = "两次密码不一致";
			document.querySelector("li.repeat span").style.color = "red";
			REG.repwd = false;
		}
	}

	Ipt[7].onclick = function() {
		if(this.checked) {
			alert("选中");
			REG.che = true;
			document.querySelector("input#Register").style.background = "#b52024";
		} else {
			alert("未选中");
			REG.che = false;
			document.querySelector("input#Register").style.background = "#9a9a9a";
			document.querySelector("input#Register").style.disabled = "disabled";
		}
	}

	//注册
	var oZhuce = document.querySelector("#Register");
	console.log(oZhuce);
	oZhuce.onclick = function() {
		var num = 0;
		var i = 0;
		for(var j in REG) {
			console.log(j + "的值为：" + REG[j]);
			if(REG[j] == false) {
				if(j != "che") {
					alert('a');
					console.log(document.querySelector("li.dibu span em"));
					document.querySelector("input#Register").innerHTML = "";
				} else {
					if(!aIpt[i].value) { //没有值
						Ipt[0].parentNode.querySelector("span.alert").style.display = "block";
					}
					document.querySelector("input#Register").innerHTML = "您必须同意当当服务条款后，才能提交注册";
				}

			} else {
				num++;
			}
			i++;
		}

		if(num == i) {
			alert("scuuse");
			var phoneName = xunhuan();
			var xmlhttp = getXMLHTTP();
			xmlhttp.onreadystatechange = function() {
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					console.log(xmlhttp.responseText);
					var arr = JSON.parse(xmlhttp.responseText);
					if(arr["phone"] == "ok") {

						window.open("sy.html");

					}
				}
			}
			xmlhttp.open("post", "../php/REG.php", true);
			xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xmlhttp.send("phone=" + REG.iphone + "&pwd=" + REG.Password + "&phoneName=" + phoneName + "&Code=" + REG.regCode);

		}

	}

	//获取短信验证码

	function xunhuan() {
		var phoneName;
		var arr = "1234567890";
		var str = arr.split("").sort();
		phoneName = "";
		for(var i = 0; i < 6; i++) {
			phoneName += arr[parseInt(Math.random() * arr.length)];
			console.log(phoneName);
			Ipt[3].value = phoneName;
			console.log(Ipt[3].value);
			aTwo_Ipt[1].value = phoneName;
		}
		return phoneName = phoneName;

	}

	//验证码获取
	function yzm() {
		var arr = "1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
		var str = arr.split("").sort();
		str = "";
		for(var i = 0; i < 6; i++) {
			str += arr[parseInt(Math.random() * arr.length)];
			console.log(str);
			oLable.innerHTML = str;
			oYZ.value = str;

		}
		return str;
	}

	yzm();

	oHYZ.onclick = function() {
		oLable.innerHTML = yzm();
	}

	oYZ.onclick = function() {
		oLable.innerHTML = yzm();
	}

}