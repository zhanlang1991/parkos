import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import InputBox from '../../common/InputBox.js'
import SubscribeContentTable from './trading_style/SubscribeContentTable.js'
import {gettableParkingSubscribe} from '../../../request/requestParking.js'
import DownBox from '../../common/DownBox.js'
import Yymmdd from '../../common/Yymmdd.js'
import {queryAppointSeatInfoForBussiness} from '../../../request/queryAppointSeatInfoForBussiness'

class SubscribeRecord extends React.Component {
    componentDidMount() {
        $(".search").click(function() {
            $(this).addClass("hoverschd").parent().parent().parent().siblings().children().children().children().removeClass("hoverschd");
        })

    }
    constructor() {
        super();
        this.state = {
            parksData: {details: []}
        }
    }
    //请求的数据
    parkRequest() {
        gettableParkingSubscribe().then((res) => {
            this.setState({parksData: res.data})
        });
    }
    //点击查找表格中的数据
    handleSelect() {
        this.parkRequest()
		console.log(this.props);
		let cust_id = this.props.propsData.savedLoginAcount[0].cust_id;
		let session = this.props.propsData.savedLoginAcount[0].session;
        // console.log(this.props.propsData.savedLoginAcount[0].cust_id);

		var reqData = {
			"maxid": "100",
	        "maxcount": "10000",
			"cust_id": "8010000000001",
		};
		queryAppointSeatInfoForBussiness(reqData, cust_id, session)
		.then((res) => {
		    console.log(res);
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
                margin: '0 0 0 25px',
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
                padding: '14px 0'
            },
            searchLocation: {
                padding: '0px 20px 4px 5px'
            },
            optionsLocation: {
                textAlign: 'right',
                float: 'left',
				lineHeight:'44px',
				padding: '0 0 0 0',
            },
			optionsLocationInput2: {
				textAlign: 'right',
				float: 'left',
				margin:'5px 0 0 5px',
				width:'225px'
			},
        }
        return (
            <div>
                <div style={styles.themeBackground}>
                    <div style={styles.contentBackground} className='row'>
                        <div className='col-md-12'>

                            <div style={styles.locationInputBoxNumber}>
                                <span style={styles.optionsLocation}>预约类型：</span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label>
                                            <a className='search hoverschd'>
                                                <input type='radio' style={{display: 'none'}}/>
                                                全部
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{display: 'none'}}/>
                                                车位
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{display: 'none'}}/>
                                                充电桩
                                            </a>
                                        </label>
                                    </div>
                                </span>
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
                        <div className='col-md-12' style={{
                            marginTop: '15px'
                        }}>
                            <div className='col-md-12' style={styles.locationOptions}>
                                <button style={styles.clickOptions} onClick={this.handleSelect.bind(this)}>查询</button>
                                <button style={styles.clickOptions}>导出</button>
                            </div>
                        </div>
                    </div>
                    <div style={styles.locationTable}>
                        <SubscribeContentTable data={this.state.parksData} dataTitle={{
                            carNumber: '会员名',
                            payCost: '车牌号',
                            parkingCar: '停车场',
                            parkingSpace: '预约类型',
                            orderCar: '车位/充电桩编号',
                            orderTime: '预约时间',
                            inputField: '预定时长(分钟)',
                            outField: '预付金额(元)',
                            details: '预约状态'
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubscribeRecord;
