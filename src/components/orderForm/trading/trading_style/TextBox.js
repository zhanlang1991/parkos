import React, { PropTypes } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class TextBox extends React.Component {
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
				width:'23%',
				textAlign: 'right',
			},
        }
    }
	render () {
		let styles = this.getStyles()

		return(
			<div>
				<span class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModalPark' >
					详情
				</span>
				<div className='modal fade' id='myModalPark' tabindex='-1' role='dialog' aria-labelledby='myModalLabelPark' aria-hidden='false'  data-backdrop="static"  style={styles.textBoxContent}>
					<div className='modal-dialog' style={{marginTop:'100px'}}>
						<div className='modal-content' style={{width:'90%',margin:'auto'}}>
							<div class="modal-header">
								<h4 class="modal-title" id="myModalLabelPark" style={styles.textBoxTitle}>
									订单详情
								</h4>
							</div>
							<div className='modal-footer' style={styles.textBoxContent}>
								<div style={styles.textBoxContentMiddle}>
								<div>
									<span style={styles.textBoxContentSingle}>订单号：</span><span>30972857238057302457328479324723847384</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>车牌号：</span><span>京A6783</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>联系电话：</span><span>14300009999</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>缴费方式：</span><span>停车场自动扣停车费</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>订单金额(元)：</span><span>0.0</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>停车场：</span><span>未来科技城</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>交易金额(元)：</span><span>35.00</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>订单状态：</span><span>交易完成</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>下单时间：</span><span>2017-02-08 20:59:37</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>入场时间：</span><span>2017-02-08 20:59:37</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>出场时间：</span><span>2017-02-08 20:59:49</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>备注：</span><span>交易成功</span>
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
TextBox.defaultProps={
  data:[{value:'park0',name:'停车场1'}]
}
TextBox.propTypes = {
  data: PropTypes.array.isRequired
};
export default TextBox;
