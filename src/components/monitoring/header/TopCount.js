import React, { PropTypes } from 'react'
import { getParkPort } from '../../../request/requestParking'
import 'bootstrap/dist/css/bootstrap.min.css';
import { queryParkSeatInfoByID } from '../../../request/queryParkSeatInfoByID'

class TopCount extends React.Component {
  constructor(){
    super();
    this.state = {
      rootHeight:window.innerHeight*0.0627
    }
  }
componentDidMount(){
  this.getParkPortInfo()
}
//调整窗口宽高时自适应布局
componentWillReceiveProps(nextProps){
    // console.log(nextProps);
    this.setState({
        rootHeight:nextProps.myHeight*0.0627
    })
}
//车场空满度
getParkPortInfo(){
    let ansCommData = this.props.passProps.savedLoginAcount[0]
    var reqData = {
        "agent_id":"8010000000001"
    };
    queryParkSeatInfoByID(reqData, ansCommData.cust_id, ansCommData.session)
    .then((res) => {
        if(res.length > 0){
			var data = res[0];
			var parkSpaceSum = 0;
			var parkSpaceOccupiedSum = 0;
			if(data.park_sum != ''){
                parkSpaceSum +=  parseInt(data.park_sum);
                parkSpaceOccupiedSum = parseInt(data.park_sum) -  parseInt(data.park_free);
            }
            if(data.road_sum != ''){
                parkSpaceSum +=  parseInt(data.road_sum);
                parkSpaceOccupiedSum += parseInt(data.road_sum) -  parseInt(data.road_free);
            }
            var fullEmwidth=Math.round((parkSpaceOccupiedSum / parkSpaceSum)*100);
            if (isNaN(fullEmwidth)) fullEmwidth = 0;
            document.getElementById("fullEmwidth").innerHTML=parseFloat(fullEmwidth).toLocaleString();
            //空满度进度条长度控制
            var maxValue=100;
            var value = fullEmwidth;
            if (value >= maxValue) value = maxValue;
            if (value <= 0) value = 0;
            var mWidth = (value / maxValue) * $("#container").width() + "px";
            $(".bar-on").css("width", mWidth);
        }else {
			//showParkFailMsg(res.retMsg);
		}
    });
}

  render () {
    let styles={
      div0:{
        height:`${this.state.rootHeight}px`
      },
      div1:{
        background:'#2c2c2c',
        position:'relative',
        width:'20%',
        height:'100%',
        float:'left'
      },
      div2:{
        background:'#2c2c2c',
        position:'relative',
        width:'20%',
        height:'100%',
        float:'left'
      },
      div3:{
        background:'#2c2c2c',
        width:'20%',
        height:'100%',
        float:'left'
      },
      div4:{
        background:'#2c2c2c',
        width:'20%',
        height:'100%',
        float:'left'
      },
      div5:{
        float:'left',
        width:'80%',
        height:`${this.state.rootHeight}px`
      },
      div6:{
        marginTop:`${(this.state.rootHeight-8)/2}px`
      },
      span1:{
        lineHeight:`${this.state.rootHeight}px`,
        color:'#ee5416',
        visibility:'visible',
        position:'absolute'
      },
      span2:{
        textAlign:'center',
        lineHeight:`${this.state.rootHeight}px`,
        color:'#faf8f8',
        float:'left',
      },
      span3:{
        lineHeight:`${this.state.rootHeight}px`,
        color:'#32d2c9',
        visibility:'visible',
        position:'absolute'
      },
      span4:{
        textAlign:'center',
        lineHeight:`${this.state.rootHeight}px`,
        color:'#faf8f8',
        marginLeft:'5%',
        float:'left'
      },
      span5:{
        lineHeight:`${this.state.rootHeight}px`,
        color:'#32d2c9',
        position:'absolute'
      },
      span6:{
        lineHeight:`${this.state.rootHeight}px`,
        color:'#8c8c8c',
        position:'absolute',
        left:'0',
        top:'0'
      },
      span7:{
        lineHeight:`${this.state.rootHeight}px`,
        color:'#8c8c8c',
        position:'absolute',
        left:'100%'
      },
      span8:{
        textAlign:'center',
        lineHeight:`${this.state.rootHeight}px`,
        color:'#faf8f8',
        float:'left',
      },
      span9:{
      lineHeight:`${this.state.rootHeight}px`,
      color:'#8c8c8c'
      },
      span10:{
         position:'relative',
         float:'left',
         display:'block',
         width:'20%',
         height:`${this.state.rootHeight}px`
      },
      span11:{
         position:'relative',
         float:'left',
         display:'block',
         width:'20%',
         height:`${this.state.rootHeight}px`
     },
      img1:{
          position:'absolute',
          top:'50%',
          left:'12%',
          marginTop:'-14px'
      }
    }
    let str = '1000000';
    let num = parseFloat(str).toLocaleString();
    return(
      <div className="top2" style={styles.div0}>
        <div style={styles.div1}>
          <span style={styles.span10}><img src={require("../../../images/shape2.png")} style={styles.img1} /></span>
          <span style={styles.span8}>今日累计流量(车次)：</span>
          <span id="todayTotalFlow" style={styles.span1}>{num}</span>
        </div>
        <div style={styles.div2}>
          <span style={styles.span11}><img src={require("../../../images/shape1.png")} style={styles.img1} /></span>
          <span style={styles.span2} >今日收入统计（元）：</span>
          <span id="todayTotalAmt" style={styles.span3}>1000</span>
        </div>
        <div style={styles.div3}>
          <span style={styles.span4}>今日累计临停收入（元）：</span>
          <span id="todayTemparkAmt" style={styles.span5}>1000</span>

        </div>
        <div style={styles.div4}>
          <span style={styles.span4}>今日累计储值卡收入（元）：</span>
          <span id="todaySetAmt" style={styles.span5}>1000</span>
        </div>
        <div style={{'background':'#2c2c2c','width':'20%','height':'100%','float':'right'}}>
          <div style={{'background':'#2c2c2c','width':'20%','height':'100%','float':'left'}}>
            <span style={styles.span9}>空满度</span>
          </div>
          <div style={{'background':'#2c2c2c','width':'80%','height':'100%','float':'left'}}>
            <div style={styles.div5}>
              <div id="container" style={styles.div6}>
                  <div className="bar">
                      <span className="bar-bg">
                        <span className="bar-on"></span>
                      </span>
                    </div>
              </div>
            </div>
            <div style={{'width':'9%','height':'100%','float':'left',position:'relative'}}>
              <span id="fullEmwidth" style={styles.span6}></span>
              <span style={styles.span7}>%</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopCount;
