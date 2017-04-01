import React, { PropTypes } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputBox from '../../common/InputBox.js'
import DownBox from '../../common/DownBox.js'
class PromptTextBox extends React.Component {
	getStyles() {
        return {
			textBoxTitle: {
				width: '100%',
				textAlign: 'left',
				padding: '10px 0',
				fontSize: '20px',
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
				height: '100%',
				textAlign: 'left',
				padding: '10px 20px',
				fontSize: '14px',
				color: '#626262',
				top:'30%',
			},
			textBoxContent2: {
				width: '100%',
				height: '100%',
				textAlign: 'right',
				padding: '10px 10px',
				fontSize: '14px',
				color: '#626262',
				top:'30%',
			},
        }
    }
	render () {
		let styles = this.getStyles()

		return(
			<div>
				<span class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal' >
					删除
				</span>
				<div className='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel2' aria-hidden='true' style={styles.textBoxContent}>
					<div className='modal-dialog'>
						<div className='modal-content' style={{width:'60%',margin:'auto'}}>
							<div class="modal-footer">
								<div  id="myModalLabel2" style={styles.textBoxTitle}>
									<img src={require("../../../images/graycar.png")} style={{width:'10%'}}/>警告
								</div>
							</div>
							<div className='modal-footer' style={styles.textBoxContent}>
							确认要删除【XXXXX】该条信息吗？
							</div>
							<div className='modal-footer' style={styles.textBoxContent2}>
								<button type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal'>关闭</button>
								<button type='button' style={styles.clickOptions} className='btn btn-default'>确认</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
PromptTextBox.defaultProps={
  data:[{value:'park0',name:'停车场1'}]
}
PromptTextBox.propTypes = {
  data: PropTypes.array.isRequired
};
export default PromptTextBox;
