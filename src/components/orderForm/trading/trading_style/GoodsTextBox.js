import React, { PropTypes } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class GoodsTextBox extends React.Component {
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
				<span class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModalGoods' >
					详情
				</span>
				<div className='modal fade' id='myModalGoods' tabindex='-1' role='dialog' aria-labelledby='myModalLabelGoods' aria-hidden='false'  data-backdrop="static"  style={styles.textBoxContent}>
					<div className='modal-dialog' style={{marginTop:'100px'}}>
						<div className='modal-content' style={{width:'90%',margin:'auto'}}>
							<div class="modal-header">
								<h4 class="modal-title" id="myModalLabelGoods" style={styles.textBoxTitle}>
								商品详情
								</h4>
							</div>
							<div className='modal-footer' style={styles.textBoxContent}>
								<div style={styles.textBoxContentMiddle}>
								<div>
									<span style={styles.textBoxContentSingle}>订单号：</span><span>20000000152016022200119260</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>停车场：</span><span></span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>联系电话：</span><span></span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>交易类型：</span><span>购买园博门票</span>
								</div>

								<div>
									<span style={styles.textBoxContentSingle}>交易金额(元)：</span><span>90.00</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>收货人：</span><span></span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>订单状态：</span><span>交易完成</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>下单时间：</span><span>2017-02-08 20:59:37</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>使用时间：</span><span>2017-02-08 20:59:37</span>
								</div>
								<div>
									<span style={styles.textBoxContentSingle}>备注：</span><span>支付成功, 出票成功</span>
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
GoodsTextBox.defaultProps={
  data:[{value:'park0',name:'停车场1'}]
}
GoodsTextBox.propTypes = {
  data: PropTypes.array.isRequired
};
export default GoodsTextBox;
