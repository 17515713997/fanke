$(function() {
	//alert("a");
	var HREF = window.location.search;
//	console.log(HREF);
	//var arr = HREF.split("=")[1].split("-");
	$.ajax({
		type: "GET",
		async: true,
		data: "",
		url: "../PHP/xqy.php",
		success: function(data) {
			var arr = JSON.parse(data);
//			console.log(arr);
			$.each($("ol.size li a"), function(i, obj) {
//				console.log(i);
				$("#banner_box li.one span.money").html($(arr)[0].sPrice);
				$("ol.size li a").eq(i).html($(arr)[0].size.split(";")[i]);
//				console.log($(arr)[0].size.split(";")[i]);
			})
			
			$.each($("li.two div"), function(j, obj) {
				$("#banner_box h2.yanse").html($(arr)[0].title.split(",")[0]);
//				console.log(j);
				$("p.color").html($(arr)[0].color.split(",")[0]);
//				console.log($(arr)[0].color.split(",")[j]);
				$("p.color1").html($(arr)[0].color.split(",")[j]);
			});
			
			$.each($("li.five"), function(j, obj) {
//				console.log($(arr)[0].changeColor);
				$("li.five a").html($(arr)[0].changeColor.split(";")[0]);
//				console.log($("li.five a"));
			});
			
			var bigImgArr = $(arr)[0].BigImg.split(";");
//			console.log(bigImgArr);
			for(var j = 3; j < bigImgArr.length; j++) {
				var oLi = '<li class="' + j + '"><img src="../images/' + bigImgArr[j] + '" /></li>';
				$("div.bigPicture ul:eq(1)").append(oLi);
//				console.log($("div.bigPicture ul"));
//				console.log(j);
				$("div.bigPicture ul li.0").css("z-index", "10000");
//				console.log($("div.bigPicture ul li").eq(0));
			};
			for(var j = 0; j < 3; j++) {
				var oLi = '<li class="' + j + '"><img src="../images/' + bigImgArr[j] + '" /></li>';
				$("div.bigPicture ul:eq(0)").append(oLi);
//				console.log($("div.bigPicture ul"));
//				console.log(j);
				$("div.bigPicture ul li.0").css("z-index", "100");
//				console.log($("div.bigPicture ul li").eq(0));
			}

			var smallImgArr = $(arr)[0].SmallImg.split(";");
//			console.log($(smallImgArr));
//			console.log($("ul.thirdPhoto li span"));

			var j = null;
			$("ol.size li").on('click', function() {
				console.log($(this).index());
				j = true;
//				console.log(j);
				$("ol.size li span").css({"background-image": 'none'});
				$(this).find('span').css("background-image", "url(../images/xqy48.png)");
				$("ol.size li").css("border", "1px solid #c8c8c8");
				$(this).css("border", "2px solid #a10000");
			})
			
//			console.log($("li.six input.shop"));
			$("li.six input.shop").on("click", function() {
//				console.log(j);
				$.each($("ol.size li"), function() {
					if(j == true) {
						$("li.six div.shopBox").css("display", "block");
						$("li.three div.tishi").css("display", "none");
					}
					if(j == null){
						$("li.three div.tishi").css("display", "block");
					}
				})
			})
			
			$("div.shopBox span.cha").on("click", function() {
				$("li.six div.shopBox").css("display", "none");
			})
			

			function fSmallImgHover() {
				var $aSmallLi = $("div.left ul.thirdPhoto:eq(1)");
				var $abigLi = $("div.left .bigPicture ul:eq(1) li");
				$.each($aSmallLi, function(i, obj) {
					$.each($(obj).find('li'), function(k, val) {
//						console.log($(val));
						$(val).bind("mouseover", function() {
//							console.log($($abigLi));
							$($abigLi).hide().eq($(val).index()).show();
						})
					})
				})
				var $oSmallLi = $("div.left ul.thirdPhoto:eq(0)");
				var $obigLi = $("div.left .bigPicture ul:eq(0) li");
				$.each($oSmallLi, function(i, obj) {
					$.each($(obj).find('li'), function(k, val) {
//						console.log($(val));
						$(val).bind("mouseover", function() {
							console.log($($obigLi));
							$($obigLi).hide().eq($(val).index()).show();
							$("div.bigPicture ul li").eq($(val).index()).css("z-index", "100");
//							console.log($("div.bigPicture ul li").eq($(val).index()));
						})
					})
				})
			}
			fSmallImgHover();

			$.each($("li.two div"), function(i, obj) {
				$(obj).on("click", function() {
					$(".bigPicture ul").css("display", "none");
					$(".bigPicture ul").eq(i).css("display", "block");
					$("ul.thirdPhoto").css("display", "none");
					$("ul.thirdPhoto").eq(i).css("display", "block");
					$("li.five a").text(arr[0].changeColor.split(";")[i]);
				})
				$.ajax({
					type: "get",
					url: "../PHP/glsp.php",
					async: true,
					data: "",
					success: function(data) {
//						console.log(data);
						var temp = JSON.parse(data);
//						console.log(temp[0].SmallImg.split(";"));
						var img = temp[0].SmallImg.split(";");
						$.each($("ul.thirdPhoto:eq(0) li"), function(i, obj) {
							$(obj).css("background", "url(../images/" + img[0] + ")");
//							console.log(img);
						})
						var t = 0;
						for(var i = 3; i < 9; i++) {
//							console.log(t);
//							console.log($("ul.thirdPhoto:eq(1) li")[t]);
							$("ul.thirdPhoto:eq(1) li").eq(t).css("background", "url(../images/" + img[1] + ")");
							t++;
//							console.log(img);
						}
					}
				});
			})
		}
	})
})