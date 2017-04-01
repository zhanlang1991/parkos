import React, { PropTypes } from 'react'
import { getQueryDayParkSerial } from '../../../request/queryDayParkSerial'
import pic from '../../../images/dynamicDataIcon1.png'

class LeftParkShow extends React.Component {
  constructor(){
    super();
    this.state = {
      parkInfo:{data:[]},
      rootHeight:window.innerHeight*0.8673
    }
  }
  componentDidMount(){
    this.showParkInfo();
    //设置定时器发送请求
    // this.timer = setInterval(this.showParkInfo.bind(this),10000)
  }

  //调整窗口宽高时自适应布局
  componentWillReceiveProps(nextProps){
    //   console.log(nextProps);
      this.setState({
          rootHeight:nextProps.myHeight*0.8673
      })
  }
  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }

  //异步获取进出场车辆信息
  showParkInfo(){
      var pageRows = Math.floor((this.state.rootHeight+7.6)/75.6);
      let reqData = {
          "park_code": "",
          "agent_id": "8010000000001",
          "instart_datetime": "",
          "inend_datetime": "",
          "outstart_datetime": "",
          "outend_datetime": "",
          "maxid": "0",
          "maxcount": pageRows
      };
    //   console.log(this.props);
      let custId = this.props.passProps.savedLoginAcount[0].cust_id;
      let session = this.props.passProps.savedLoginAcount[0].session;
      getQueryDayParkSerial(reqData, custId, session).then((res) => {
          var oppositeRes = [];
          for(let i in res){
              oppositeRes.push(res[res.length-i-1])
          }
        //   console.log(res);
          var recordCnt=0;
          var curTop=0;
          var recordHeight = 75.6;
          var idx = 0;
          oppositeRes.forEach(function(value){
            //    console.log(value);
              var etime = value.intime.substring(8,10) + ':' + value.intime.substring(10,12) + ':' + value.intime.substring(12);
              if(value.outtime == '0'){
                    var otime = '';
                    var carSta = "入";
              }else{
                  otime = value.outtime.substring(8,10) + ':' + value.outtime.substring(10,12) + ':' + value.outtime.substring(12);
                  carSta = "出";
              }
              var actamt = (value.pay_amt == "0") ? 0 : value.pay_amt;
              var feeColor=(carSta=="入") ? 0 : 1 ;
              var cpotnum = (value.car_id == '无车牌') ? '无车牌' : value.car_id.substring(0,2) + " · " + value.car_id.substring(2,8);
              var color = 1;
              var inOut = (value.outtime == "0") ? 1 : 2;
              var ctype = '待定';

              // 删除多余的record
              var moveIndex = 1;
              if (recordCnt >= pageRows) {
                  curTop = curTop % pageRows + 1;
                  $("#carDyMess" + curTop).animate({opacity:0}, 5);
                  moveIndex = curTop % pageRows + 1;
                  // 增加新record
                  $("#carDyMess" + curTop).html(this.newRecordDiv1(etime, otime, color, cpotnum, inOut, carSta, value.park_name, feeColor, actamt, ctype));
                  $("#carDyMess" + curTop).animate({top:"0px"}, 0);
                  $("#carDyMess" + curTop).animate({opacity:1}, 800);
              } else {
                  // 增加新record
                  curTop = curTop % pageRows + 1;
                  $("#carDyMess" + curTop).html(this.newRecordDiv1(etime, otime, color, cpotnum, inOut, carSta, value.park_name, feeColor, actamt, ctype));
                  $("#carDyMess" + curTop).delay(850 * idx).animate({opacity:1}, 800);
                  recordCnt++;
              }

              // 其余record下移
              var topvalue = recordHeight * (recordCnt - 1);
              for (let n = 0; n < recordCnt - 1; n++) {
                  $("#carDyMess" + moveIndex).animate({top:"" + topvalue + "px"}, 850);
                  moveIndex = moveIndex % pageRows + 1;
                  topvalue -= recordHeight;
              }

            //   if (this.inOutFlag == "in") {
            //       lastTime = this.entertime;
            //   } else {
            //       lastTime = this.outtime;
            //   }
              idx++;
            //   totalCarFlow++;
          }.bind(this))
      })
  }

  newRecordDiv1(etime, otime, color, cpotnum, inOut, carSta, parkName, feeColor, actamt,ctype) {

  	return "<div class='carM1' >"+
  			"<div class='carM1-left' >"+
  				"<div style='background:#f7a30d;width:1.5%;height:100%;float:left;'></div>"+
  				"<div style='width:98.5%;height:100%;float:right;'>"+
  					"<div style='width:7%;height:100%;float:left;'>"+
  						`<span style='float:left;'><img src=${pic} style='position:absolute;padding-left:3%;padding-top:8px;'></span>`+
  					"</div>"+
  					"<div style='width:93%;height:100%;float:right;'>"+
  						"<div style='line-height:8px;color:#f7a30d;width:50%;height:100%;float:left;'>"+
  							"<div id='entertime' style='padding-top:13px;width:90%;height:100%;float:left;padding-left:25%;'>"+etime+"</div>"+
  							"<div style='line-height:10px;color:#f7a30d;width:10%;height:100%;float:right;padding-top:12px;padding-left:8px;'> - </div>"+
  						"</div>"+
  						"<div id='outtime' style='padding-top:13px;width:50%;height:100%;float:right;padding-left:13%;color:#f7a30d;line-height:8px;'>"+otime+"</div>"+
  					"</div>"+
  				"</div>"+
  			"</div>"+
  			"<div class='carM1-right' >"+
  				"<div style='width:70%;height:100%;float:left;'>"+
  					"<div style='background:#5f5f5f;width:1%;height:100%;float:left;'></div>"+
  					"<div style='width:99%;height:100%;float:right;'>"+
  						"<div class='cnum"+color+"'>"+
  							"<div id='carnum'>"+cpotnum+"</div>"+
  						"</div>"+
  					"</div>"+
  				"</div>"+
  				"<div style='width:30%;height:100%;float:right;position:relative;'>"+
  					"<div style='background:#5f5f5f;width:3%;height:100%;float:left;position:absolute;'>"+
  					"</div>"+
  					"<div style='width:97%;height:100%;float:right;position:absolute;'>"+
  						"<div class='inOrOut"+inOut+"' style='position:absolute;'>"+
  							"<div id='carStatus'>"+carSta+"</div>"+
  						"</div>"+
  					"</div>"+
  				"</div>"+
  			"</div>"+
  		"</div>"+
  		"<div class='carM2'>"+
  			"<div style='width:50%;height:100%;float:left;'>"+
  				"<div style='background:#31d2ca;width:1.5%;height:100%;float:left;'></div>"+
  				"<div id='parkName' style='width:98.5%;height:100%;float:right;color:#a7a7a7;padding-top:2%;padding-left:3.5%;font-size:13px;'>"+parkName+"</div>"+
  			"</div>"+
  			"<div style='width:50%;height:100%;float:right;'>"+
  				"<div style='width:70%;height:100%;float:left;'>"+
  					"<div style='background:#5f5f5f;width:1%;height:100%;float:left;'></div>"+
  					"<div id='carfee' class='carfeeColor"+feeColor+"'>"+actamt+' 元'+
  					"</div>"+
  				"</div>"+
  				"<div style='width:30%;height:100%;float:right;position:relative;'>"+
  					"<div style='background:#5f5f5f;width:3%;height:100%;float:left;position:absolute;'></div>"+
  					"<div style='width:97%;height:100%;float:right;position:absolute;'>"+
  						"<div id='carType' style='width:100%;height:100%;float:right;color:#a7a7a7;font-size:13px;padding-top:10px;padding-left:33%;'>"+ctype+"</div>"+
  					"</div>"+
  				"</div>"+
  			"</div>"+
  		"</div>"+
  		"<div style='background:#2c2c2c;width:100%;height:7.6px;''></div>";
  }

  render () {
    let styles={
      div1:{
        background:'#2c2c2c',
        width:'100%',
        float:'left',
      },
      div2:{
        position:'relative',
        background:'#2c2c2c',
        width:'100%',
        height:`${this.state.rootHeight}px`,
        float:'left',
        padding:'0 2.5% 2.5% 2.5%',
        overflow:'hidden'
      }

    }

    return(
        <div id="dyParkRecord" style={styles.div1}>
              <div id="records" style={styles.div2}>
                  <div id='carDyMess1' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess2' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess3' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess4' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess5' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess6' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess7' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess8' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess9' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess10' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess11' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
                  <div id='carDyMess12' className='carMessage' style={{'position':'absolute', 'opacity': 0}}></div>
              </div>
        </div>
    )
  }
}

export default LeftParkShow;
