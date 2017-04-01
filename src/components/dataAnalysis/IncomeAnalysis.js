import React, { PropTypes } from 'react'

import LineAreaChart from '../common/chartTemplate/LineAreaChart'
import BarChart from '../common/chartTemplate/BarChart'
import LineChartAnalysis from '../common/chartTemplate/LineChartAnalysis'
import PieChartAnalysis from '../common/chartTemplate/PieChartAnalysis'
import Yearstimes from '../common/Yearstimes'

class IncomeAnalysis extends React.Component {
  render () {
let styles = {
    div1: {
        width: '96%',
        margin: '20px 2%',
        background: '#fff',
        borderRadius: '4px',
        fontFamily: '微软雅黑',
        color: '#333'
    },
    divTime: {
        float: 'right',
        width: '250px',
        height: '26px',
        zIndex: '10',
        position: 'relative'
    },
    divChart1: {
        width: '100%',
        height: '410px',
        color: '#333'
    },
    divChart2: {
        width: '100%',
        height: '310px',
        color: '#333'
    },
    divpie1: {
        float: 'left',
        width: '30%',
        marginRight: '5%'
    },
    divpie2: {
        float: 'left',
        width: '30%'
    },
    div2: {
        width: '100%',
        height: '120px',
        padding: '3px 0',
        background: ' rgb(235, 239, 242)'
    },
    div3: {
        width: '49.8%',
        float: 'left',
        background: '#fff'
    },
    div4: {
        width: '49.8%',
        float: 'right',
        background: '#fff'
    },
    div5: {
        width: '24.7%',
        float: 'left',
        marginLeft: '0.4%',
        background: '#fff'
    },
    div6: {
        width: '24.7%',
        float: 'left',
        background: '#fff'
    },
    p1: {
        lineHeight: '50px',
        textAlign: 'center',
        fontSize: '24px',
        whiteSpace: 'nowrap'
    },
    p2: {
        lineHeight: '60px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#6b6b6b',
        fontSize: '25px'
    },
    span1: {
        fontWeight: 'bold'
    }
}
    return(
      <div>
        <div style={styles.div1}>
          <p style={styles.p1}>收入趋势</p>
          <div style={styles.divTime}>
            <Yearstimes />
          </div>
          <div style={styles.divChart1}>
            <LineAreaChart id="IncomeAnalysisLineChart" chartData = {{
              xAxisData: ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12","13","14","15","16","17","18","19","20","21","22","23"],
              seriesData: [{
                  name: '实际收入',
                  color:'#1bdd78',
                  data: ["101", "102", "103", "104", "105", "66", "107", "98", "109", "110", "111", "112","101", "102", "221", "104", "105", "240", "107", "108", "109", "110", "99", "112"]
              }, {
                  name: '收入趋势',
                  color:'#c6d3dd',
                  data: ["133", "202", "203", "204", "205", "206", "114", "208", "209", "210", "133", "212","201", "202", "203", "204", "205", "206", "155", "208", "209", "210", "177", "212"]
              }]
            }} />
          </div>
          <div  style={styles.div2}>
            <div style={styles.div3}>
              <p  style={styles.p2}>本日累计收入</p>
              <p style={styles.p2}><span style={styles.span1}>1754</span>元</p>
            </div>
            <div style={styles.div4}>
              <p style={styles.p2}>本日预计收入</p>
              <p style={styles.p2}><span style={styles.span1}>8363</span>元</p>
            </div>
          </div>
        </div>
        <div style={styles.div1}>
          <p style={styles.p1}>收入分析</p>
          <div style={styles.divChart1}>
            <BarChart id="IncomeAnalysisBarChart" ifStack='总量' chartData = {{
              xAxisData: ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12","13","14","15","16","17","18","19","20","21","22","23"],
              seriesData: [{
                  name: '实际收入',
                  color:'#49C0E8',
                  data: ["101", "102", "103", "104", "105", "66", "107", "98", "109", "110", "111", "112","101", "102", "221", "104", "105", "240", "107", "108", "109", "110", "99", "112"]
              }, {
                  name: '应收未收',
                  color:'#F19D17',
                  data: ["133", "202", "203", "204", "205", "206", "114", "208", "209", "210", "133", "212","201", "202", "203", "204", "205", "206", "155", "208", "209", "210", "177", "212"]
              }, {
                  name: '免费车辆',
                  color:'#2FBB74',
                  data: ["133", "202", "203", "204", "205", "206", "114", "208", "209", "210", "133", "212","201", "202", "203", "204", "205", "206", "155", "208", "209", "210", "177", "212"]
              }, {
                  name: '异常放行',
                  color:'#EC525A',
                  data: ["133", "202", "203", "204", "205", "206", "114", "208", "209", "210", "133", "212","201", "202", "203", "204", "205", "206", "155", "208", "209", "210", "177", "212"]
              }]
            }} />
          </div>
          <div  style={styles.div2}>
            <div style={styles.div6}>
              <p  style={styles.p2}>应收未收总计</p>
              <p style={styles.p2}><span style={styles.span1}>1754</span>元</p>
            </div>
            <div style={styles.div5}>
              <p style={styles.p2}>免费车辆总计</p>
              <p style={styles.p2}><span style={styles.span1}>8363</span>元</p>
            </div>
            <div style={styles.div5}>
              <p style={styles.p2}>异常放行总计</p>
              <p style={styles.p2}><span style={styles.span1}>8363</span>元</p>
            </div>
            <div style={styles.div5}>
              <p style={styles.p2}>潜在收入</p>
              <p style={styles.p2}><span style={styles.span1}>8363</span>元</p>
            </div>
          </div>
        </div>
        <div style={styles.div1}>
          <p style={styles.p1}>收入对比</p>
          <div style={styles.divChart1}>
            <LineChartAnalysis id="IncomeContrastChart" chartData = {{
              xAxisData: ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12","13","14","15","16","17","18","19","20","21","22","23"],
              seriesData: [{
                  name: '无线飞翔停车场',
                  color:'#49C0E8',
                  data: ["10", "102", "103", "104", "105", "66", "107", "98", "109", "110", "111", "112","101", "102", "221", "104", "105", "240", "107", "108", "109", "110", "99", "112"]
              }]
            }} />
          </div>
        </div>
        <div style={styles.div1}>
          <p style={styles.p1}>收入构成</p>
          <div style={styles.divChart2}>
            <div style={styles.divpie1}>
              <PieChartAnalysis id={'incomeFormChart1'} title={''} chartData={[{name:"临停收入",value:234,color:"#f8a20f"},{name:"月卡收入",value:138,color:"#3db666"},{name:"储值卡收入",value:1122,color:"#32d2c9"}]} />
            </div>
            <div style={styles.divpie1}>
              <PieChartAnalysis id={'incomeFormChart2'} title={''} chartData={[{name:"实际收入",value:234,color:"#f8a20f"},{name:"应收未收",value:138,color:"#3db666"},{name:"免费车辆",value:1122,color:"#32d2c9"},{name:"异常放行",value:112,color:"#32d2c9"}]} />
            </div>
            <div style={styles.divpie2}>
              <PieChartAnalysis id={'incomeFormChart3'} title={''} chartData={[{name:"现金",value:234,color:"#f8a20f"},{name:"电子支付",value:138,color:"#3db666"},{name:"城市通",value:1022,color:"#32d2c9"},{name:"银联",value:22,color:"#e96fe4"}]} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IncomeAnalysis;
