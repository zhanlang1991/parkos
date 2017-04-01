import React, {PropTypes} from 'react'

class NoRetroflexPattern extends React.Component {
    constructor() {
        super();
        this.state = {
            patternData: {}
        };
    }

    getStyles() {
        return {
            background: {
                width: '90%',
                height: '100%',
                backgroundColor: '#ebeff2'
            },
            titleTextStyle: {
                marginTop: '10%',
                fontSize: '20px',
                color: '#767575',
                borderBottom: '2px solid #ebeff2',
                fontFamily: "微软雅黑",
                height: '38px'
            },
            iconStyle: {
                marginTop: '5%',
                position: 'relative',
                textAlign: 'center',
                justifyContent: 'center',
                alignitems: 'center'
            },
            textStyle: {
                marginTop: '76%',
                fontSize: '36px',
                position: 'relative',
                color: this.props.textColor,
                fontWeight: 'bold',
                fontFamily: "微软雅黑",
                textAlign: 'center',
                justifyContent: 'center',
                alignitems: 'center'
            },
            firstFront: {
                width: '90%',
                height: '100%'
            },
            backTextStyle: {
                fontSize: '16px'
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
                width: '90%',
                height: '280px'
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
            <p style={styles.backTextStyle} key={i}>{item.paraName}：{item.paraNum}{item.paraUnit}
            </p>
        ))
        return (
            <div style={styles.background}>
                <div className='firstFront' style={styles.firstFront}>
                    <div style={{
                        textAlign: 'center',
                        width: '75%',
                        margin: '0 auto'
                    }}>
                        <p ref='todayIncomeIcon' style={styles.titleTextStyle}>{this.props.passData.title}
                        </p>
                    </div>
                    <div style={styles.iconStyle}>
                        <img src={this.props.picSrc} style={{
                            width: '25%',
                            height: '60%'
                        }}/>
                    </div>
                    <div style={{
                        marginTop: '3%',
                        textAlign: 'center'
                    }}>
                        <span ref='todayIncome' style={styles.textStyle}>{this.props.passData.num}</span>
                        <span style={styles.unitStyle}>{this.props.passData.unit}
                        </span>
                    </div>
                </div>
                <div className='firstBack' style={styles.backTextPattern}>
                    <div style={{
                        float: 'left',
                        margin: 'auto',
                        position: 'relative',
                        color: '#5d646a'
                    }}>
                        {myBackData}
                    </div>
                </div>
            </div>
        );
    }
}

NoRetroflexPattern.defaultProps = {
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
        backColor: 'f4bdc1'
    }
}
NoRetroflexPattern.propTypes = {
    passData: PropTypes.object.isRequired
};
export default NoRetroflexPattern;
