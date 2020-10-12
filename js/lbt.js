$("#picBox").css({
	width: "1200px",
	height: "535px",
});

var num = 0;
var round = 0;
var DURA = 3000; //延迟的事件
// 1、在第一张图片追加之前，要把页面中的小按钮做出来
for(var i = 0; i < $("#picBox .picList li").length; i++) {
	$("#picBox .round").append("<span></span>")
}
$("#picBox .round span").eq(round).css({
	background: "white",
	color: "#a10000"
});

// 计算 小圆点盒子的  margin-left 的值
// 一个span的宽度(width+margin)*span的数量
$("#picBox .round").css({
		marginLeft: "-" + $("#picBox .round span")
			.eq(0).outerWidth(true) * $("#picBox .round span").length / 2 + "px"
	}),
	$("#picBox .round").css({
		marginLeft: "-" + $("#picBox .round span")
			.eq(0).outerWidth(true) * $("#picBox .round span").length + "px"
	})

// 添加按钮的事情要做...
$("#picBox .picList")
	.append(
		$("#picBox .picList li")
		.first()
		.clone()
	)
	.width(
		$("#picBox .picList li").length *
		$("#picBox .picList li").eq(0).width() + "px"
	);
var oLi = $("#picBox .picList li");
oLi.css("float", "left");
var num = 0;

function move() {
	num++;
	round++;
	if(round == oLi.length - 1) {
		round = 0;
	}

	if(num == oLi.length) {
		// 当图片的数组长度，下一次一定展示的是第二张图(下标为1)
		num = 1;
		// 最后一张图和第一张图相同
		// 要在图片跳到第二张图之前，把ul的位置从最后一张图，切换到第一张图的位置
		$("#picBox .picList").css({
			left: 0
		});
	}
	$("#picBox .round span").css({
		backgroundColor: "#a10000",
		color: "white"
	});
	// 动画执行的时候 一定会出现拉扯的效果
	$("#picBox .picList") //ul
		.animate({
			left: -num * oLi.eq(0).width() + "px"
		});
	$("#picBox .round span").eq(round).css({
		backgroundColor: "white",
		color: "#a10000"
	});
}
var time = setInterval(move, DURA);
// 2、鼠标移入div 轮播停止
$("#picBox").hover(function() {
		clearInterval(time);
		$("#picBox button").fadeIn(1000);
	}, function() {
		time = setInterval(move, DURA);
		$("#picBox button").fadeOut(1000);
	})
	// 3、鼠标移入/移出小按钮  发生的事情
$("#picBox .round span").hover(function() {
	//1.让所有的按钮变回原来的样式
	$("#picBox .round span").css({
			background: "#a10000",
			color: "#fff"
		})
		//2.当前发生事件的按钮背景变化文字变化
	$(this).css({
			background: "#fff",
			color: "#a10000"
		})
		//3.按钮对应的图片滑动显示过来.animate
	$("#picBox .picList")
		.animate({
			left: -$(this).index() * oLi.eq(0).width() + "px"
		})
	num = round = $(this).index();
}, function() {
	clearInterval(time);
})

// 4、鼠标移入/移出 左右箭头发生的事情

//鼠标移入左箭头，预判断一些事情的发生
$("#picBox button").eq(0).on("mouseover", function() {
		clearInterval(time);
		//如果图片显示的是第一张图，则让图片的下标变成最后一张图的下标，并且让图片瞬间切换到最后一张图的位置
		if(num == 0) {
			num = oLi.length - 1;
			$("#picBox .picList")
				.css({
					left: -num * oLi.eq(0).width() + "px"
				})
		}
	})
	//鼠标移入右箭头，预判断一些事情的发生
$("#picBox button").eq(1).on("mouseover", function() {
	clearInterval(time);
	//如果图片显示的是最后张图，则让图片的下标变成第一张图的下标，并且让图片瞬间切换到第一张图的位置
	if(num == oLi.length - 1) {
		num = 0;
		$("#picBox .picList")
			.css({
				left: -num * oLi.eq(0).width() + "px"
			})
	}

})

$("#picBox button").eq(0).on("click", function() {
	num--;
	round--;
	if(round < 0) {
		round = oLi.length - 2;
	}
	if(num < 0) {
		num = oLi.length - 2;
		$("#picBox .picList")
			.css({
				left: -(oLi.length - 1) * oLi.eq(0).width() + "px"
			})
	}
	$("#picBox .round span").css({
		backgroundColor: "#a10000",
		color: "#fff"
	});
	$("#picBox .picList")
		.animate({
			left: -num * oLi.eq(0).width() + "px"
		})
	$("#picBox .round span").eq(round).css({
		backgroundColor: "#fff",
		color: "#a10000"
	});
})

$("#picBox button").eq(1).on("click", function() {
	move();
})


















