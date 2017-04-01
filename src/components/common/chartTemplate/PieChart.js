import React, { PropTypes } from 'react'
import echarts from 'echarts'
// 引入饼状图
import 'echarts/chart/pie'
// 引入提示框和标题组件
import 'echarts/component/tooltip'
import 'echarts/component/title'

class PieChart extends React.Component {
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
  this.viewFormImg()
}
//调整窗口宽高时自适应布局
componentWillReceiveProps(nextProps){
    // console.log(nextProps);
    this.viewFormImg()
}

// 车场收入趋势曲线
viewFormImg() {
  var pieChart = echarts.init(document.getElementById(this.props.id));
  var chartOption = {
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)",
          showDelay: 40,
          hideDelay: 800,
          formatter: '{b} : {c} ({d}%)'
      },
      color:this.state.color,
      legend: {
          show: true,
          orient: 'horizontal',
          x: 'left',
          y: '84%',
          itemGap:5,
          padding:5,
          textStyle: {
              color: '#bababa'
          },
          data: this.state.legendData
      },
      toolbox: {
          show: false,
          feature: {
              mark: {
                  show: true
              },
              dataView: {
                  show: true,
                  readOnly: false
              },
              magicType: {
                  show: true,
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
              restore: {
                  show: true
              },
              saveAsImage: {
                  show: true
              }
          }
      },
      calculable: false,
      series: [{
          name: '收入构成',
          type: 'pie',
          radius: ['25%', '55%'],
          center: ['50%', '45%'],
          avoidLabelOverlap: true,
          itemStyle: {
              normal: {
                  label: {
                      show: true,
                      textStyle: {
                          fontSize: 13,
                          //fontWeight:'bolder',
                      },
                      formatter: '{b}\n({d}%)',
                      position: ['35', '170']
                  },
                  labelLine: {
                      show: false,
                      length: 5,
                      length2: 55,
                      left: 10
                  }
              },
              emphasis: {
                  label: {
                      show: false,
                      position: 'center',
                      textStyle: {
                          fontSize: '15',
                          //fontWeight : 'bold'
                      }
                  }
              }
          },
          data: this.state.seriesData
      }]
  };
  pieChart.setOption(chartOption);
}
  render () {
    let styles = {
      div:{
        width:"100%",
        height:this.props.chartHeight
      }
    }
    return(
        <div id={this.props.id} style={styles.div}></div>
    )
  }
}
PieChart.defaultProps={
  id:"chartId",
  chartData:[{name:"项目名称",value:234,color:"teal"}]
}
PieChart.propTypes = {
  id: PropTypes.string.isRequired,
  chartData:PropTypes.array.isRequired
};
export default PieChart;
