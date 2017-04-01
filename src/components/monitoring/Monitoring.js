import React, { PropTypes } from 'react'

import Header from './header/Header'
import TopCount from './header/TopCount'
import LeftParkShow from './leftParkShow/LeftParkShow'
import Charts from './charts/Charts'
import { getQueryDayParkSerial } from '../../request/queryDayParkSerial'
import '../../styles/monitoring.css'



class Monitoring extends React.Component {
	constructor(){
		super();
		this.state = {
			rootWidth:'',
			rootHeight:''
		}
	}
	componentWillMount(){
		// let reqData = {
		// 	"park_code":"",
        //     "agent_id":"8010000000001",
        //     "instart_datetime":"",
        //     "inend_datetime":"",
        //     "outstart_datetime":"",
        //     "outend_datetime":"",
        //     "maxid":"0",
        //     "maxcount":"20"
        // };
		// let custId = this.props.savedLoginAcount[0].cust_id;
		// let session = this.props.savedLoginAcount[0].session;
		// getQueryDayParkSerial(reqData,custId,session)
		// .then((res) => {
		// 	// console.log(res);
		// })

		window.onresize = function(){
			console.log('window is onresize');
			this.setState({
				rootWidth:window.innerWidth,
				rootHeight:window.innerHeight
			})
		}.bind(this)
	}

	render () {
		return(
			<div id="rootCover" style={{'width':'100%','height':'100%','background':'#2c2c2c'}}>
					<div id="totalDiv" className="clearfix" style={{'width':'100%','height':'100%','position':'relative','fontFamily':'微软雅黑'}}>
						<Header myHeight={this.state.rootHeight} passProps={this.props} />
						<TopCount myHeight={this.state.rootHeight} passProps={this.props} />
						<div style={{"float":"left","width":"30%"}}>
							<LeftParkShow myHeight={this.state.rootHeight} passProps={this.props} />
						</div>
						<div style={{"float":"left","width":"70%"}}>
							<Charts myHeight={this.state.rootHeight} passProps={this.props} />
						</div>
					</div>
			</div>
		)
	}
}

export default Monitoring;
