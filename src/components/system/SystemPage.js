import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import $ from 'jquery'
import SystemContentTable from './system_style/SystemContentTable.js'
import EditorTextBox from './system_style/EditorTextBox.js'
import AddTextBox from './system_style/AddTextBox.js'
import {getTableSystemPager,getTableAddTextBox} from '../../request/requestParking.js'
import {acctOperQueryOperator} from '../../request/acctOperQueryOperator.js'

class SystemPage extends React.Component {

    constructor() {
        super();
        this.state = {
            parksData: {details: []},
			addData: {detailsAddTextBox: []},
        }
    }

    componentWillMount() {
        getTableSystemPager().then((res) => {
            this.setState({parksData: res.data})
        });
		getTableAddTextBox().then((res) => {
            this.setState({addData: res.data},function(){
			})
        });

		let ansCommData = this.props.savedLoginAcount[0]
		console.log(ansCommData);
		var reqData = {
			"maxid": "0",
			"maxcount": "10",
			"cust_id": "8010000000001",
		};
		acctOperQueryOperator(reqData, ansCommData.cust_id, ansCommData.session)
		.then((res) => {
		    console.log(res);
		});
    }

    //点击查找表格中的数据
    handleSelect() {
		$("#myModalLabel").html("新增账号");
		$("#password").show();
		$("#twoPassword").show();
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
            locationOptions: {
                width: '120px',
                borderRadius: '100px',
                color: '#C0C0C0',
                backgroundColor: '#FFF',
                borderColor: '#C0C0C0',
                border: '1px solid',
                fontSize: '12px',
                lineHeight: '30px'
            },
			locationOptions2: {
                width: '120px',
                borderRadius: '100px',
                color: '#ffc20a',
                backgroundColor: '#FFF',
                borderColor: '#ffc20a',
                border: '1px solid',
                fontSize: '12px',
                lineHeight: '30px'
            },
            glyphicon: {
                display: 'inline-block',
                fontFamily: 'Glyphicons Halflings',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1',
                paddingRight: '5px'
            },
            contentBackground: {
                backgroundColor: '#FFFFFF',
                width: '97%',
                margin: 'auto',
                borderBottomRightRadius: '4px',
                borderBottomLeftRadius: '4px',
                fontFamily: "微软雅黑"
            },
            locationTable: {
                backgroundColor: '#FFFFFF',
                fontSize: '14px',
                width: '100%',
                margin: 'auto',
                borderRadius: '4px',
                fontFamily: "微软雅黑",
                padding: '14px 14px'
            },
        }
        return (
            <div>
                <div style={styles.themeBackground}>
                    <div style={styles.titleBackground}>
                        <span>账号管理</span>
                        <div style={{position:'absolute',right:'25px',bottom:'4px'}}>
                            <button class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal' id="btnfontadds" style={styles.locationOptions2} onClick={this.handleSelect.bind(this)}>
                                <span style={styles.glyphicon}>+</span>
                                新增
                            </button>
							<AddTextBox data={this.state.addData}/>
                        </div>
                    </div>
                    <div style={styles.contentBackground} className='row'>
                        <div style={styles.locationTable}>
                            <SystemContentTable data={this.state.parksData} dataTitle={{
                                carNumber: '账号',
                                payCost: '姓名',
                                parkingCar: '性别',
                                parkingSpace: '电话',
                                orderCar: '邮箱',
                                orderTime: '所属停车场',
                                inputField: '角色',
                                outField: '最近登录',
                                details: '登录次数',
                                details2: '操作'
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SystemPage;
