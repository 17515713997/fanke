<?php
	header("Content-type:text/html;charset=utf8");
	$_arr = array();	
	$_conn = mysqli_connect("localhost","root","","vancl");
	if(!$_conn){
		$_arr["_result"] = "err";
		$_arr["msg"] = mysqli_connect_error();
		break;
	}	
	$_sql = "SET NAMES UTF8";
	mysqli_query($_conn,$_sql);
	
	$_sql = "SELECT * FROM collection";
	$_result = mysqli_query($_conn,$_sql);
	if($_result){
		while(($_rows = mysqli_fetch_assoc($_result)) != null){
			$_arr[] = $_rows;
		}
	}
	echo json_encode($_arr);
?>