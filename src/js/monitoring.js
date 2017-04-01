//以下是获取时间的
function show_cur_times(){
	//获取当前时间
	var day_time = new Date();
	//年
	var year = day_time.getFullYear();
	//月
	var mon = day_time.getMonth() + 1;
	//小于10，前面补0
	if (mon < 10) {
		mon = "0" + mon;
	}
	//日
	var day = day_time.getDate();
	//小于10，前面补0
	if (day < 10) {
		day = "0" + day;
	}
	//时
	var hour = day_time.getHours();
	//小于10，前面补0
	if (hour < 10) {
		hour = "0" + hour;
	}
	//分
	var minute = day_time.getMinutes();
	//小于10，前面补0
	if (minute < 10) {
		minute = "0" + minute;
	}
	//秒
	var second = day_time.getSeconds();
	//小于10，前面补0
	if (second < 10) {
		second = "0" + second;
	}
	//星期
	var week;
	switch (day_time.getDay()) {
		case 1: week = "星期一";
		break;
		case 2: week = "星期二";
		break;
		case 3: week = "星期三";
		break;
		case 4: week = "星期四";
		break;
		case 5: week = "星期五";
		break;
		case 6: week = "星期六";
		break;
		default: week = "星期日";
		break;
	}
	var date_str = year + "年" + mon +"月"+ day + "日 " + week + " " + hour + ":" + minute + ":" + second;
	if(document.getElementById("clock") != null){
				document.getElementById("clock").innerHTML = date_str;
	}
}
setInterval(show_cur_times, 1000);
