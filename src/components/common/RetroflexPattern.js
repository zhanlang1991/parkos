import React, {PropTypes} from 'react'
import '../../styles/rotate.css'
import '../../font/DINCond-Bold.otf'

class RetroflexPattern extends React.Component {
    constructor() {
        super();
        this.state = {
            patternData: {}
        };
    }

    getStyles() {
        return {
            background: {
                width: '100%',
                height: '100%',
                backgroundColor: '#fff'
            },
            titleTextStyle: {
                fontSize: '26px',
                color: '#3d3d3d',
                fontFamily: "微软雅黑",
                fontWeight:'bold',
                height: '100%',
                paddingTop:'13%'
            },
            iconStyle: {
                marginTop: '5%',
                position: 'relative',
                textAlign: 'center',
                justifyContent: 'center',
                alignitems: 'center'
            },
            bgStyle:{
                backgroundColor: this.props.textColor,
                textAlign: 'center',
                width: '100%',
                height: '50%'
            },
            textStyle: {
            	display:'block',
            	width:'100%',
            	height:'100%',
                paddingTop:'10%',
                fontSize: '40px',
                color:'#fff',
                fontFamily: "DINCond-Bold",
                textAlign: 'center'
            },
            backTextStyle: {
                fontSize: '14px'
            },
            lineData:{
            	float:'right',
            	width:'88%',
            	display:'flex',
            	justifyContent:'space-between'
            },
            lineP:{
            	flex:4
            },
            lineA:{
            	color:'#fff'
            },
            lineEm:{
            	flex:5,
            	fontStyle:'normal',
            	textAlign:'right'
            },
            backTextPattern: {
                backgroundColor: this.props.bgc,
                textAlign: 'left',
                lineHeight: '32px',
                position: 'relative',
                justifyContent: 'center',
                alignitems: 'center',
                display: 'flex',
                fontFamily: "微软雅黑",
                height:'100%'
            },
            unitStyle: {
                marginLeft: '2%',
                fontSize: '16px',
                position: 'relative',
                color: this.props.unitColor
            }
        }
    }

    render() {
        let styles = this.getStyles()
        let myBackData = this.props.passData.backData.map((item, i) => (
        	
            <div style={styles.backTextStyle} key={i}>
            	<span className={this.props.btnSrc[i]}></span>
            	<div style={styles.lineData}>
					<p style={styles.lineP}>
						{item.paraName}
					</p>
					<a href="javascript:;" style={styles.lineA}>:</a> 
					<em style={styles.lineEm}>{item.paraNum}</em>
				</div>
            </div>
        ))

        return (
            <div style={styles.background}>
                <div className='flip-container'>
                    <div className='firstFront' style={{width: '100%',height:'100%'}}>
                        <div style={{textAlign: 'center',width: '100%',height: '50%'}}>
                            <p ref='todayIncomeIcon' style={styles.titleTextStyle}>{this.props.passData.title}</p>
                            <span className={this.props.cName} style={{position:'absolute',left:'6%',top:'5%',fontSize:'68px',color:this.props.textColor}}/>
                        </div>
                        <div style={styles.bgStyle}>
                            <span ref='todayIncome' style={styles.textStyle}>{this.props.passData.num}</span>
                        </div>
                    </div>
                    <div className='firstBack' style={styles.backTextPattern}>
                        <div style={{float: 'left', width:'72%',margin: 'auto', position: 'relative',color: '#fbfbfb'}}>
                            {myBackData}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// setInterval(function() {
//   React.render(
//     <RetroflexPattern date={new Date()} />,
//     document.getElementById('example')
//   );
// }, 500);
RetroflexPattern.defaultProps = {
    btnSrc: [],
    passData: {
        title: '今日收入',
        picPath: 'https://github.com/no-one-89/demodata/blob/master/round-1.png?raw=true',
        num: '777',
        unit: '元',
        whetherTurn: '1',
        backData: [
            {
                paraName: '现金',
                paraNum: '100.00',
                paraUnit: '元'
            }, {
                paraName: '微信',
                paraNum: '100.00',
                paraUnit: '元'
            }, {
                paraName: '支付宝',
                paraNum: '100.00',
                paraUnit: '元'
            }, {
                paraName: '城市通',
                paraNum: '100.00',
                paraUnit: '元'
            }, {
                paraName: '月卡',
                paraNum: '100.00',
                paraUnit: '元'
            }, {
                paraName: '储值卡',
                paraNum: '100.00',
                paraUnit: '元'
            }, {
                paraName: '自助缴费',
                paraNum: '100.00',
                paraUnit: '元'
            }
        ],
        backColor: 'f4bdc1',
        cName:''
    }
}
RetroflexPattern.propTypes = {
    btnSrc: PropTypes.array.isRequired,
    passData: PropTypes.object.isRequired

};
export default RetroflexPattern;
