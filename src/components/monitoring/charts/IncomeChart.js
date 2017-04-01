import React, { PropTypes } from 'react'

import LineChart from '../../common/chartTemplate/LineChart'

class IncomeChart extends React.Component {
  constructor(){
    super();
    this.state={
      chartData:{name:'',seriesData:[]},
      rootHeight:window.innerHeight*0.33
    }
  }
  //调整窗口宽高时自适应布局
  componentWillReceiveProps(nextProps){
      // console.log(nextProps);
      this.setState({
          rootHeight:nextProps.myHeight*0.33
      })
  }
  render () {
    let styles={
      div1:{
        width:'100%',
        height:'100%'
      },
      div2:{
        background:'#3d3d3d',
        width:'100%',
        height:'100%',
        borderLeft:'3px solid #32d2c9'
      },
      div4:{
        position:'relative',
        width:'100%',
        color:'#3d3d3d',
        height:`${this.state.rootHeight}px`
      },
      div6:{
        position:'absolute',
        top:'20px',
        left:'0',
        width: '100%',
        height:'200px',
        border: '0px' ,
        borderTop: '0px'
      },
      div7:{
        background:'#2c2c2c',
        width:'0.9%',
        height:'100%',
        float:'right'
      },
      img:{
        float:'left',paddingLeft:'15px',paddingTop:'0.5%'
      },
      span:{
        lineHeight:'40px',
        color:'#33c2ba',
        fontSize: '14px',
        marginLeft:'7px',
        marginTop:'0.5%'
      }
    }

    return(
      <div style={styles.div2} >
          <div style={styles.div4}>
              <div>
                <span style={styles.span2}><img src={require("../../../images/incomeTrend_icon.png")} style={styles.img} /></span>
                <span style={styles.span}>收入趋势（元）</span>
              </div>
              <div style={styles.div6}>
                <LineChart id="incomeChart" chartHeight={`${this.state.rootHeight}px`} chartData = {{
                    xAxisData: ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12","13","14","15","16","17","18","19","20","21","22","23"],
                    seriesData: [{
                        name: '实际收入',
                        color:'#f8a20f',
                        data:  ["101", "102", "103", "104", "105", "66", "107", "98", "109", "110", "111", "112","101", "102", "221", "104", "105", "240", "107", "108", "109", "110", "99", "112"]
                    }, {
                        name: '收入趋势',
                        color:'#32d2c9',
                        data: ["133", "202", "203", "204", "205", "206", "114", "208", "209", "210", "133", "212","201", "202", "203", "204", "205", "206", "155", "208", "209", "210", "177", "212"]
                    }]
                  }} />
              </div>
          </div>
      </div>

    )
  }
}

export default IncomeChart;
