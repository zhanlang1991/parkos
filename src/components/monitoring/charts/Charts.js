import React, { PropTypes } from 'react'

import IncomeChart from './IncomeChart'
import IncomeFormChart from './IncomeFormChart'
import FlowFormChart from './FlowFormChart'
import FlowChart from './FlowChart'
import Statistics from './Statistics'

class Charts extends React.Component {
  constructor(){
		super();
		this.state = {
			rootWidth:window.innerWidth,
			rootHeight:window.innerHeight*0.8673
		}
	}
  // componentWillMount(){
  //   this.setState({
  //     rootWidth:window.innerWidth,
  //     rootHeight:window.innerHeight
  //   })
  // }
  //调整窗口宽高时自适应布局
  componentWillReceiveProps(nextProps){
      // console.log(nextProps);
      this.setState({
          rootHeight:nextProps.myHeight*0.8673
      })
  }
  render () {
    let styles = {
      div1:{
        background:'#2c2c2c',
        width:'100%',
        height:'5px'
        // float:'right'
      },
        div2:{
          background:'#2c2c2c',
          width:'0.5%',
          height:`${this.state.rootHeight/0.8673*0.66+5}px`,
          float:'left'
        }
    }
    return(
      <div className="clearfix" style={{'background':'#3d3d3d','width':'100%','height':'88.6%'}}>
        <div style={{'width':'71%','height':'100%','float':'left'}}>
          <IncomeChart  myHeight={this.props.myHeight} />
          <div style={styles.div1}></div>
          <FlowChart  myHeight={this.props.myHeight} />
        </div>
        <div style={styles.div2}></div>
        <div style={{'width':'28.5%','height':'100%','float':'right'}}>
          <IncomeFormChart myHeight={this.props.myHeight} />
          <div style={styles.div1}></div>
          <FlowFormChart myHeight={this.props.myHeight} />
        </div>
        <div style={{'background':'#2c2c2c','width':'100%','height':'5px','clear':'both'}}></div>
        <Statistics />
      </div>
    )
  }
}

export default Charts;
