<?php

	$_user=$_REQUEST["phoneing"];
	$_pwd=$_REQUEST["mima"];
	$_conn=mysqli_connect("localhost","root","","vancl");
	if(!$_conn){
		$_arr["result"]="err";
		$_arr["msg"]=mysqli_error($_conn);
	}
	
	$_sql="SET NAMES UTF8";
	mysqli_query($_conn,$_sql);
	
	$_sql="SELECT phone FROM userload WHERE phone='$_user'";
	$_result=mysqli_query($_conn,$_sql);
	if(($_rows=mysqli_fetch_assoc($_result))>=1){
		$_sql="SELECT phone FROM userload WHERE phone='$_user' AND pwd='$_pwd'";
		$_result=mysqli_query($_conn,$_sql);
		if(($_rows=mysqli_fetch_assoc($_result))>=1){
			$_arr["result"]="ok";
			$_arr["msg"]=$_rows;
		}else{
			$_arr["result"]="fail";
			$_arr["msg"]="密码不正确";
		}
	}else{
		$_arr["result"]="noregister";
		$_arr["msg"]="该用户未注册，请先注册";
	}
	echo json_encode($_arr);
?>