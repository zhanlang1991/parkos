import React, { PropTypes } from 'react'
// 引入 ECharts 主模块
var echarts = require('echarts/echarts');
// 引入柱状图
require('echarts/chart/line');
// 引入提示框和标题组件
require('echarts/component/tooltip');
require('echarts/component/title');

class LineAreaChart extends React.Component {
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
    {
      name:item.name,
      textStyle:{
        color:'#504e4f',
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
            color:item.color,
            areaStyle: {
              type: 'default',
              },
          }
        },
        lineStyle: {
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
      color:this.state.color,
      tooltip : {
            trigger: 'axis',
        //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //         type : 'shadow'       // 默认为直线，可选为：'line' | 'shadow'
        //     },
        // noDataLoadingOption :{
        //     text: '暂无数据',
        //     effect:'bubble',
        //     effectOption : {
        //         effect: {
        //             n: 0 //气泡个数为0
        //         }
        //     }
        // },
          // formatter:function(series)
        //     {
        //       var relVal = '';
        //     for(var i=0;i<series.length;i++){
        //       if(series[i].seriesName=='实际收入'){
        //           if (typeof(series[i].data) == "undefined") {
        //             relVal = relVal+ '实际收入:'+ '-' +'<br/>';
        //       }else{
        //         relVal = relVal+ '实际收入:'+ parseFloat(series[i].data).toLocaleString() +'<br/>';
        //       }
        //       }
        //     }
        //     for(var i=0;i<series.length;i++){
        //       if(series[i].seriesName=='收入趋势'){
        //           if (typeof(series[i].data) == "undefined") {
        //             relVal = relVal+ '收入趋势:'+ '-' +'<br/>';
        //       }else{
        //         relVal = relVal+ '收入趋势:'+ parseFloat(series[i].data).toLocaleString() +'<br/>';
        //       }
        //       }
        //     }
        //       return relVal;
        //   }
      },
        legend: {
          show:true,
          orient:'horizontal',
          x:'center',
          y:'top',
          height:'20',
          padding:[2,5,2,10],
          textStyle:{color:'white'},
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
              color:'#504e4f',
                type : 'category',
                boundaryGap : false,
                splitLine : {show: false},
                // show:false,
                data : this.state.xAxisData,
              //   axisLabel : {
              //     show : true,
              //     textStyle : {
              //     color : '#ffffff',
              //     fontSize:11
              //     }
              // },
              // splitLine:{
              //   show:true,
              //   lineStyle:{
              //     color:'#505050'
              //   }
              // },
              // axisLine:{
              //   lineStyle:{
              //     color:'#505050'
              //   }
              // }
            }
        ],
        yAxis : [
            {
              type : 'value',
              splitLine : {show: false},
              name:'单位：元'
            //   color:'504e4f',
            //   type : 'value',
            //   splitLine : {show: false},
            //   axisLabel : {
            //   show : true,
            //   textStyle : {
            //   color : '#ffffff',
            //   fontSize:11
            //   }
            // },
              // splitLine:{
              //   show:true,
              //   lineStyle:{
              //     color:'#505050'
              //   }
              // },
              // axisLine:{
              //   lineStyle:{
              //     color:'#505050'
              //   }
              // }
            }
        ],
        series :this.state.seriesData

    }
  // this.getIncomeTrendOrHistory()
  lineChart.setOption(chartOption);
}
//获取并导入图标数据
getIncomeTrendOrHistory(){
}

  render () {

    return(
        <div id={this.props.id} style={{"width":"100%","height":"400px"}}></div>
    )
  }
}
LineAreaChart.defaultProps={
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
LineAreaChart.propTypes = {
  id: PropTypes.string.isRequired,
  chartData: PropTypes.object.isRequired
};
export default LineAreaChart;
