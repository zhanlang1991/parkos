import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import InputBox from '../../common/InputBox.js'
import BillContentTable from './trading_style/BillContentTable.js'
import {gettableParkingBill, getGoods} from '../../../request/requestParking.js'
import DownBox from '../../common/DownBox.js'
import Yymmdd from '../../common/Yymmdd.js'
import {parkQueryTollInfo} from '../../../request/parkQueryTollInfo'
import {getQueryDayParkSerial} from '../../../request/queryDayParkSerial'

//停车流水
class ParkingBill extends React.Component {
    componentDidMount() {
        $(".search").click(function() {
            $(this).addClass("hoverschd").parent().parent().parent().siblings().children().children().children().removeClass("hoverschd");
        })
    }
    constructor() {
        super();
        this.state = {
            parksData: {details: []},
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
        gettableParkingBill().then((res) => {
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
		getQueryDayParkSerial(reqData, cust_id, session)
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
                borderBottomRightRadius: '4px',
                borderBottomLeftRadius: '4px',
                fontFamily: "微软雅黑"
            },
            locationInputBoxNumber: {
                backgroundColor: '#FFFFFF',
                height: '30px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '30px',
                fontFamily: "微软雅黑",
                margin: '15px 0 0 10px',
                width: '30%'
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
				color:'#333'
            },
			locationInputBoxTime2: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
				margin: '0 -154px 0 54px',
                float: 'left',
                width: '40%',
				color:'#333'
            },
			locationInputBoxTime3: {
				backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 25px',
                float: 'left',
				color:'#333'
            },
			locationInputBoxTime4: {
				backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 45px',
                float: 'left',
				color:'#333'
            },
            locationInputBoxOptions: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                float: 'left',
				padding:'0 25px'
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
                width: '97%',
                textAlign: 'center',
                padding: '10px 0',
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
            searchLocation: {
                padding: '0px 20px 4px 5px',
            },
            optionsLocationInput: {
                // width: '24%',
                textAlign: 'right',
                float: 'left',
				lineHeight: '44px'
            },
			optionsLocationInput2: {
                width: '225px',
                textAlign: 'right',
                float: 'left',
				margin:'5px 0 0 5px',
            },
            optionsLocation: {
                // width: '8%',
                textAlign: 'right',
                float: 'left'
            }
        }
        return (
            <div>
                <div style={styles.themeBackground}>
                    <div style={styles.contentBackground} className='row'>
                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxTime}>
                                <span style={styles.optionsLocationInput}>车牌号：</span> <span style={styles.optionsLocationInput2}><InputBox/></span>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxOptions}>
                                <span style={styles.optionsLocation}>收费类型：</span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label>
                                            <a className='search hoverschd'>
                                                <input type='radio' style={{
                                                    display: 'none'
                                                }}/>
                                                全部
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{
                                                    display: 'none'
                                                }}/>
                                                现金
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{
                                                    display: 'none'
                                                }}/>
                                                自助缴费
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{
                                                    display: 'none'
                                                }}/>
                                                畅停卡
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{
                                                    display: 'none'
                                                }}/>
                                                电子支付
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{
                                                    display: 'none'
                                                }}/>
                                                混合支付
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{
                                                    display: 'none'
                                                }}/>
                                                城市通
                                            </a>
                                        </label>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxOptions}>
                                <span style={styles.optionsLocation}>出场类型：</span>
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
                                                已离场
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{display: 'none'}}/>
                                                停车中
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{display: 'none'}}/>
                                                逃逸
                                            </a>
                                        </label>
                                    </div>
                                </span>
                                <span>
                                    <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                        <label >
                                            <a className='search'>
                                                <input type='radio' style={{display: 'none'}}/>
                                                自助缴费但未离开园区道闸
                                            </a>
                                        </label>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div style= {{width:'97%'}}>
                            <div style={styles.locationInputBoxTime2}>
                                <span style={styles.optionsLocationInput}>收费员：</span>
								<div style={{float: 'left',width:'225px',height:'44px',padding:'5px 0 0 0',marginLeft:'5px'}}>
									<DownBox data={this.state.goodsParksData}/>
								</div>
                            </div>
                            <div  style={styles.locationInputBoxTime2}>
                                <span style={{float: 'left'}}>异常类型：</span>
									<div style={{float: 'left',width:'225px',height:'44px',padding:'5px 0 0 0',marginLeft:'5px'}}>
										<DownBox data={this.state.goodsData}/>
									</div>
                            </div>
                        </div>

                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxTime3}>
                                <span style={styles.optionsLocationInput}>开始时间：</span><span style={styles.optionsLocationInput2}><Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/></span>
                            </div>
                            <div style={styles.locationInputBoxTime4}>
                                <span style={{
                                    float: 'left'
                                }}>结束时间：</span><span style={styles.optionsLocationInput2}><Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/></span>
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
                        <BillContentTable data={this.state.parksData} dataTitle={{
                            carNumber: '车牌号',
                            parkingCar: '入场时间',
                            parkingSpace: '出场时间',
                            orderCar: '停车时长',
                            orderTime: '实收金额',
                            inputField: '减免金额',
                            outField: '异常类型',
                            details: '出场类型',
                            details2: '收费员',
                            details3: '收费类型',
                            details4: '详细信息'
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParkingBill;
