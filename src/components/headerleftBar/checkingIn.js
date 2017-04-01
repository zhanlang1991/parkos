import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import InputBox from '../common/InputBox.js'
import StyleTables from './module/StyleTables.js'
import {getTableParkingRecord} from '../../request/requestParking.js'
import DownBox from '../common/DownBox.js'
import Yymmdd from '../common/Yymmdd'
import Ymdhms from '../common/Ymdhms'
import {queryEnterpriseByAccountId} from '../../request/queryEnterpriseByAccountId'

class CheckingIn extends React.Component {
    constructor() {
        super();
        this.state = {
            parksData: {details: []}
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
        this.parkRequest();
		// var reqData = {
        //     "agent_id": "8010000120652",
        //     "park_code": "420111200345"
        // };
        // parkQueryWorkInfo(reqData, "0", "").then((res) => {
        //     this.props.saveUserLogin(res[0])
        //     browserHistory.push('/')
        // })
		console.log(this.props);
		let ansCommData = this.props.savedLoginAcount[0]
		console.log(ansCommData);
		var reqData = {
			"agent_id": "8010000120652",
	        "park_code": "420111200345"
		};
		queryEnterpriseByAccountId(reqData, ansCommData.cust_id, ansCommData.session)
		.then((res) => {
		    console.log(res);
		});
    }

    render() {
        let styles = {
            themeBackground: {
                width: '100%',
                backgroundColor: '#EBEFF2',
				paddingTop:'20px'
            },
			titleBackground: {
                backgroundColor: '#FFFFFF',
                height: '50px',
                fontSize: '24px',
                width: '97%',
                margin: 'auto',
                textAlign: 'center',
                lineHeight: '50px',
                borderTopRightRadius: '4px',
                borderTopLeftRadius: '4px',
                fontFamily: "微软雅黑",
                borderBottom: '1px solid #EBEFF2',
                color: '#333',
				position:'relative'
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
                margin: '10px 0 0 11px',
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
				margin:'5px 0 0 5px'
            },
        }
        return (
            <div>
                <div style={styles.themeBackground}>
				<div style={styles.titleBackground}>
                        <span>账号管理</span>
                    </div>
                    <div style={styles.contentBackground} className='row'>
                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxNumber}>
                                <span style={styles.optionsLocation}>收费员姓名：</span><span style={styles.optionsLocationInput2}><DownBox /></span>
                            </div>

                        </div>
                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxTime}>
                                <span style={styles.optionsLocation}>打卡类型：</span><span style={styles.optionsLocationInput2}><DownBox /></span>
							{/*时间传值   <Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/>*/}
                            </div>
                            <div style={styles.locationInputBoxTime2}>
                                <span style={{float: 'left',lineHeight:'44px'}}>考勤日期：</span><span style={styles.optionsLocationInput2}><Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/></span>
                            </div>
                        </div>
                        <div className='col-md-12' style={{marginTop: '15px'}}>
                            <div className='col-md-12' style={styles.locationOptions}>
                                <button style={styles.clickOptions} onClick={this.handleSelect.bind(this)}>查询</button>
                            </div>
                        </div>
                    </div>
                    <div style={styles.locationTable}>
                        <StyleTables data={this.state.parksData} dataTitle={{
                            carNumber: '停车场名称',
                            payCost: '收费员名称',
                            parkingCar: '考勤日期',
                            parkingSpace: '班次名称',
                            orderCar: '考勤时间',
                            orderTime: '打卡类型',
                            inputField: '排班ID'
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckingIn;
