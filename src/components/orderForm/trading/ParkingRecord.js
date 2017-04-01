import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import InputBox from '../../common/InputBox.js'
import Yymmdd from '../../common/Yymmdd.js'
import ContentTable from './trading_style/ContentTable.js'
import {getTableParkingRecord} from '../../../request/requestParking.js'
import DownBox from '../../common/DownBox.js'
import {queryOrderListInfo} from '../../../request/queryOrderListInfo'

class ParkingRecord extends React.Component {
    constructor() {
        super();
        this.state = {
            //parksData: {details: []},
			parksData: []
        }
    }
    //请求的数据
    parkRequest() {
        getTableParkingRecord().then((res) => {
            this.setState({parksData: res.data})
        });
    }
    //点击查找表格中的数据
    handleSelect() {
		//假数据
        //this.parkRequest()

		//接口查询
		let session = this.props.propsData.savedLoginAcount[0].session;
		let cust_id = this.props.propsData.savedLoginAcount[0].cust_id;

		var reqData = {
			"maxid": "0",
	        "maxcount": "10",
			"cust_id": "8010000000001",
		};
		queryOrderListInfo(reqData, cust_id, session)
		.then((res) => {
		    this.setState({parksData: res})
		});
    }

    render() {
        let styles = {
            themeBackground: {
                width: '100%',
                backgroundColor: '#EBEFF2'
            },
            contentBackground: {
                backgroundColor: '#FFFFFF',
                fontSize: '18px',
                width: '97%',
                margin: 'auto',
                lineHeight: '30px',
                borderBottomRightRadius: '4px',
                borderBottomLeftRadius: '4px',
                fontFamily: "微软雅黑"
            },
            locationInputBoxNumber: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 39px',
                float: 'left'
            },
            locationInputBoxTime: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 25px',
                float: 'left',
            },
			locationInputBoxTime2: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 40px',
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
                borderRadius: '4px',
                fontFamily: "微软雅黑",
                marginTop: '20px',
                padding: '14px 14px'
            },
            optionsLocation: {
                textAlign: 'right',
                float: 'left',
				lineHeight:'44px',
            },
			optionsLocationInput2: {
                width: '225px',
                textAlign: 'right',
                float: 'left',
				//padding:'5px 5px'
				margin:'5px 0 0 5px'
            },
        }
        return (
            <div>
                <div style={styles.themeBackground}>
                    <div style={styles.contentBackground} className='row'>
                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxNumber}>
                                <span style={styles.optionsLocation}>车牌号：</span>
								<span style={styles.optionsLocationInput2}><InputBox /></span>
                            </div>

                        </div>
                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxTime}>
                                <span style={styles.optionsLocation}>开始时间：</span><span style={styles.optionsLocationInput2}><Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/></span>
                            </div>
                            <div style={styles.locationInputBoxTime2}>
                                <span style={{float: 'left',lineHeight:'44px'}}>结束时间：</span><span style={styles.optionsLocationInput2}><Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/></span>
                            </div>
                        </div>
                        <div className='col-md-12' style={{marginTop: '15px'}}>
                            <div className='col-md-12' style={styles.locationOptions}>
                                <button style={styles.clickOptions} onClick={this.handleSelect.bind(this)}>查询</button>
                                <button style={styles.clickOptions}>导出</button>
                            </div>
                        </div>
                    </div>
                    <div style={styles.locationTable}>
                        <ContentTable data={this.state.parksData} dataTitle={{
                            carNumber: '车牌号',
                            payCost: '缴费方式',
                            parkingCar: '停车场',
                            parkingSpace: '车位号',
                            orderCar: '订单状态',
                            orderTime: '下单时间',
                            inputField: '入场时间',
                            outField: '出场时间',
                            details: '详情'
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParkingRecord;
