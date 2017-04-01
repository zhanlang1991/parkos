import React, { PropTypes } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputBox from '../../common/InputBox.js'
import DownBox from '../../common/DownBox.js'
import $ from 'jquery'
import {getAccountParks,getGenderParks} from '../../../request/requestParking.js'

class AddTextBox extends React.Component {

	constructor(){
		super();
		this.state = {
			genderParks: [],
			accountParks: [],
		}
	}
	//初始化表格
	componentWillReceiveProps(nextProps){
		getAccountParks().then((res) => {
            this.setState({accountParks: res.data})
        });
		getGenderParks().then((res) => {
            this.setState({genderParks: res.data})
        });
	}
	getStyles() {
        return {
			textBoxTitle: {
				width: '100%',
				textAlign: 'center',
				padding: '10px 0',
				fontSize: '24px',
				color: '#535353',
				fontFamily: "微软雅黑",
			},
			clickOptions: {
				width: '20%',
				borderRadius: '20px',
				color: '#FFC10A',
				backgroundColor: '#FFF',
				borderColor: '#FFC10A',
				border: '1px solid',
				margin: '0 5px',
				fontSize: '12px',
				marginTop:'5px'
			},
			textBoxContent: {
				width: '100%',
				textAlign: 'center',
				padding: '10px 0',
				fontSize: '14px',
				color: '#333',
				fontFamily: '微软雅黑'
			},
			textBoxContentMiddle : {
				textAlign: 'justify',
				fontSize: '14px',
				color: '#626262',
			},
			textBoxContentSingle: {
				display:'-moz-inline-box',
				display:'inline-block',
				float:'left',
				textAlign: 'right',
				lineHeight:'34px',
				width:'150px'
			},
			inputLocation:{
				width:'225px',
				float:'left',
			},
			textBoxScroll:{
				marginLeft:'-10px',
				maxHeight:'250px',
				width:'53%',
				marginTop:'1px',
				lineHeight:'20px',
			},
			inputMandatory:{
				color:'#FFC20A'
			}
        }
    }
	render () {
		let styles = this.getStyles()
		let listsSize = this.props.data.detailsAddTextBox.length
		if(listsSize>5 ){
			$("#addTextBoxScroll").css("overflowY","scroll");
		}
		let lists = this.props.data.detailsAddTextBox.map((item, i) => 	<li style={{padding:'7px 0'}}>
				<div>
					<div>
						<label>
							<input type="checkbox" />{item.chechang}
						</label>
					</div>
				</div>
			</li>)
		return(
			<div>
				<div className='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='false'  data-backdrop="static" style={styles.textBoxContent}>
					<div className='modal-dialog'>
						<div className='modal-content' style={{width:'70%',margin:'auto'}}>
							<div class="modal-header">
								<h4 class="modal-title" id="myModalLabel" style={styles.textBoxTitle}>
								新增账号
								</h4>
							</div>
							<div className='modal-footer' style={styles.textBoxContent}>
								<div className='form-group clearfix' style={styles.textBoxContentMiddle}>
									<div style={{height:'44px'}}>
										<div  style={styles.textBoxContentSingle}>
											<span className='text-danger' style={styles.inputMandatory}>*</span>运营商或停车场：</div>
										<div style={styles.inputLocation} ><DownBox  data={this.state.accountParks}/></div>
									</div>
									<div style={{height:'44px'}}>
										<div  style={styles.textBoxContentSingle}>
											<span className='text-danger' style={styles.inputMandatory}>*</span>账号：</div>
										<div style={styles.inputLocation} ><InputBox/></div>
									</div>
									<div style={{height:'44px'}}>
										<div  style={styles.textBoxContentSingle}>
											<span className='text-danger' style={styles.inputMandatory}>*</span>真实姓名：</div>
										<div style={styles.inputLocation} ><InputBox/></div>
									</div>
									<div id='password' style={{height:'44px'}}>
										<div  style={styles.textBoxContentSingle}>
											<span className='text-danger' style={styles.inputMandatory}>*</span>密码：</div>
										<div style={styles.inputLocation} ><InputBox/></div>
									</div>
									<div id='twoPassword' style={{height:'44px'}}>
										<div  style={styles.textBoxContentSingle}>
											<span className='text-danger' style={styles.inputMandatory}>*</span>重复密码：</div>
										<div style={styles.inputLocation} ><InputBox/></div>
									</div>
									<div style={{height:'44px'}}>
										<div  style={styles.textBoxContentSingle}>职位：</div>
										<div style={styles.inputLocation} ><InputBox/></div>
									</div>
									<div id='twoPassword' style={{height:'44px'}}>
										<div  style={styles.textBoxContentSingle}>
											<span className='text-danger' style={styles.inputMandatory}>*</span>角色：</div>
										<div style={styles.inputLocation} ><DownBox  data={this.state.accountParks}/></div>
									</div>

									<div style={{height:'44px'}}>
										<div  style={styles.textBoxContentSingle}>
											邮箱：</div>
										<div style={styles.inputLocation} ><InputBox/></div>
									</div>
									<div style={{height:'44px'}}>
										<div  style={styles.textBoxContentSingle}>
											<span className='text-danger' style={styles.inputMandatory}>*</span>电话：</div>
										<div style={styles.inputLocation} ><InputBox/></div>
									</div>
									<div id='twoPassword' style={{height:'44px'}}>
										<div  style={styles.textBoxContentSingle}>
											<span className='text-danger' style={styles.inputMandatory}>*</span>性别：</div>
										<div style={styles.inputLocation} ><DownBox data={this.state.genderParks}/></div>
									</div>
								</div>
							<div className='col-md-12'>
								<button type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal'>保存</button>
								<button id="btnclose" type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal'>关闭</button>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
AddTextBox.defaultProps={
  data:[{value:'park0',name:'停车场1'}]
}
AddTextBox.propTypes = {
  data: PropTypes.array.isRequired
};
export default AddTextBox;
