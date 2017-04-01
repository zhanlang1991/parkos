import React, { PropTypes } from 'react'
import BarChart from '../common/chartTemplate/BarChart'
import BarChartAnalysis from '../common/chartTemplate/BarChartAnalysis'
import BarChartHorizontal from '../common/chartTemplate/BarChartHorizontal'
import LineChartAnalysis from '../common/chartTemplate/LineChartAnalysis'
import PieChartAnalysis from '../common/chartTemplate/PieChartAnalysis'
import Yearstimes from '../common/Yearstimes'

class FlowAnalysis extends React.Component {


pageChangeHandle(index){
  console.log(index);
}
  render () {
    let styles={
      div1:{
        width:'96%',
        margin:'20px 2%',
        background:'#fff',
        borderRadius:'4px',
        fontFamily:'微软雅黑',
        color:'#333'
      },
      divTime:{
        float:'right',
        width:'250px',
        height:'26px',
  		zIndex:'10',
  		position:'relative'
      },
      divChart1:{
        width:'100%',
        height:'410px',
        color:'#333'
      },
      divChart2:{
        width:'100%',
        height:'310px',
        color:'#333'
      },
      divpie1:{
        float:'left',
        width:'40%',
        margin:'0 5%'
      },
      divpie2:{
        float:'left',
        width:'40%',
        margin:'0 5%'
      },
      div2:{
        width:'100%',
        height:'120px',
        padding:'3px 0',
        background:'rgb(235, 239, 242)'
      },
      div3:{
        width:'49.8%',
        float:'left',
        background:'#fff'
      },
      div4:{
        width:'49.8%',
        float:'right',
        background:'#fff'
      },
      div5:{
        width:'24.7%',
        float:'left',
        marginLeft:'0.4%',
        background:'#fff'
      },
      div6:{
        width:'24.7%',
        float:'left',
        background:'#fff'
      },
      p1:{
        lineHeight:'50px',
        textAlign:'center',
        fontSize:'24px',
        whiteSpace:'nowrap'
      },
      p2:{
        lineHeight:'60px',
        textAlign:'center',
        fontWeight: 'bold',
        color: '#6b6b6b',
        fontSize: '25px'
      },
      span1:{
        fontWeight: 'bold'
      }
    }
    return(
      <div>
        <div style={styles.div1}>
          <p style={styles.p1}>流量趋势</p>
          <div style={styles.divTime}>
            <Yearstimes />
          </div>
          <div style={styles.divChart1}>
            <BarChartAnalysis id="FlowAnalysisBarChart" chartData = {{
                xAxisData: ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12","13","14","15","16","17","18","19","20","21","22","23"],
                seriesData: [{
                    name: '进场流量',
                    stack:'总量',
                    color:'#f8a20f',
                    itemStyle:{normal: {barBorderRadius: [4, 4, 0, 0]}},
                    data: ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112","101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112"]
                }, {
                    name: '出场流量',
                    stack:'总量',
                    color:'#d7e815',
                    itemStyle:{normal: {barBorderRadius: [0, 0, 4, 4]}},
                    data: ["-211", "-222", "-233", "-244", "-255", "-266", "-277", "-288", "-299", "-260", "-231", "-212","-211", "-222", "-233", "-244", "-255", "-266", "-277", "-288", "-299", "-260", "-231", "-212"]
                },{
                    name: '进场流量预测',
                    stack:'预测总量',
                    color:'#3db666',
                    itemStyle:{normal: {barBorderRadius: [4, 4, 0, 0]}},
                    data: ["201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212","201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212"]
                },{
                    name: '出场流量预测',
                    stack:'预测总量',
                    color:'#32d2c9',
                    itemStyle:{normal: {barBorderRadius: [0, 0, 4, 4]}},
                    data: ["-231", "-222", "-243", "-264", "-285", "-206", "-227", "-278", "-219", "-210", "-231", "-272","-231", "-222", "-243", "-264", "-285", "-206", "-227", "-278", "-219", "-210", "-231", "-272"]
                }]
              }} />
          </div>
          <div  style={styles.div2}>
            <div style={styles.div6}>
              <p  style={styles.p2}>入口高峰时段</p>
              <p style={styles.p2}><span style={styles.span1}>9:00 - 10:00</span></p>
            </div>
            <div style={styles.div5}>
              <p style={styles.p2}>入口低谷时段</p>
              <p style={styles.p2}><span style={styles.span1}>2:00 - 3:00</span></p>
            </div>
            <div style={styles.div5}>
              <p style={styles.p2}>出口高峰时段</p>
              <p style={styles.p2}><span style={styles.span1}>9:00 - 10:00</span></p>
            </div>
            <div style={styles.div5}>
              <p style={styles.p2}>出口低谷时段</p>
              <p style={styles.p2}><span style={styles.span1}>5:00 - 6:00</span></p>
            </div>
          </div>
        </div>
        <div style={styles.div1}>
          <p style={styles.p1}>进场出场流量压力对比</p>
          <div style={styles.divChart1}>
            <LineChartAnalysis id="InOutContrastChart" chartData = {{
              xAxisData: ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12","13","14","15","16","17","18","19","20","21","22","23"],
              seriesData: [{
                  name: '进场流量',
                  color:'#f8a20f',
                  data: ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112","101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112"]
              }, {
                  name: '出场流量',
                  color:'#d7e815',
                  data: ["211", "222", "233", "244", "255", "266", "277", "288", "299", "260", "231", "212","211", "222", "233", "244", "255", "266", "277", "288", "299", "260", "231", "212"]
              }]
            }} />
          </div>
        </div>
        <div style={styles.div1}>
          <p style={styles.p1}>合计压力排行榜</p>
          <div style={styles.divChart1}>
            <BarChartHorizontal id="EntryFlowPressureChart" chartData = {{
              yAxisData: ["出场流量","进场流量"],
              seriesData: [{
                  name: '',
                  color:'#f8a20f',
                  data: ["101","211"]
              }]
            }} />
          </div>
        </div>
        <div style={styles.div1}>
          <p style={styles.p1}>流量构成</p>
          <div style={styles.divChart2}>
            <div style={styles.divpie1}>
              <PieChartAnalysis id={'flowFormChart1'} title={'不同车辆构成'} chartData={[{name:"月卡车辆",value:234,color:"#f8a20f"},{name:"临停车辆",value:138,color:"#3db666"},{name:"储值卡车辆",value:1122,color:"#32d2c9"},{name:"过场车辆",value:922,color:"#e96fe4"}]} />
            </div>
            <div style={styles.divpie2}>
              <PieChartAnalysis id={'flowFormChart2'} title={'不同车场'} chartData={[{name:"无线飞翔停车场",value:234,color:"#f8a20f"}]} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlowAnalysis;
