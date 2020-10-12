<?php
	header("Content-type:text/html;charset=utf8");

	$_conn = mysqli_connect("localhost", "root", "", "vancl");	
	$_arr = array();
	if(!$_conn){
		$_arr["_result"] = "fail";
		$_arr["msg"] = mysqli_connect_error();
	}	
	$_sql = "SET NAMES utf8";
	mysqli_query($_conn,$_sql);
	//可以设置为分页查询
	$_sql = "SELECT * FROM  homeshow ";
	$_result = mysqli_query($_conn,$_sql);
	if($_result){
		while(($_rows = mysqli_fetch_assoc($_result)) != null){
			$_arr[] = $_rows;
		}
	}
	echo json_encode($_arr);
?>