<?php
	$_phone=$_POST["phone"];
	$_pwd=$_POST["pwd"];
	$_phoneName=$_POST["phoneName"];
	$_Code=$_POST["Code"];
	
	$_conn=mysqli_connect("localhost","root","","vancl");
	if(!$_conn){
		die("数据库连接失败");
	}
	
	$_sql="SET NAMES UTF8";
	mysqli_query($_conn,$_sql);
	
	$_sql="SELECT phone FROM userload WHERE phone='$_phone'";
	$_result=mysqli_query($_conn,$_sql);
	$_rows=mysqli_fetch_assoc($_result);
	if($_rows>=1){
		$_arr["phone_result"]="repeat";
		$_arr["msg"]="该用户已经注册！";
	}else{
		$_sql="INSERT INTO userload VALUES(null,'$_phone','$_pwd','$_phoneName','$_Code')";
		$_result=mysqli_query($_conn, $_sql);
		
		if($_result){
			$_arr["phone_result"]="ok";
			$_arr["msg"]="ok!";
		}else{
			$_arr["phone_result"]="fail";
			$_arr["msg"]=mysqli_error($_conn);
		}
	}
	
	
	
	echo json_encode($_arr);
?>