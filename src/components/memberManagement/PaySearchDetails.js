import React, {PropTypes} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class PaySearchDetails extends React.Component {
    getStyles() {
        return {
            textBoxTitle: {
                width: '100%',
                textAlign: 'center',
                padding: '10px 0',
                fontSize: '26px',
                color: '#535353'
            },
            clickOptions: {
                width: '20%',
                borderRadius: '20px',
                color: '#FFC10A',
                backgroundColor: '#FFF',
                borderColor: '#FFC10A',
                border: '1px solid',
                margin: '25px 5px 10px 5px',
                fontSize: '15px'
            },
            textBoxContent: {
                width: '100%',
                textAlign: 'center',
                padding: '10px 0',
                fontSize: '14px',
                color: '#626262'
            },
            textBoxContentMiddle: {
                width: '100%',
                textAlign: 'justify',
                fontSize: '14px',
                lineHeight: '200%',
                color: '#626262'
            },
            textBoxContentSingle: {
                display: '-moz-inline-box',
                display: 'inline-block',
                width: '23%',
                textAlign: 'right',
                float: 'left',
                paddingRight: '5px'
            }
        }
    }
    render() {
        let styles = this.getStyles()

        return (
            <div>
                <span class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal'>
                    详情
                </span>
                <div className='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true' style={styles.textBoxContent}>
                    <div className='modal-dialog'>
                        <div className='modal-content' style={{width: '90%',marginTop: '90px'}}>
                            <div class="modal-header">
                                <h4 class="modal-title" id="myModalLabel" style={styles.textBoxTitle}>
                                    交费详情
                                </h4>
                            </div>
                            <div className='modal-footer' style={styles.textBoxContent}>
                                <div style={styles.textBoxContentMiddle}>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>运营商：</span>
                                        <span>武汉无线飞翔投资有限公司</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>停车场：</span>
                                        <span>无线飞翔停车场</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>区域：</span>
                                        <span>测试1</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>车牌号：</span>
                                        <span>鄂A127R5</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>车辆类型：</span>
                                        <span>小型车</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>车主：</span>
                                        <span>测试</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>变更类型：</span>
                                        <span>交费充值</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>交费金额(元)：</span>
                                        <span>1000.00</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>初始到期日：</span>
                                        <span>2015-11-07</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>变更到期日：</span>
                                        <span>2016-11-07</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>发生时间：</span>
                                        <span>2016-12-14 09:35:20</span>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>收费标准：</span>
                                        <div style={{width: '70%',marginLeft: '120px'}}>
                                            武汉无线飞翔投资有限公司收费标准 武汉无线飞翔投资有限公司收费标准 武汉无线飞翔投资有限公司收费标准 武汉无线飞翔投资有限公司收费标准 武汉无线飞翔投资有限公司收费标准 武汉无线飞翔投资有限公司收费标准</div>
                                    </div>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>备注：</span>
                                        <div style={{width: '70%',marginLeft: '120px'}}>
                                            交易成功交易成功交易成功交易成功交易成功
                                        </div>
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
PaySearchDetails.defaultProps = {
    data: [
        {
            value: 'park0',
            name: '停车场1'
        }
    ]
}
PaySearchDetails.propTypes = {
    data: PropTypes.array.isRequired
};
export default PaySearchDetails;
