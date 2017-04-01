import React, { PropTypes } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputBox from '../../common/InputBox.js'
import DownBox from '../../common/DownBox.js'
class EditorTextBox extends React.Component {
	getStyles() {
        return {
			textBoxTitle: {
				width: '100%',
				textAlign: 'center',
				padding: '10px 0',
				fontSize: '26px',
				color: '#535353',
				fontFamily: "微软雅黑",
			},
			clickOptions: {
				width: '25%',
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
				color: '#626262',
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

			},
			textBoxInput:{
				width:'255px',
				float:'left',
			},
        }
    }
	render () {
		let styles = this.getStyles()

		return(
			<div>
				
				<div className='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true' style={styles.textBoxContent}>
					<div className='modal-dialog'>
						<div className='modal-content' style={{width:'75%',margin:'auto'}}>
							<div class="modal-header">
								<h4 class="modal-title" id="myModalLabel" style={styles.textBoxTitle}>
								编辑
								</h4>
							</div>
							<div className='modal-footer' style={styles.textBoxContent}>

								<div className='form-group clearfix' style={styles.textBoxContentMiddle}>
									<label className='col-md-4 control-label' style={{textAlign:'right'}}>
										<span className='text-danger'>*</span>所属车场：
									</label>
									<div className='col-sm-6'>
										<ul >
											<li>
												<div className='form-group '>
													<div  >
														<label>
															<input type="checkbox" />北京华联生活超市停车场北京华联生活超市停车场
														</label>
													</div>
												</div>
											</li>
											<li>
												<div className='form-group '>
													<div >
														<label>
															<input  type="checkbox" />北京华联生活超市停车场
														</label>
													</div>
												</div>
											</li>
											<li>
												<div className='form-group '>
													<div >
														<label>
															<input  type="checkbox" />北京华联生活超市停车场
														</label>
													</div>
												</div>
											</li>
											<li>
												<div className='form-group clearfix'>
													<div style={{lineHeight:'21px'}} className='d_out'>
														<label>
															<input  type="checkbox" />北京华联生活超市停车场
														</label>
													</div>
												</div>
											</li>
											<li>
												<div className='form-group clearfix'>
													<div style={{lineHeight:'21px'}} className='d_out'>
														<label>
															<input  type="checkbox" />北京华联生活超市停车场
														</label>
													</div>
												</div>
											</li>
											<li>
												<div className='form-group clearfix'>
													<div style={{lineHeight:'21px'}} className='d_out'>
														<label>
															<input  type="checkbox" />北京华联生活超市停车场
														</label>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className='form-group clearfix' style={styles.textBoxContentMiddle}>

								<div style={{height:'44px'}}>
									<div className='col-md-4' style={styles.textBoxContentSingle}>
										<span className='text-danger' >*</span>账号：
									</div>

									<div className='col-md-6' ><InputBox/></div>
								</div>
								<div style={{height:'44px'}}>
									<div className='col-md-4' style={styles.textBoxContentSingle}>
										<span className='text-danger' >*</span>真实姓名：
									</div>
									<div className='col-md-4' ><InputBox/></div>
								</div>
								<div style={{height:'44px'}}>
									<div className='col-md-4' style={styles.textBoxContentSingle}>
										职位：
									</div>
									<div className='col-md-4' ><InputBox/></div>
								</div>
								<div style={{height:'44px'}}>
									<div className='col-md-4' style={styles.textBoxContentSingle}>
										<span className='text-danger' >*</span>角色：
									</div>
									<div className='col-md-4' style={styles.textBoxInput}><DownBox/></div>
								</div >

								<div style={{height:'44px'}}>
									<div className='col-md-4' style={styles.textBoxContentSingle}>
										邮箱：
									</div>
									<div className='col-md-4' ><InputBox/></div>
								</div>
								<div style={{height:'44px'}}>
									<div className='col-md-4' style={styles.textBoxContentSingle}>
										<span className='text-danger' >*</span>电话：
									</div>
									<div className='col-md-4' ><InputBox/></div>
								</div>
								<div style={{height:'44px'}}>
									<div className='col-md-4' style={styles.textBoxContentSingle}>
										<span className='text-danger' >*</span>性别：
									</div>
									<div className='col-md-4' style={styles.textBoxInput}><DownBox/></div>
								</div>
								</div>
							<div className='col-md-12'>
								<button type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal'>确认</button>
								<button type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal'>关闭</button>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
EditorTextBox.defaultProps={
  data:[{value:'park0',name:'停车场1'}]
}
EditorTextBox.propTypes = {
  data: PropTypes.array.isRequired
};
export default EditorTextBox;
