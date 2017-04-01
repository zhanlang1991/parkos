import React, { PropTypes } from 'react'
// 引入 ECharts 主模块
var echarts = require('echarts/echarts');
// 引入柱状图
require('echarts/chart/bar');
// 引入提示框和标题组件
require('echarts/component/tooltip');
require('echarts/component/title');

class BarChart extends React.Component {
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
  //legend数据
  let legendDataMap = this.props.chartData.seriesData.map((item) => (
      item.name
  ))
  // seriers中的数据
  let seriesDataMap = this.props.chartData.seriesData.map((item) => (
    {
        name:item.name,
        type:'bar',
        stack: this.props.ifStack,
        barMaxWidth :8,
        barGap : 0,
        barCategoryGap : '60%',
        barWidth : 8,
        itemStyle : {normal: {color:item.color,barBorderRadius: [4, 4, 0, 0]}},
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
  	        }
  	    },
  	    legend: {
  	        data:this.state.legendData
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
  	    grid : {
  	    	left : '3%',
  	    	right : '4%',
  	    	bottom : '3%',
  	    	containLabel : true
  	    },
  	    xAxis : [
  	        {
  	            type : 'category',
  	            splitLine : {show: false},
  	            data : this.state.xAxisData
  	        }
  	    ],
  	    yAxis : [ {
  			type : 'value',
              splitLine : {show: false},
              name:'单位：元 ',
              axisLabel : {
                 formatter: function(param){
                   if(param<0){
                     return -param;
                   }else{
                     return param;
                   }
               }
             }
  			}],
  	    series : this.state.seriesData
    }
  barChart.setOption(chartOption);
}


  render () {

    return(
        <div id={this.props.id} style={{"width":"100%","height":"400px"}}></div>
    )
  }
}
BarChart.defaultProps={
  id:"chartId",
  ifStack:''||null,
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
BarChart.propTypes = {
  id: PropTypes.string.isRequired,
  ifStack: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired
};
export default BarChart;
