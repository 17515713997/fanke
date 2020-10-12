function getXMLHTTP() {
	var xmlhttp;
	//浏览是否支持window.XMLHttpRequest对象
	if(window.XMLHttpRequest) {
		//支持：ie7+ firefox Chrome opera Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		//不支持: ie5 ie6
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}