import React, { PropTypes } from 'react'
// 引入 ECharts 主模块
var echarts = require('echarts/echarts');
// 引入柱状图
require('echarts/chart/bar');
// 引入提示框和标题组件
require('echarts/component/tooltip');
require('echarts/component/title');

class BarChartHorizontal extends React.Component {
  constructor(){
    super();
    this.state={
      seriesData:[],
      yAxisData:[],
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
      name:'',
      type:'bar',
      barWidth : 18,
      data :item.data,
      itemStyle:{
        normal:{
          color:function(params){
            var colorList = [
            '#7ccafa','#fb8357','#e96fe4','#3edf3e','#78a6f6','#f573b5','#cb7ede'
            ];
            return colorList[params.dataIndex]
          }
        }
      }
    }
  ))
  //color数据
  let myColor = this.props.chartData.seriesData.map((item) => (
    item.color
  ))
  this.setState({
    seriesData:seriesDataMap,
    legendData:legendDataMap,
    yAxisData:this.props.chartData.yAxisData,
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
         trigger: 'axis',//柱状图线
           axisPointer : {            // 坐标轴指示器，坐标轴触发有效
               type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
               shadowStyle : {
                   color: 'rgba(210,210,210,0.2)'
                 }
           },
           formatter:function(series)
           {
             var relVal = '';
             for (var i = 0; i < series.length; i++) {
                 var str = series[i].name;
                 var arr = str.split('\n');
                 if (typeof(series[i].data) == "undefined") {
                     relVal = arr.join('') + ':' + '-';
                 } else {
                     relVal = arr.join('') + ':' + parseFloat(series[i].data).toLocaleString();
                 }
             }
             return relVal;
         }
     },
     legend: {
         data:[]
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
             type : 'value',
             splitLine : {show: false},
             //boundaryGap : false,
             name:'单位：次    '
         }
     ],
     yAxis : [ {
     type : 'category',
           splitLine : {show: false},
     data :this.state.yAxisData
     }],
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
BarChartHorizontal.defaultProps={
  id:"chartId",
  chartData : {
      yAxisData: ["01", "02"],
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
BarChartHorizontal.propTypes = {
  id: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired
};
export default BarChartHorizontal;
