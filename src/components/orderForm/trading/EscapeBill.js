import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import InputBox from '../../common/InputBox.js'
import EscapeContentTable from './trading_style/EscapeContentTable.js'
import {getTableParks, getGoods} from '../../../request/requestParking.js'
import DownBox from '../../common/DownBox.js'
import Yymmdd from '../../common/Yymmdd.js'
import {queryEscapeParkSerial} from '../../../request/queryEscapeParkSerial'
import {parkQueryTollInfo} from '../../../request/parkQueryTollInfo'
//逃逸流水
class EscapeBill extends React.Component {
    constructor() {
        super();
        this.state = {
            parksData: {details:[]},
			// goodsData: [],
			goodsParksData: [],
        }
    }
	componentWillMount() {
		// getGoods().then((res) => {
        //     this.setState({goodsData: res.data})
        // });

		let cust_id = this.props.propsData.savedLoginAcount[0].cust_id;
		let session = this.props.propsData.savedLoginAcount[0].session;

		var reqData = {
			"maxid": "10",
	        "maxcount": "10",
			"agent_id": "8010000000001",
		};
		parkQueryTollInfo(reqData, cust_id, session)
		.then((res) => {
		    console.log(res);
			this.setState({goodsParksData: res})
		});
    }
    //请求的数据
    parkRequest() {
        getTableParks().then((res) => {
            this.setState({parksData: res.data})
        });

		let cust_id = this.props.propsData.savedLoginAcount[0].cust_id;
		let session = this.props.propsData.savedLoginAcount[0].session;

		var reqData = {
			"maxid": "0",
			"maxcount": "5",
			"agent_id": "8010000000001",
			"instart_datetime": "",
			"inend_datetime": "",
			"outstart_datetime": "",
			"outend_datetime": "",
		};
		queryEscapeParkSerial(reqData, cust_id, session)
		.then((res) => {
			console.log(res);
		});
    }
    //点击查找表格中的数据
    handleSelect() {
        this.parkRequest()
    }

    render() {
        let styles = {
            themeBackground: {
                width: '100%',
                backgroundColor: '#EBEFF2',
            },
            contentBackground: {
                backgroundColor: '#FFFFFF',
                fontSize: '18px',
                width: '97%',
                margin: 'auto',
                lineHeight: '30px',
				borderBottomRightRadius:'5px',
				borderBottomLeftRadius:'5px',
                fontFamily: "微软雅黑"
            },
            locationInputBoxNumber: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 0',
				float: 'left',
				padding:'0 39px'
            },
            locationInputBoxTime: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 39px',
                float: 'left',
                width: '40%'
            },
			locationInputBoxTime2: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 25px',
                float: 'left',
            },
            clickOptions: {
                width: '120px',
                borderRadius: '20px',
                color: '#FFC10A',
                backgroundColor: '#FFF',
                borderColor: '#FFC10A',
                border: '1px solid',
                margin: '0 5px',
                fontSize: '12px'
            },
            locationOptions: {
                width: '100%',
                textAlign: 'center',
                padding: '10px 0'
            },
            locationTable: {
                backgroundColor: '#FFFFFF',
                fontSize: '14px',
                width: '97%',
                margin: 'auto',
                borderRadius: '5px',
                fontFamily: "微软雅黑",
                marginTop: '20px',
                padding: '14px 14px'
            },
			optionsLocationInput2: {
				textAlign: 'right',
				float: 'left',
				margin:'5px 0 0 5px',
				width:'225px'
			},
			optionsLocation: {
				textAlign: 'right',
				float: 'left',
			},
        }
        return (
            <div>
                <div style={styles.themeBackground}>
                    <div style={styles.contentBackground} className='row'>
                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxNumber}>
                                <span style={styles.optionsLocation}>车牌号：</span><span style={styles.optionsLocationInput2}><InputBox/></span>
                            </div>
                        </div>
						<div className='col-md-12'>
                            <div style={styles.locationInputBoxTime}>
                                <span style={styles.optionsLocation}>收费员：</span>
								<div style={{float: 'left',width:'225px',height:'44px',padding:'5px 0 0 0',marginLeft:'5px'}}>
									<DownBox data={this.state.goodsParksData}/>
								</div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxTime2}>
                                <span style={styles.optionsLocation}>开始时间：</span><span style={styles.optionsLocationInput2}><Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/></span>
                            </div>
                            <div style={styles.locationInputBoxTime}>
                                <span style={{
                                    float: 'left'
                                }}>结束时间：</span><span style={styles.optionsLocationInput2}><Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/></span>
                            </div>
                        </div>
                        <div className='col-md-12' style={{
                            marginTop: '20px'
                        }}>
                            <div className='col-md-12' style={styles.locationOptions}>
                                <button style={styles.clickOptions} onClick={this.handleSelect.bind(this)}>查询</button>
                                <button style={styles.clickOptions}>导出</button>
                            </div>
                        </div>
                    </div>
                    <div style={styles.locationTable}>
						<EscapeContentTable data={this.state.parksData}  dataTitle={{ carNumber:'车牌号',payCost:'收费员',parkingCar:'停车场名称', parkingSpace:'区域',orderCar:'入场时间', orderTime:'出场时间',inputField:'停车时长', outField:'应收金额', details:'实收金额', details2:'是否缴费', details3:'收费类型'}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default EscapeBill;
