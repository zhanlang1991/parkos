import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import SystemContentTable from './system_style/SystemContentTable.js'
import {getTableSystemPager} from '../../request/requestParking.js'
import InputBox from '../common/InputBox.js'
import {acctSetCustPwd} from '../../request/acctSetCustPwd.js'


class PasswordPage extends React.Component {

    constructor() {
        super();
        this.state = {
            parksData: {
                details: []
            }
        }
    }

    componentWillMount() {
        getTableSystemPager().then((res) => {
            this.setState({parksData: res.data})

        });
    }
	//点击查找表格中的数据
	handleSelect() {
		let ansCommData = this.props.savedLoginAcount[0]
		console.log(ansCommData);
		var reqData = {
			"pwd_type": "1",
			"old_pwd": "00000",
			"new_pwd": "11111",
			"cust_id": "8010000000001",
		};
		acctSetCustPwd(reqData, ansCommData.cust_id, ansCommData.session)
		.then((res) => {
		    console.log(res);
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
                color: '#333',
				position:'relative'
            },
            contentBackground: {
                backgroundColor: '#FFFFFF',
                width: '97%',
                margin: 'auto',
                borderBottomRightRadius: '4px',
                borderBottomLeftRadius: '4px',
                fontFamily: "微软雅黑"
            },
			contentBackground2: {
                backgroundColor: '#FFFFFF',
                width: '97%',
                margin: 'auto',
                marginTop:'30px',
                fontFamily: "微软雅黑",
				border: '1px solid #EBEFF2',
            },
			contentBackground3: {
				backgroundColor: '#FFFFFF',
                width: '97%',
                margin: 'auto',
                marginBottom:'30px',
                fontFamily: "微软雅黑",
				border: '1px solid #EBEFF2',
				borderTop: 'none',
				borderBottom:'2px solid #EBEFF2',
				boxShadow:' 4px  #EBEFF2',
            },
			locationOptions: {
                width: '120px',
                borderRadius: '100px',
                color: '#ffc20a',
                backgroundColor: '#FFF',
                borderColor: '#ffc20a',
                border: '1px solid',
                fontSize: '12px',
                lineHeight: '30px',
            },
			input:{
				left:'10px',
				float:'left',
				lineHeight:'34px',
				textAlign:'center',
				fontSize: '14px',
				fontFamily: "微软雅黑",
				textAlign:'right'
			}
        }
        return (
            <div>
                <div style={styles.themeBackground}>
                    <div style={styles.titleBackground}>
                        <span>修改密码</span>
                    </div>
                    <div style={styles.contentBackground} className='row'>
						<div style={styles.contentBackground2}>
	                        <div style={{height:'100px'}}>
								<div style={{width:'100%',padding:'10px 10px',float:'left',position:'relative'}}>
									<span className='usericon' style={{width:'50px',height:'50px',float:'left',marginTop:'15px'}}></span>
									<span style={{height:'80px',float:'left',left:'10px',position:'relative',fontFamily: "微软雅黑",fontSize: '14px',fontFamily: "微软雅黑",padding:'33px 0'}}>用户名：研发部测试</span>

									<span style={{float:'right',position:'relative',height:'80px',	padding:'25px 0',}}>
					                     <button style={styles.locationOptions} onClick={this.handleSelect.bind(this)}>完成</button>
									</span>

								</div>
	                        </div>
	                    </div>
						<div style={styles.contentBackground3}>

							<div style={{padding:'15px 0'}}>
								<div style={{width:'500px',margin:'0 auto'}} className='row'>
									<div  className='col-md-4 text-right' style={styles.input}>旧密码：</div>
									<div className='col-md-6 col-xs-6' style={{right:'15px',width:'230px'}}><InputBox/></div>
								</div>
	                        </div>
							<div >
								<div style={{width:'500px',margin:'0 auto'}} className='row'>
									<div  className='col-md-4 text-right' style={styles.input}>新密码：</div>
									<div className='col-md-6 col-xs-6' style={{right:'15px',width:'230px'}}><InputBox/></div>
								</div>
	                        </div>
							<div style={{padding:'15px 0'}}>
								<div style={{width:'500px',margin:'0 auto'}} className='row'>
									<div  className='col-md-4 text-right' style={styles.input}>重复新密码：</div>
									<div className='col-md-6 col-xs-6' style={{right:'15px',width:'230px'}}><InputBox/></div>
								</div>
	                        </div>

	                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PasswordPage;
