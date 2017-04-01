import React, { PropTypes } from 'react'
// 引入 ECharts 主模块
var echarts = require('echarts/echarts');
// 引入柱状图
require('echarts/chart/bar');
// 引入提示框和标题组件
require('echarts/component/tooltip');
require('echarts/component/title');

class BarChartAnalysis extends React.Component {
  constructor(){
    super();
    this.state={
      seriesData:[],
      xAxisData:[],
      legendData:[],
      color:[],
    }
  }
componentWillMount(){
  //legend数据
  let legendDataMap = this.props.chartData.seriesData.map((item) => (
      item.name
  ))
  // seriers中的数据
  let seriesDataMap = this.props.chartData.seriesData.map((item) => (
    {
      name:item.name,
      type:'bar',
      stack: item.stack,
      barMaxWidth :8,
      barGap : 0,
      barCategoryGap : '60%',
      itemStyle: item.itemStyle,
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
    var barChart = echarts.init(document.getElementById(this.props.id));
    var chartOption = {
      tooltip : {
               trigger: 'axis',
               axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                   type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
                     shadowStyle : {
                       color: 'rgba(210,210,210,0.2)'
                     }
               },
               formatter : function(series) {
                   var relVal = '';
                   for (var i = 0; i < series.length; i++) {
                       if (series[i].seriesName == '进场流量') {
                           if (typeof(series[i].data) == "undefined") {
                               relVal = relVal + '进场流量 : ' + '-' + '<br/>';
                           } else {
                               relVal = relVal + '进场流量 : ' + parseFloat(series[i].data).toLocaleString() + '<br/>';
                           }
                       }
                   }
                   for (var i = 0; i < series.length; i++) {
                       if (series[i].seriesName == '进场流量预测') {
                           if (typeof(series[i].data) == "undefined") {
                               relVal = relVal + '进场流量预测 : ' + '-' + '<br/>';
                           } else {
                               relVal = relVal + '进场流量预测 : ' + parseFloat(series[i].data).toLocaleString() + '<br/>';
                           }
                       }
                   }
                   for (var i = 0; i < series.length; i++) {
                       if (series[i].seriesName == '出场流量') {
                           if (typeof(series[i].data) == "undefined") {
                               relVal = relVal + '出场流量 : ' + '-' + '<br/>';
                           } else {
                               relVal = relVal + '出场流量 : ' + parseFloat(-series[i].data).toLocaleString() + '<br/>';
                           }
                       }
                   }
                   for (var i = 0; i < series.length; i++) {
                       if (series[i].seriesName == '出场流量预测') {
                           if (typeof(series[i].data) == "undefined") {
                               relVal = relVal + '出场流量预测 : ' + '-';
                           } else {
                               relVal = relVal + '出场流量预测 : ' + parseFloat(-series[i].data).toLocaleString();
                           }
                       }
                   }
                   return relVal;
               }
           },
           legend: {
               data:this.state.legendData
           },
           toolbox: {
               show : true,
               feature : {
                   mark : {show: false},
                   dataView : {show: false, readOnly: false},
                   magicType : {show: false, type: ['line', 'bar']},
                   restore : {show: false},
                   saveAsImage : {show: false}
               }
           },
           calculable : false,
           xAxis : [
               {
                   type : 'category',
                   axisTick : {show: false},
                   splitLine : {show: false},
                   data : this.state.xAxisData
               }
           ],
           yAxis : [
           {
               type : 'value',
                   splitLine : {show: false},
             name:'单位：辆    ',
               axisLabel : {
                       formatter: function(param){
                         if(param<0){
                           return -param;
                         }else{
                           return param;
                         }
                     }
             }
           }
           ],
           series : this.state.seriesData

       };
  barChart.setOption(chartOption);
}


  render () {

    return(
        <div id={this.props.id} style={{"width":"100%","height":"400px"}}></div>
    )
  }
}
BarChartAnalysis.defaultProps={
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
BarChartAnalysis.propTypes = {
  id: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired
};
export default BarChartAnalysis;
