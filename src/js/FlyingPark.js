// $(function(){
	// $("#inpstart").jeDate({
	// 		isinitVal:true,
	// 	    ishmsVal:false,
	// 	    minDate: '2016-06-16 23:59:59',
	// 	    maxDate: '2017-06-16 23:59:59',
	// 	    format:"YYYY-MM-DD",
	// 	    zIndex:3000,
	// 	})
// 	$("#userchecked").hover(function(){
// 		$(".passwduser").show();
// 	},function(){
// 		$(".passwduser").hide();
// 	})
// 	$(document).click(function(){
// 		$("#SoarheadPark").css('display','none');
// 	})
// 	$("#parkSoar").click(function(){
// 		if($("#SoarheadPark").is(":hidden")){
// 			$("#SoarheadPark").show();
// 		}else{
// 			$("#SoarheadPark").hide();
// 		}
// 	})
// 	$("#Operatorsli").click(function(){
// 		$(".operatorstl").show();
// 		$(".parksheads").hide();
//
// 	})
// 	$("#parksli").click(function(){
// 		$(".operatorstl").hide();
// 		$(".parksheads").show();
//
// 	})
//
// 	var theTable = document.getElementById("table2");
// 	var totalPage = document.getElementById("spanTotalPage");
// 	var pageNum = document.getElementById("spanPageNum");
// 	var spanPre = document.getElementById("spanPre");
// 	var spanNext = document.getElementById("spanNext");
// 	// var spanFirst = document.getElementById("spanFirst");
// 	// var spanLast = document.getElementById("spanLast");
// 	var numberRowsInTable = theTable.getElementsByTagName("li").length;
// 	var pageSize = 3;
// 	var page = 1;
//
// 	//下一页
// 	function next() {
// 		alert(123);
// 		hideTable();
//
// 		currentRow = pageSize * page;
// 		maxRow = currentRow + pageSize;
// 		if ( maxRow > numberRowsInTable )
// 		maxRow = numberRowsInTable;
// 		for ( var i = currentRow; i< maxRow; i++ ) {
// 			// theTable[i].style.display = '';
// 		}
// 			page++;
// 		if ( maxRow == numberRowsInTable ){
// 			nextText();
// 			lastText();
// 		}
// 		showPage();
// 		preLink();
// 		firstLink();
// 	}
//
// 	//上一页
// 	function pre() {
// 		alert(456);
// 		hideTable();
//
// 		page--;
//
// 		currentRow = pageSize * page;
// 		maxRow = currentRow - pageSize;
// 		if ( currentRow > numberRowsInTable )
// 		currentRow = numberRowsInTable;
// 		for ( var i = maxRow; i< currentRow; i++ ) {
// 			alert(i);
// 			// theTable[i].style.display = '';
// 		}
// 		if ( maxRow == 0 ) {
// 			preText();
// 			firstText();
// 		}
// 		showPage();
// 		nextLink();
// 	}
// 	function hideTable() {
// 		for ( var i = 0; i<numberRowsInTable; i++ ) {
// 		// theTable[i].style.display = 'none';
// 		}
// 	}
// 	function showPage() {
// 		pageNum.innerHTML = page;
// 	}
//
// 	//总共页数
// 	function pageCount() {
// 		var count = 0;
// 		if ( numberRowsInTable%pageSize != 0 ) count = 1;
// 		return parseInt(numberRowsInTable/pageSize) + count;
// 	}
// 	//显示链接
// 	function preLink() { spanPre.innerHTML = "<a href='javascript:pre();'><</a>";}
// 	function preText() { spanPre.innerHTML = "<"; }
//
// 	function nextLink() { spanNext.innerHTML = "<a href='javascript:next();'>></a>";}
// 	function nextText() { spanNext.innerHTML = ">"; }
// 	//隐藏表格
// 	function hide() {
// 		for ( var i = pageSize; i<numberRowsInTable; i++ ) {
// 			// theTable[i].style.display = 'none';
// 		}
//
// 		totalPage.innerHTML = pageCount();
// 		pageNum.innerHTML = '1';
//
// 		nextLink();
// 	}
//
// 	hide();
// })
