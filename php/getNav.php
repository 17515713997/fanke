<?php
	//连接数据库，访问服务器
	$_conn = mysqli_connect("localhost", "root", "","vancl");
	
	//判断连接是否失败
	if(!$_conn){
		$_arr[_result] = "fail";
		$_arr[_msg] = mysqli_connect_error($_conn);
	}
	//设置字符集
	$_sql = "SET NAMES UTF8";
	//执行字符集
	mysqli_query($_conn,$_sql);
	//设置查询语句
	$_sql = "SELECT name,href FROM nav";
	//开始查询并得到持续性结果
	$_result = mysqli_query($_conn,$_sql);
	//判断查询结果，如果有值，则把值添加到$_arr中
	if($_result){
		while(($_rows = mysqli_fetch_assoc($_result)) != null){
			$_arr[] = $_rows;
		}
	}else{//没有值，输出失败
		$_arr[_result] = "fail";
		$_arr[_msg] = "没有查询到结果";
	}
	//没有值输出失败
	echo json_encode($_arr)
?>