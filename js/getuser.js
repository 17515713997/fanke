function getuser(){
//	alert("a");
		var str1=window.localStorage.getItem("fankeuser");
		if(str1){
			str1=JSON.parse(str1);
			document.querySelector("span#come").innerHTML="欢迎"+"<a href='../html/personal.html'>"+str1.user+"</a>"+"光临凡客优品"+"<font class='out'>"+"退出"+"</font>";
		}else{
			document.querySelector("span#come").innerHTML='<span>'+"欢迎光临凡客优品"+'</span><a href="sign.html">'+"登录"+'</a><a href="#">'+"注册"+'</a>';
		}
}

function outuser(){
	var str1=window.localStorage.getItem("fankeuser");
		if(str1){
			var oTuichu=document.getElementsByTagName("font")[0];
			str1=JSON.parse(str1);
			oTuichu.onclick=function(){
				alert("退出");
				document.querySelector("span#come").innerHTML='<a href="sign.html">'+"登录"+'</a><a href="sign.html">'+"注册"+'</a>';
				window.localStorage.clear();
			}
		
		}
}