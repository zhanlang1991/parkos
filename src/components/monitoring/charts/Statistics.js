import React, { PropTypes } from 'react'

class Statistics extends React.Component {
  constructor(){
    super();
    this.state={
      rootHeight:window.innerHeight*0.18+'px'
    }
  }

  render () {
    let styles = {
      div1:{
        background:'#2c2c2c',
        width:'100%',
        height:this.state.rootHeight
      },
      div2:{
        width:'52%',
        height:'100%',
        float:'left',
        borderLeft:'3px solid #32d2ca',
        background:'#3d3d3d',
      },
      div3:{
        width:'46.5%',
        height:'100%',
        float:'left',
        borderLeft:'3px solid #f8a20f',
        background:'#3d3d3d',
      },
      div5:{
        width:'50%',
        height:'100%',
        float:'left'
      },
      div6:{
        width:'100%',
        minWidth:'180px',
        height:'50%',
        // minHeight:'35px',
        overflow:'hidden'
      },
      div8:{
        width:'50%',
        height:'100%',
        float:'right'
      },
      img1:{
        width:window.innerHeight*0.16*0.3,
        // height:"30%",
        margin:'2% 0 0 2%'
      },
      p1:{
        lineHeight:'100%',
        color:'#32d2ca',
        fontSize: '14px',
        margin:'2px 0 0 20px'
      },
      p0:{
        lineHeight:'100%',
        color:'#f8a20f',
        fontSize: '14px',
        margin:'2px 0 0 20px'
      },
      p2:{
        fontSize: '14px',
        color:'#ffffff'
      },
      p3:{
        float:'left',
        padding:'2%'
      },
      p4:{
        float:'left'
      },
      span2:{
        color:'#f8a20f',
        fontSize: '14px'
      },
      span6:{
        fontSize: '14px',
        color:'#32d2c9'
      }
    }
  return(
      <div className="clearfix" style={styles.div1}>
        <div style={styles.div2}>
          <div style={{width:'100%',height:'20%'}}>
            <p style={styles.p1}>单位（元）</p>
          </div>
          <div style={{width:'100%',height:'80%'}}>
            <div style={styles.div5}>
              <div style={styles.div6}>
                <p style={styles.p3}><img src={require("../../../images/dayAvgIncomeTq.png")} id="btn11" style={styles.img1} /></p>
                <div style={styles.p4}>
                  <p style={styles.p2}>同期日平均收入</p>
                  <span id="avgIncome" style={styles.span6}>1000	</span>
                </div>
              </div>
              <div style={styles.div6}>
                <p  style={styles.p3}><img src={require("../../../images/dayAvgPositionTq.png")} id="btn21"  style={styles.img1} /></p>
                <div  style={styles.p4}>
                  <p style={styles.p2}>同期日平均车位收入</p>
                  <span id="avgStallIncome" style={styles.span6}>1000</span>
                </div>
              </div>
            </div>
            <div style={styles.div8}>
              <div style={styles.div6}>
                <p  style={styles.p3}><img src={require("../../../images/dayAvgShortParkTq.png")} id="btn12"  style={styles.img1} /></p>
                <div style={styles.p4}>
                  <p style={styles.p2}>同期日临停平均收费金额</p>
                  <span id="temPAvgIncome" style={styles.span6}>1000</span>
                </div>
              </div>
              <div style={styles.div6}>
                <p  style={styles.p3}><img src={require("../../../images/dayAvgMealIncomeTq.png")} id="btn22"  style={styles.img1} /></p>
                <div style={styles.p4}>
                  <p style={styles.p2}>同期日储值卡收入</p>
                  <span id="setIncome" style={styles.span6}>1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.div3}>
          <div style={{'width':'100%','height':'20%'}}>
            <p style={styles.p0}>单位（车次/分钟/%）</p>
          </div>
          <div style={{width:'100%',height:'80%'}}>
            <div style={styles.div5}>
              <div style={styles.div6}>
                <p style={styles.p3}><img src={require("../../../images/dayAvgFlowTq.png")} id="btn11" style={styles.img1} /></p>
                <div style={styles.p4}>
                  <p style={styles.p2}>同期日平均流量</p>
                  <span id="avgIncome" style={styles.span2}>1000	</span>
                </div>
              </div>
              <div style={styles.div6}>
                <p  style={styles.p3}><img src={require("../../../images/dayAvgPositionRateTq.png")} id="btn21"  style={styles.img1} /></p>
                <div  style={styles.p4}>
                  <p style={styles.p2}>同期日平均车位周转率</p>
                  <span id="avgStallIncome" style={styles.span2}>1000</span>
                </div>
              </div>
            </div>
            <div style={styles.div8}>
              <div style={styles.div6}>
                <p  style={styles.p3}><img src={require("../../../images/dayAvgParkTimeTq.png")} id="btn12"  style={styles.img1} /></p>
                <div style={styles.p4}>
                  <p style={styles.p2}>同期日平均停放时长</p>
                  <span id="temPAvgIncome" style={styles.span2}>1000</span>
                </div>
              </div>
              <div style={styles.div6}>
                <p  style={styles.p3}><img src={require("../../../images/dayAvgFreeTq.png")} id="btn22"  style={styles.img1} /></p>
                <div style={styles.p4}>
                  <p style={styles.p2}>同期日平均免费车数量</p>
                  <span id="setIncome" style={styles.span2}>1000</span>
                </div>
              </div>
            </div>
        </div></div>
      </div>
    )
  }
}

export default Statistics;
