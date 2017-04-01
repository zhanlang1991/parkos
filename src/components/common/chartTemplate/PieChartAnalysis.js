import React, { PropTypes } from 'react'
import echarts from 'echarts'
// 引入饼状图
import 'echarts/chart/pie'
// 引入提示框和标题组件
import 'echarts/component/tooltip'
import 'echarts/component/title'

class PieChartAnalysis extends React.Component {
  constructor(){
    super();
    this.state={
      seriesData:[],
      legendData:[],
      color:[]
    }
  }

  componentWillMount(){
    //legend数据
    let legendDataMap = this.props.chartData.map((item) => (
      {
          name: item.name,
          textStyle: {
              fontSize: 12
              //fontWeight:'bolder'
          }
      }
    ))
    // seriers中的数据
    let seriesDataMap = this.props.chartData.map((item) => (
      {value:item.value, name:item.name}
    ))
    //color数据
    let myColor = this.props.chartData.map((item) => (
      item.color
    ))
    this.setState({
      seriesData:seriesDataMap,
      legendData:legendDataMap,
      color:myColor
    })
  }

componentDidMount(){
  this.viewIncomeFormImg()
}
// 车场收入趋势曲线
viewIncomeFormImg() {
  var pieChart = echarts.init(document.getElementById(this.props.id));
  var chartOption = {
    title: {
               text: this.props.title,
               x: 'center',
               y:'center',
               textStyle: {
                   color: '#6b6b6b'
               }
           },
         tooltip : {
               trigger: 'item',
               showDelay: 500,
               formatter: "{b} : {c} ({d}%)"
           },
           legend: {
               orient : 'vertical',
               x : 'left',
               data:this.state.legendData
           },
           toolbox: {
               show : false,
               feature : {
                   mark : {show: false},
                   dataView : {show: false, readOnly: false},
                   magicType : {
                       show: false,
                       type: ['pie', 'funnel'],
                       option: {
                           funnel: {
                               x: '25%',
                               width: '50%',
                               funnelAlign: 'center',
                               max: 1548
                           }
                       }
                   },
                   restore : {show: false},
                   saveAsImage : {show: false}
               }
           },
           calculable : false,
           series : [
               {
                   name:this.props.title,
                   type:'pie',
                   radius : ['43%', '70%'],
                   itemStyle : {
                       normal : {
                           label : {
                               show : false
                           },
                           labelLine : {
                               show : false
                           }
                       }
                   },
                   data:this.state.seriesData
               }
           ]
  };
  pieChart.setOption(chartOption);
}
  render () {
    let styles = {
      div:{
        width:"100%",
        height:'300px'
      }
    }
    return(
        <div id={this.props.id} style={styles.div}></div>
    )
  }
}
PieChartAnalysis.defaultProps={
  id:"chartId",
  title:"chartTitle",
  chartData:[{name:"项目名称",value:234,color:"teal"}]
}
PieChartAnalysis.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  chartData:PropTypes.array.isRequired
};
export default PieChartAnalysis;
