import React, { PropTypes } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class BillTextBox extends React.Component {
	getStyles() {
        return {
			textBoxTitle: {
				width: '100%',
				textAlign: 'center',
				padding: '10px 0',
				fontSize: '26px',
				color: '#535353',
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
			},
			textBoxContent: {
				width: '100%',
				textAlign: 'center',
				padding: '10px 0',
				fontSize: '14px',
				color: '#626262',
			},
			textBoxContentMiddle : {
				width: '100%',
				textAlign: 'justify',
				fontSize: '14px',
				lineHeight:'200%',
				color: '#626262',
			},
			textBoxContentSingle: {
				display:'-moz-inline-box',
				display:'inline-block',
				width:'28%',
				textAlign: 'right',
			},
        }
    }
	render () {
		let styles = this.getStyles()

		return(
			<div>
				<span class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal' >
					详情
				</span>
				<div className='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='false'  data-backdrop="static"  style={styles.textBoxContent}>
					<div className='modal-dialog' style={{marginTop:'50px'}}>
						<div className='modal-content' style={{width:'90%',margin:'auto'}}>
							<div class="modal-header">
								<h4 class="modal-title" id="myModalLabel" style={styles.textBoxTitle}>
								流水详情
								</h4>
							</div>
							<div className='modal-footer' style={styles.textBoxContent}>
								<div style={styles.textBoxContentMiddle}>
								<div>
									<span style={styles.textBoxContentSingle}>订单号：</span><span>20000000152016022200119260</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>停车场：</span><span>武汉无线飞翔停车场武汉无线飞翔停车场</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>车牌号：</span><span>京A12345</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>现金实收(元)：</span><span>34246.66</span>
								</div>

								<div>
									<span style={styles.textBoxContentSingle}>电子实收(元)：</span><span>34476</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>城市通实收(元)：</span><span>34354</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>折扣前金额(元)：</span><span>76543.77</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>优惠减免方式：</span><span>暂无</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>优惠减免金额(元)：</span><span>65432.99</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>折扣后金额(元)：</span><span>234567.99</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>时长兑换(小时)：</span><span>1234567.00</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>时长兑换(15分钟)：</span><span>1234567.00</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>时长兑换金额(元)：</span><span>1000.00</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>优惠券类型：</span><span>暂无</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>优惠金额(元)：</span><span>1</span>
								</div>
							</div>
							<button type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal'>关闭</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
BillTextBox.defaultProps={
  data:[{value:'park0',name:'停车场1'}]
}
BillTextBox.propTypes = {
  data: PropTypes.array.isRequired
};
export default BillTextBox;
