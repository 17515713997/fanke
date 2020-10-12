<?php
	$_phone=$_POST["phone"];
	
	$_conn=mysqli_connect("localhost","root", "", "vancl");
	if(!$_conn){
		die("数据库连接失败");
	}
	$_sql="SELECT phone FROM userload WHERE phone=$_phone";
	$_result=mysqli_query($_conn,$_sql);
	
	$_rows=mysqli_fetch_assoc($_result);
	if($_rows>=1){
		$_arr["phone"]="fail";
		$_arr["msg"]="此手机号已注册，请更换手机号，或使用该手机号登录</a>";
	}else{
		$_arr["phone"]="ok";
		$_arr["msg"]="";
	}
	echo json_encode($_arr);
	
?>