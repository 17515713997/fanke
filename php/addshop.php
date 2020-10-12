<?php
	header("Content-type:text/html;charset=utf8");
	
	$_userName=$_REQUEST["user"];
	$_sid=$_REQUEST["sid"];
	$_num=$_REQUEST["shopNum"];
	$_shopTitle=$_REQUEST["shopTitle"];
	$_price=$_REQUEST["price"];
	$_img=$_REQUEST["smallImg"];
	$_size=$_REQUEST["size"];
	$_time=time()*1000;
	
	$_arr=array();
	
	$_conn=mysqli_connect("localhost","root","","vancl");
	
	if(!$_conn){
		$_arr["resu"]="fail";
		$_arr["msg"]=mysqli_connect_error();
	}
		
	$_sql="SET NAMES UTF8";
	mysqli_query($_conn,$_sql);
	
	$_sql="SELECT * FROM addshop WHERE sid= '$_sid' AND phoneUser='$_userName' AND sSmallImg='$_img' AND shopTitle='$_shopTitle' AND size='size'";
	$_result=mysqli_query($_conn,$_sql);
	
	$_rows=mysqli_fetch_assoc($_result);
	if($_rows>=1){
		$_num += $_rows["shopNum"];
		
		$_sql="UPDATE addshop SET shopNum='$_num' WHERE sid= '$_sid' AND phoneUser='$_userName' AND sSmallImg='$_img' AND shopTitle='$_shopTitle' AND size='size'";
		$_result=mysqli_query($_conn,$_sql);
		if($_result){
			$_arr["_result"]="ok";
			$_arr["msg"]="UPDATE success";
		}else{
			$_arr["_result"]="fail";
			$_arr["msg"]="UPDATE error";
		}
		
		
		
	}else{//在数据库中取到数据
		$_sql="INSERT INTO addshop VALUES (null,'$_sid','$_shopTitle','$_num','$_userName','$_price','$_img','$_size','$_time')";
		$_result=mysqli_query($_conn,$_sql);
		
		if($_result){
			$_arr["_result"]="ok";
			$_arr["msg"]="add success";
		}else{
			$_arr["_result"]="fail";
			$_arr["msg"]="add error";
		}
	}
	
	echo json_encode($_arr);
?>