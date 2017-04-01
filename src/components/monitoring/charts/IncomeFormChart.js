import React, { PropTypes } from 'react'

import PieChart from '../../common/chartTemplate/PieChart'

class IncomeFormChart extends React.Component {
    constructor(){
      super();
      this.state={
        rootHeight:window.innerHeight*0.33
      }
    }
    //调整窗口宽高时自适应布局
    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
        this.setState({
            rootHeight:nextProps.myHeight*0.33
        })
    }
  render () {
    let styles = {
      img1:{
        'position': 'absolute',
        'paddingLeft': '15px',
        'paddingTop': '2%'
      },
      span1:{
        lineHeight:'40px',
        color:'#33c2ba',
        fontSize: '14px',
        marginLeft:'50px',
        marginTop:'0.5%'
      },
      div1:{
        width:'100%',
        height:`${this.state.rootHeight}px`,
        background:'#2c2c2c'
      },
      div2:{
        width:'95%',
        height:'100%',
        zIndex:'10'
      },
      div4:{
        background:'#3d3d3d',
        position:'relative',
        width:'100%',
        height:'100%',
        borderTop:'3px solid #32d2c9',
        overflow:'hidden'
      },
      div5:{
        width:'100%',
        color:'#3d3d3d'
      },
      div6:{
        position:'absolute',
        top:'10px',
        left:'0',
        width:'100%',
        height:'100%',
        color:'#3d3d3d'
      }
    }
    return(
      <div style={styles.div1}>
        <div style={styles.div2}>
          <div style={styles.div4} >
            <div style={styles.div5}>
              <span style={{'float':'left'}}><img src={require("../../../images/incomeFormIcon.png")} style={styles.img1} /></span>
              <span style={styles.span1}>收入构成</span>
            </div>
            <div style={styles.div6}>
              <PieChart id="incomeFormChart" chartHeight={`${this.state.rootHeight}px`} chartData={[{name:"临停",value:234,color:"#f8a20f"},{name:"月卡",value:138,color:"#3db666"},{name:"储值卡",value:1122,color:"#32d2c9"}]} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IncomeFormChart;
