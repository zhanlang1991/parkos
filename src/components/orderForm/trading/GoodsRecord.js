import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import InputBox from '../../common/InputBox.js'
import GoodsContentTable from './trading_style/GoodsContentTable.js'
import {gettableParkingGoods, getGoods} from '../../../request/requestParking.js'
import DownBox from '../../common/DownBox.js'
import Yymmdd from '../../common/Yymmdd.js'
import {queryOrderListInfo} from '../../../request/queryOrderListInfo'

class GoodsRecord extends React.Component {
    componentDidMount() {
        $(".search").click(function() {
            $(this).addClass("hoverschd").parent().parent().parent().siblings().children().children().children().removeClass("hoverschd");
        })

		// $("#phototypesblur input").blur(function(){
		// 	alert(12331);
		// })
		// $("#phototypesblur input").focus(function(){
		// 	得到焦点
		// })
    }
    constructor() {
        super();
        this.state = {
            parksData: {details: []},
            goodsData: []
        }
    }
    componentWillMount() {
        getGoods().then((res) => {
            this.setState({goodsData: res.data})
        });
    }
    //请求的数据
    parkRequest() {
        gettableParkingGoods().then((res) => {
            this.setState({parksData: res.data})
        });
    }
    //点击查找表格中的数据
    handleSelect() {
        this.parkRequest()
		// console.log(this.props);
		let cust_id = this.props.propsData.savedLoginAcount[0].cust_id;
		let session = this.props.propsData.savedLoginAcount[0].session;
        // console.log(this.props.propsData.savedLoginAcount[0].cust_id);

		var reqData = {
			"maxid": "100",
	        "maxcount": "10000",
			"cust_id": "8010000000001",
			// "commprovider": "10"
		};
		queryOrderListInfo(reqData, cust_id, session)
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
                height: '30px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '30px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 20px',
            },
            locationInputBoxNumber2: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
				padding: '0 0 0 25px',
            },
			locationInputBoxNumber3: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
				padding: '0 0 0 11px',
				float: 'left'
            },
            locationInputBoxTime: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 40px',
                float: 'left',
				float: 'left'
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
			locationInputBoxTime3: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                margin: '0 0 0 25px',
                float: 'left',
				width: '100%',
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
				width: '225px',
				textAlign: 'right',
				float: 'left',
				margin:'5px 0 0 5px',
			},
        }
        return (
            <div>
                <div style={styles.themeBackground}>
                    <div style={styles.contentBackground} className='row'>
						<div className='col-md-12'>
                            <div style={styles.locationInputBoxTime2}>
                                <span style={styles.optionsLocation}>订单状态：</span>
								<span style={{float: 'left',width:'225px',height:'44px',padding:'5px 0 0 0',marginLeft:'5px'}}><DownBox data={this.state.goodsData}/></span>
                            </div>
                            <div style={styles.locationInputBoxTime}>
                                <span style={{float: 'left',lineHeight:'44px'}}>商品名称：</span><span style={styles.optionsLocationInput2}><InputBox/></span>
                            </div>
                        </div>

                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxTime2}>
                                <span style={styles.optionsLocation}>开始时间：</span><span style={styles.optionsLocationInput2}><Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/></span>
                            </div>
                            <div style={styles.locationInputBoxTime}>
                                <span style={{float: 'left',lineHeight:'44px'}}>结束时间：</span><span style={styles.optionsLocationInput2}><Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/></span>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div style={styles.locationInputBoxNumber3}>
                                <span style={styles.optionsLocation}>购买人姓名：</span><span style={styles.optionsLocationInput2}><InputBox/></span>
                            </div>
                            <div style={styles.locationInputBoxTime}>
                                <span style={{float: 'left',lineHeight:'44px'}}>联系电话：</span><span id="phototypesblur" style={styles.optionsLocationInput2}><InputBox/></span>
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
                        <GoodsContentTable data={this.state.parksData} dataTitle={{
                            carNumber: '订单号',
                            payCost: '商品名称',
                            parkingCar: '支付方式',
                            parkingSpace: '订单金额',
                            orderCar: '购买人',
                            orderTime: '联系电话',
                            inputField: '订单状态',
                            outField: '下单时间',
                            details: '使用日期',
                            details2: '操作'
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoodsRecord;
