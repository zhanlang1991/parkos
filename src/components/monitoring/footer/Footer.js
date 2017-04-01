import React, { PropTypes } from 'react'

import { getParkHealth } from '../../../request/requestParking'

import 'bootstrap/dist/css/bootstrap.min.css';


class Footer extends React.Component {

  componentDidMount(){
    this.getParkHealthInfo()
  }
//获取车场健康值
  getParkHealthInfo(){
    getParkHealth()
      .then((result) => {
        var res = result.data;
        if ((res.retCode == "000000")&&res.data.result=="success") {
     				var res = res.data.data;
     				var incomeGrowthRateScore = new Number(res.incomeGrowthRateScore);
     				var unusualOperationScore = new Number(res.unusualOperationScore);
     				var carnoRecognizeScore = new Number(res.carnoRecognizeScore);
     				var disconnectionRateScore = new Number(res.disconnectionRateScore);
     				var bizScore = new Number(incomeGrowthRateScore);
     				var mngScore = new Number(unusualOperationScore);
     				var sysScore = new Number(carnoRecognizeScore + disconnectionRateScore);
     				var healthScore = new Number(bizScore + mngScore + sysScore);
     				var healthWidth=Math.round(healthScore);
  				document.getElementById("healthWidth").innerHTML=parseFloat(healthWidth).toLocaleString();
  				//车场健康值渐变条长度控制
  				var maxValue2=100;
  				var value2 = healthWidth;
  				if (value2 >= maxValue2) value2 = maxValue2;
  				if (value2 <= 0) value2 = 0;
  				var mWidth = (value2 / maxValue2) * $("#container2").width() + "px";
  				$(".bar-on2").css("width", mWidth);
     			} else {
     				//showParkFailMsg(res.retMsg);
     			}
      })
  }
  render () {
    let styles = {
      div1:{
        width:'100%',
        height:'5.1%'
      },
      div2:{
        width:'30%',
        height:'100%',
        float:'left',
        background:'#2c2c2c',
        padding:'4px 2.5%'
      },
      div4:{
        width:'20%',
        height:'100%',
        float:'right',
        background:'#2c2c2c',
        position:'relative'
      },
      div5:{
        background:'#2c2c2c',
        width:'25%',
        height:'100%',
        float:'left',
        position:'absolute'
      },
      div6:{
        background:'#2c2c2c',
        width:'75%',
        height:'100%',
        float:'right'
      },
      div7:{
        width:'84%',
        height:'35px',
        float:'left'
      },
      div8:{
        width:'9%',
        height:'100%',
        float:'left'
      },
      img1:{
        width:"123px",
        height:"27px"
      },
      marquee:{
        position:'absolute',
        top:'25%',
        width:'90%',
        height:'60%',
        fontSize:'15px',
        marginRight:'0px',
        color:'#ffffff',
        float:'left'
      },
      span1:{
        textAlign:'left',
        lineHeight:'38px',
        color:'#8c8c8c',
        width:'85px',
        height:'100%',
        position:'absolute'
      },
      span2:{
        lineHeight:'12px',
        color:'#8c8c8c',
        paddingTop:'12px',
        float:'left'
      }
    }
    return(
      <div style={styles.div1} className='clearfix'>
        <div style={styles.div2}>
          <img src={require("../../../images/bottom_logo.png")}  style={styles.img1} />
        </div>
        <div style={styles.div4}>
          <div style={styles.div5}>
            <span style={styles.span1}>车场健康值</span>
          </div>
          <div style={styles.div6}>
            <div style={styles.div7}>
              <div id="container2">
                  <div className="bar">
                      <span className="bar-bg2">
                        <span className="bar-on2">
                        </span>
                      </span>
                    </div>
              </div>
            </div>
            <div style={styles.div8}>
              <span id="healthWidth" style={styles.span2}></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
