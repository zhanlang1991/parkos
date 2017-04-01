import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import InputBox from '../../common/InputBox.js'
import ContentTable from './trading_style/ContentTable.js'
import {getParkInfo} from '../../../request/requestParking.js'
import DownBox from '../../common/DownBox.js'
import ParkingBill from './ParkingBill.js'
import EscapeBill from './EscapeBill.js'
import FillBill from './FillBill.js'

class ParkingLaundry extends React.Component {
    componentDidMount() {
        $(".search").click(function() {
            $(this).addClass("hoverschd").parent().parent().parent().siblings().children().children().children().removeClass("hoverschd");
        })
		$(".idPB").click(function(){
			$('.idParkingBill').show().siblings().hide();
		});
		$(".idEB").click(function(){
			$('.idEscapeBill').show().siblings().hide();
		});
		$(".idFB").click(function(){
			$('.idFillBill').show().siblings().hide();
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
                lineHeight: '44px',
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
				padding: '0 0 0 40px',
                textAlign: 'right',
                float: 'left',
            }
        }
        return (
            <div>
                <div style={styles.themeBackground}>
                    <p style={styles.titleBackground}>停车流水</p>
                    <div style={styles.contentBackground} className='row'>
                        <div style={styles.locationInputBoxNumber}>
                            <span style={styles.optionsLocation}>流水类型：</span>
                            <span>
                                <div className='btn-group' data-toggle='buttons' style={styles.searchLocation}>
                                    <label>
                                        <a className='search idPB hoverschd'>
                                            <input type='radio' style={{display: 'none'}}/>
                                            停车流水
                                        </a>
                                    </label>
                                </div>
                            </span>
                            <span>
                                <div className='btn-group' data-toggle='buttons' style={styles.searchLocation2}>
                                    <label >
                                        <a className='search idEB'>
                                            <input type='radio' style={{display: 'none'}}/>
                                            逃逸流水
                                        </a>
                                    </label>
                                </div>
                            </span>
                            <span>
                                <div className='btn-group' data-toggle='buttons' style={styles.searchLocation2}>
                                    <label >
                                        <a className='search idFB'>
                                            <input type='radio' style={{display: 'none'}}/>
                                            逃逸补交流水
                                        </a>
                                    </label>
                                </div>
                            </span>
                        </div>
                    </div>
					<div>
						<div className='idParkingBill'>
							<ParkingBill propsData={this.props}/>
						</div>
						<div className='idEscapeBill' style={{display: 'none'}}>
							<EscapeBill propsData={this.props}/>
						</div>
						<div className='idFillBill' style={{display: 'none'}}>
							<FillBill propsData={this.props}/>
						</div>
					</div>
                </div>
            </div>
        )
    }
}

export default ParkingLaundry;
