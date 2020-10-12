<?php
	//用于获取二级菜单
	$_conn = mysqli_connect("localhost", "root", "", "vancl");	
	if(!$_conn){
		$_arr["resu"] = "fail";
		$_arr["msg"] = mysqli_connect_errno();
	}
	$_sql = "SET NAMES UTF8";
	mysqli_query($_conn,$_sql);
	
	$_sql = "SELECT * FROM  second";
	$_result = mysqli_query($_conn,$_sql);
	
	if($_result){
		while(($_rows = mysqli_fetch_assoc($_result)) != null){
			$_arr[] = $_rows;
		}
	}
	echo json_encode($_arr);
?>