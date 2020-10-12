<?php
	header("Content-type:text/html;charset=utf8");
	$_user=$_REQUEST["user"];
	
	$_conn=mysqli_connect("localhost","root","","vancl");
	if(!$_conn){
		$_arr["retust"]="fail";
		$_arr["msg"]=mysqli_connect_error();
	}
	$_arr = array();
	$_sql="SET NAMES UTF8";
		mysqli_query($_conn,$_sql);
	
	$_sql="SELECT addcarId,addshop.sid,addshop.shopTitle,addshop.shopNum,addshop.phoneUser,addshop.sPrice,addshop.sSmallImg,addshop.size,addshop.time,collection.firstId,collection.secondId,collection.thirdId FROM addshop,collection WHERE addshop.phoneUser='$_user' AND addshop.sid=collection.sid ORDER BY addshop.time";
	$_result = mysqli_query($_conn,$_sql);
	if($_result){
		while(($_rows = mysqli_fetch_assoc($_result))!=null){
			$_arr[] = $_rows;
		}
	}else{
		$_arr["_result"] = "fail";
		$_arr["msg"] = mysqli_error($_conn);
	}
	
	echo json_encode($_arr);
?>