import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import ParkingRecord from './ParkingRecord.js'
import GoodsRecord from './GoodsRecord.js'
import SubscribeRecord from './SubscribeRecord.js'

class ParkingQuery extends React.Component {
    componentDidMount() {
        $(".search").click(function() {
            $(this).addClass("hoverschd").parent().parent().parent().siblings().children().children().children().removeClass("hoverschd");
        })
		$(".idPR").click(function(){
			$('.idParkingRecord').show().siblings().hide();
		});
		$(".idGR").click(function(){
			$('.idGoodsRecord').show().siblings().hide();
		});
		$(".idSR").click(function(){
			$('.idSubscribeRecord').show().siblings().hide();
		});
    }

    render() {
        let styles = {
            themeBackground: {
                width: '100%',
                backgroundColor: '#EBEFF2',
                padding: '20px 0'
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
				color:'#333'
            },
            contentBackground: {
                backgroundColor: '#FFFFFF',
                fontSize: '18px',
                width: '97%',
                margin: '  auto',
                lineHeight: '30px',
                fontFamily: "微软雅黑"
            },
            locationInputBoxNumber: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '44px',
                fontFamily: "微软雅黑",
                marginTop: '10px',
                width: '100%',
				color:'#333'
            },
            searchLocation: {
                padding: '0px 5px 4px 5px'
            },
			searchLocation2: {
                padding: '0px 5px 4px 20px'
            },
            optionsLocation: {
				padding: '0 0 0 25px',
                textAlign: 'right',
                float: 'left',
            }
        }
        return (

            <div>
                <div style={styles.themeBackground}>
                    <p style={styles.titleBackground}>订单查询</p>
                    <div style={styles.contentBackground} className='row'>
						<div className='col-md-12'>
	                        <div style={styles.locationInputBoxNumber}>
	                            <span style={styles.optionsLocation}>订单类型：</span>
	                            <span>
	                                <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
	                                    <label>
	                                        <a className='search idPR hoverschd'>
	                                            <input type='radio' style={{display: 'none'}}/>
	                                            停车订单
	                                        </a>
	                                    </label>
	                                </div>
	                            </span>
	                            <span>
	                                <div className='btn-group' data-toggle='buttons' style={styles.searchLocation2}>
	                                    <label >
	                                        <a className='search idSR'>
	                                            <input type='radio' style={{display: 'none'}}/>
	                                            预约订单
	                                        </a>
	                                    </label>
	                                </div>
	                            </span>
	                            <span>
	                                <div className='btn-group' data-toggle='buttons' style={styles.searchLocation2}>
	                                    <label >
	                                        <a className='search idGR'>
	                                            <input type='radio' style={{display: 'none'}}/>
	                                            商品订单
	                                        </a>
	                                    </label>
	                                </div>
	                            </span>
	                        </div>
	                    </div>
					</div>
					<div>
						<div className='idParkingRecord'>
							<ParkingRecord  propsData={this.props}/>
						</div>
						<div className='idGoodsRecord' style={{display: 'none'}}>
							<GoodsRecord propsData={this.props}/>
						</div>
						<div className='idSubscribeRecord' style={{display: 'none'}}>
							<SubscribeRecord propsData={this.props}/>
						</div>
					</div>
                </div>
            </div>
        )
    }
}

export default ParkingQuery;
