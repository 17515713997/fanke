<?php
	header("Content-type:text/html;charset=utf8");
	
	/*$_first = $_GET["first"];
	$_second = $_GET["second"];*/
	
	$_conn = mysqli_connect("localhost","root","","vancl");
	
	$_arr = array();
	if(!$_conn){
		$_arr["_result"] = "err";
		$_arr["msg"] = mysqli_connect_error();
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