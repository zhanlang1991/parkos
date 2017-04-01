import React, {PropTypes} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputBox from '../common/InputBox.js'
import DownBox from '../common/DownBox.js'
import {newAddFeesRoleInfo} from '../../request/memberCardRequest'
import {modifyFeesRoleInfo} from '../../request/memberCardRequest'
import $ from 'jquery'

class AddAlterBox extends React.Component {
    getStyles() {
        return {
            textBoxTitle: {
                width: '100%',
                textAlign: 'center',
                padding: '10px 0',
                fontSize: '24px',
                color: '#535353',
                fontFamily: "微软雅黑"
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
                color: '#333',
                fontFamily: '微软雅黑'
            },
            textBoxContentMiddle: {
                textAlign: 'justify',
                fontSize: '14px',
                color: '#626262'
            },
            textBoxContentSingle: {
                display: '-moz-inline-box',
                display: 'inline-block',
                float: 'left',
                textAlign: 'right',
                lineHeight: '34px'
            },
            inputLocation: {
                width: '210px',
                float: 'right',
                marginRight: '65px'
            },
            textBoxInput: {
                width: '240px',
                marginLeft: '-11px'
            },
            textBoxScroll: {
                marginLeft: '-10px',
                maxHeight: '250px',
                width: '53%',
                marginTop: '1px'
            },
            inputMandatory: {
                color: '#F00'
            }
        }
    }

    handleClick(){
      let custId = this.props.custId;
      let session = this.props.session;
      console.log(custId);
      console.log(session);

      if("新增会员卡"== document.getElementById("myModalLabelTitle").innerHTML){
        console.log('1');
        //新增月卡车收费标准记录82202070
        /*
        车辆类型	car_type	PR_TINYINT	√	数据字典：1-小型车，2-中型车，3-大型车，4-电动车，5-摩托车
        客户号	cust_id	PR_CUST_ID	√
        收费标准名称	role_name	PR_VCHAR64	√
        收费金额	month_value	PR_AMT	√	收费金额备注：记录月卡车每月交费标准，如100元/月；200元/月等
        赠送天数	giveday	PR_TINYINT		默认 0，不赠送
        区域编号	region_code	PR_PARK_REGION_CODE
        月卡类型	card_type	PR_TINYINT	√	数据字典：1-月卡，2-季卡，3-半年卡，4-年卡
        备注	remark	PR_VCHAR1024

        obj_code="82202075"
        region_code="42011120032501"
        oper_id="4010000000001"
        member_type="3"
        cust_id="8010000120401"
        member_level="2"
        car_type="3"
        owner_name="北京测试"
        tel_no="18792022424"
        car_id="京A22222"
        fees_roleid="120119"
        start_date="20170320"
        end_date=""
        buy_num="1"
        owner_money="195.00"
        remark=""
        */
        //收费标准id	id	PR_AUTOID	√	收费标准id

        let newFeesRoleData = {
            "car_type":'3',
            "role_name":'北京测试20170320',
            "month_value":'200.00',
            "giveday":'0',
            "region_code":'',
            "card_type":'1',
            "remark":''
        };
    		newAddFeesRoleInfo(newFeesRoleData,custId,session)
    		.then((res) => {
    			console.log(res);
    		})
      }else if("修改会员卡"== document.getElementById("myModalLabelTitle").innerHTML){
        console.log('2');

        //修改月卡车收费标准记录  82202071
        let alaterFeesRoleData = {
            "car_type":'1',
            "role_name":'北京测试20170320',
            "month_value":'200.00',
            "card_type":'1',
            "giveday":'0',
            "region_code":'',
            "remark":''
        };
    		modifyFeesRoleInfo(alaterFeesRoleData,custId,session)
    		.then((res) => {
    			console.log(res);
    		})
      }
    }

    render() {
        let styles = this.getStyles()
        let isDisabled = this.props.whetherUsable
        let dataTarget = this.props.dataTarget
        let dataId = this.props.dataId

        return (
            <div>
                <div className='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='false'  data-backdrop="static" style={styles.textBoxContent}>
                    <div className='modal-dialog' style={{marginTop: '8%'}}>
                        <div className='modal-content' style={{width: '70%',  margin: 'auto'}}>
                            <div class="modal-header">
                                <div class="modal-title" id="myModalLabelTitle" style={styles.textBoxTitle}>
                                    新增会员卡
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
                                <button type='button' style={styles.clickOptions} onClick={this.handleClick.bind(this)} className='btn btn-default' data-dismiss='modal' >确定</button>
                                <button id = "btnclose" type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal'>取消</button>
                          </div>
                     </div>
                </div>
            </div>
        </div>
      )
  }
}
AddAlterBox.defaultProps = {
    data: [{
        value: 'park0',
        name: '停车场1'
    }]
}
AddAlterBox.propTypes = {
    data: PropTypes.array.isRequired
};

export default AddAlterBox;
