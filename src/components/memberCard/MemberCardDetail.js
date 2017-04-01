import React, {PropTypes} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DownBox from '../common/DownBox'
import InputBox from '../common/InputBox'

class MemberCardDetail extends React.Component {
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
                fontSize: '12px'
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
                float: 'left',
                textAlign: 'right',
                lineHeight: '34px'
            }
        }
    }
    render() {
        let styles = this.getStyles()
        let pageButton=this.props.pageButton
        let pageTitle=this.props.pageTitle
        let isDisabled = this.props.whetherUsable
        let dataTarget=this.props.dataTarget
        let dataId=this.props.dataId
        return (
            <div>
                <span class='btn btn-primary btn-lg' data-toggle='modal' data-target={dataTarget} >
                  {pageButton}
                </span>
                <div className='modal fade' id={dataId} tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true' style={styles.textBoxContent}>
                    <div className='modal-dialog' style={{marginTop: '8%'}}>
                        <div className='modal-content' style={{width: '70%',  margin: 'auto'}}>
                            <div class="modal-header">
                                <div class="modal-title" id="myModalLabelTitle" style={styles.textBoxTitle}>
                                    会员卡详情
                                </div>
                            </div>
                            <div className='modal-footer' style={styles.textBoxContent}>
                                <div style={styles.textBoxContentMiddle}>
                                    <div style={{height: '44px',paddingLeft:'34px'}}>
                                        <span style={styles.textBoxContentSingle}>
                                           <span style={{color: '#ffc20a',marginLeft: '2px',fontWeight: 'bold'}}>*</span>
                                            所属停车场：
                                        </span>
                                        <div style={{float:'left',width:'225px'}}>
                                          <DownBox className='DownBox1' disabled={isDisabled} data={[{
                                                  value: 'serialNumber',
                                                  name: '武汉三金华都运营商金华都运营商'
                                              }
                                          ]}/>
                                        </div>
                                    </div>
                                    <div style={{height: '44px',paddingLeft:'42px'}}>
                                        <span style={styles.textBoxContentSingle}>停车场区域：</span>
                                        <div style={{float:'left',width:'225px'}}>
                                          <DownBox disabled={isDisabled} data={[{
                                                  value: 'serialNumber',
                                                  name: 'hs01'
                                              }
                                          ]}/>
                                        </div>
                                    </div>
                                    <div style={{height: '44px',paddingLeft:'20px'}}>
                                        <span style={styles.textBoxContentSingle}>
                                            <span style={{color: '#ffc20a',marginRight: '2px',fontWeight: 'bold'}}>*</span>
                                            收费标准名称：
                                        </span>
                                        <div style={{float:'left',width:'225px'}}>
                                            <InputBox title=' ' disabled={isDisabled}/>
                                        </div>
                                    </div>
                                    <div style={{height: '44px',paddingLeft:'49px'}}>
                                        <span style={styles.textBoxContentSingle}>
                                            <span style={{color: '#ffc20a',marginRight: '2px',fontWeight: 'bold'}}>*</span>
                                            月卡类型：
                                        </span>
                                        <div style={{float:'left',width:'225px'}}>
                                            <DownBox disabled={isDisabled} data={[
                                                {
                                                    value: 'serialNumber',
                                                    name: '月卡'
                                                }, {
                                                    value: 'serialNumber',
                                                    name: '季卡'
                                                }, {
                                                    value: 'serialNumber',
                                                    name: '半年卡'
                                                }, {
                                                    value: 'serialNumber',
                                                    name: '年卡'
                                                }, {
                                                    value: 'serialNumber',
                                                    name: '其他卡'
                                                }
                                            ]}/>
                                          </div>
                                    </div>
                                    <div style={{height: '44px',paddingLeft:'49px'}}>
                                        <span style={styles.textBoxContentSingle}>
                                            <span style={{color: '#ffc20a',marginRight: '2px',fontWeight: 'bold'}}>*</span>
                                            车辆类型：
                                        </span>
                                        <div style={{float:'left',width:'225px'}}>
                                            <DownBox disabled={isDisabled} data={[
                                                {
                                                    value: 'serialNumber',
                                                    name: '小型车'
                                                }, {
                                                    value: 'serialNumber',
                                                    name: '中型车'
                                                }, {
                                                    value: 'serialNumber',
                                                    name: '大型车'
                                                }, {
                                                    value: 'serialNumber',
                                                    name: '电动车'
                                                }
                                            ]}/>
                                        </div>
                                    </div>
                                    <div style={{height: '44px',paddingLeft:'49px'}}>
                                        <span style={styles.textBoxContentSingle}>
                                            <span style={{color: '#ffc20a',marginRight: '2px',fontWeight: 'bold'}}>*</span>
                                            收费金额：
                                        </span>
                                        <div style={{float:'left',width:'225px'}}>
                                            <InputBox title=' ' disabled={isDisabled}/>
                                        </div>
                                    </div>
                                    <div style={{height: '44px',paddingLeft:'49px'}}>
                                        <span style={styles.textBoxContentSingle}>
                                            <span style={{color: '#ffc20a',marginRight: '2px',fontWeight: 'bold'}}>*</span>
                                            赠送天数：
                                        </span>
                                        <div style={{float:'left',width:'225px'}}>
                                            <InputBox title=' ' disabled={isDisabled}/>
                                        </div>
                                    </div>
                                    <div style={{height: '44px',paddingLeft:'86px'}}>
                                        <span style={styles.textBoxContentSingle}>备注：</span>
                                        <div style={{float:'left',width:'225px'}}>
                                            <InputBox title=' ' disabled={isDisabled}/>
                                        </div>
                                    </div>
                                </div>
                                <button type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal'>确定</button>
                                <button id = "btnclose" type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal'>取消</button>
                            </div>
                       </div>
                  </div>
              </div>
            </div>
        )
    }
}
MemberCardDetail.defaultProps = {
    data: [
        {
            value: 'park0',
            name: '停车场1'
        }
    ]
}
MemberCardDetail.propTypes = {
    data: PropTypes.array.isRequired
};
export default MemberCardDetail;
