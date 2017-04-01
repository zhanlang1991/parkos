import React, { PropTypes } from 'react'

import LineChartFlow from '../../common/chartTemplate/LineChartFlow'

class FlowChart extends React.Component {
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
        borderLeft:'3px solid #f8a20f'
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
        color:'#f8a20f',
        fontSize: '14px',
        marginLeft:'7px',
        marginTop:'0.5%'
      }
    }

    return(
      <div style={styles.div2} >
          <div style={styles.div4}>
            <div>
              <span style={styles.div5}><img src={require("../../../images/flowTrend.png")} style={styles.img} /></span>
              <span style={styles.span}>流量趋势（车次）</span>
            </div>
          <div style={styles.div6}>
            <LineChartFlow id="flowChart" chartHeight={`${this.state.rootHeight}px`} chartData = {{
                xAxisData: ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12","13","14","15","16","17","18","19","20","21","22","23"],
                seriesData: [{
                    name: '进场流量',
                    color:'#f8a20f',
                    data: ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112","101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112"]
                }, {
                    name: '进场流量预测',
                    color:'#d7e815',
                    data: ["201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212","201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212"]
                },{
                    name: '出场流量',
                    color:'#3db666',
                    data: ["-211", "-222", "-233", "-244", "-255", "-266", "-277", "-288", "-299", "-260", "-231", "-212","-211", "-222", "-233", "-244", "-255", "-266", "-277", "-288", "-299", "-260", "-231", "-212"]
                },{
                    name: '出场流量预测',
                    color:'#32d2c9',
                    data: ["-231", "-222", "-243", "-264", "-285", "-206", "-227", "-278", "-219", "-210", "-231", "-272","-231", "-222", "-243", "-264", "-285", "-206", "-227", "-278", "-219", "-210", "-231", "-272"]
                }]
              }} />
            </div>
          </div>
        </div>
    )
  }
}

export default FlowChart;
