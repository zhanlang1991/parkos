import React, { PropTypes } from 'react'
// 引入 ECharts 主模块
var echarts = require('echarts/echarts');
// 引入柱状图
require('echarts/chart/line');
// 引入提示框和标题组件
require('echarts/component/tooltip');
require('echarts/component/title');

class LineChartAnalysis extends React.Component {
  constructor(){
    super();
    this.state={
      seriesData:[],
      xAxisData:[],
      legendData:[],
      color:[],
      isAreaChart:true
    }
  }
componentWillMount(){
  // console.log(this.props.chartData.isAreaChart);
  //legend数据
  let legendDataMap = this.props.chartData.seriesData.map((item) => (
    {
      name:item.name,
      textStyle:{
        fontSize:12
      }
    }
  ))
  // seriers中的数据
  let seriesDataMap = this.props.chartData.seriesData.map((item) => (
    {
        name:item.name,
        type:'line',
        smooth : true,
        itemStyle:{
          normal:{
          }
        },
        lineStyle: {
          color:item.color,
          width: '2' //设置折现粗细
        },
        data:item.data
    }
  ))
  //color数据
  let myColor = this.props.chartData.seriesData.map((item) => (
    item.color
  ))
  this.setState({
    seriesData:seriesDataMap,
    legendData:legendDataMap,
    xAxisData:this.props.chartData.xAxisData,
    color:myColor
  })
}
componentDidMount(){
  this.viewReportImg()
}

//设置图标样式
viewReportImg(){
    var lineChart = echarts.init(document.getElementById(this.props.id));
    var chartOption = {
      tooltip : {
         trigger: 'axis',
      },
     legend: {
         data:this.state.legendData,
         x:'center',
         y:'top'
     },
     calculable : false,
     toolbox: {
         show : false,
         feature : {
             mark : {show: false},
             dataView : {show: false, readOnly: false},
             magicType : {show: false, type: ['line', 'bar', 'stack', 'tiled']},
             restore : {show: false},
             saveAsImage : {show: false}
         }
     },
     xAxis : [
         {
             type : 'category',
             boundaryGap : false,
             splitLine : {show: false},
             data : this.state.xAxisData
         }
     ],
     yAxis : [ {
        type : 'value',
        splitLine : {show: false},
        name:'单位：次    ',
        axisLabel:{
        show:true,
        interval:'auto',
        formatter:'{value}'
        }
     }],
     series :this.state.seriesData
    }
  lineChart.setOption(chartOption);
}

  render () {
    let styles = {
      div:{
        width:"100%",
        height:'400px'
      }
    }
    return(
        <div id={this.props.id} style={styles.div}></div>
    )
  }
}
LineChartAnalysis.defaultProps={
  id:"chartId",
  chartData : {
      xAxisData: ["01", "02"],
      seriesData: [{
          name: '图例1',
          color:'teal',
          data: ["11", "102"]
      }, {
          name: '图例2',
          data: ["21", "202"]
      }]
  }
	 }
LineChartAnalysis.propTypes = {
  id: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired
};
export default LineChartAnalysis;
