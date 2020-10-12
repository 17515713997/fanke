<?php
	header("Content-type:text/html;charset=utf8");
	@$_addcarId = $_REQUEST["addcarId"];
	$_conn = mysqli_connect("localhost", "root", "", "vancl");	
	$_arr = array();
	if(!$_conn){
		$_arr["_result"] = "fail";
		$_arr["msg"] = mysqli_connect_error();
	}	
	$_sql="SET NAMES UTF8";
	mysqli_query($_conn,$_sql);
	$_sql = "select * from addshop WHERE addcarId='$_addcarId'";
	$_result = mysqli_query($_conn,$_sql);
	if($_result){
		$_sql = "DELETE FROM addshop WHERE addcarId='$_addcarId'";
		$_result = mysqli_query($_conn,$_sql);
	}
	echo json_encode($_arr);
?>