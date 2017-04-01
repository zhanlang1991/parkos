import React, { PropTypes } from 'react'
import InputBox from '../common/InputBox'
import OperationManagementTable from './OperationManagementTable'
import ContentTable2 from './ContentTable2'
import { queryAccountCapitalSerial } from '../../request/operationManagementRequest'
import { getPropertyManagementInfo } from '../../request/propertyManagementRequest'
import Yymmdd from '../common/Yymmdd'

class  OperationManagement extends React.Component {
  constructor() {
        super();
        this.state = {
            operationManagementData: {details:[]},
            propertyManagementData: {}
        }
    }

  getStyles(){
    return{
      backgroundStyle:{
        width:'100%',
        height:'100%',
        backgroundColor:'#ebeff2'
      },
      clientMessStyle1:{
        marginLeft:'25px',
        width:'96%',
        height:'270px',
        backgroundColor:'#ffffff',
        borderRadius:'4px'
      },
      clientMessStyle2:{
        marginLeft:'25px',
        width:'96%',
        height:'40%',
        backgroundColor:'#ffffff',
        borderRadius:'4px'
      },
      patternTitle:{
        width:'100%',
        height:'50px',
        borderBottom: '1px solid #ebeff2',
        fontFamily: "微软雅黑",
        color:'#333',
        fontSize:'24px',
        textAlign:'center',
        lineHeight:'34px',
        padding: '6px 15px'
      },
      textStyle:{
        fontSize:'14px',
        lineHeight:'34px',
        fontWeight:'normal',
        color:'#333',
        textAlign:'left',
        minHeight: '1px',
        paddingRight: '15px',
        paddingLeft: '40px',
        paddingTop:'0.5%'
      },
      paraStyle:{
        paddingLeft:'10px',
        color:'#666'
      },
      clickOptions: {
        width: '120px',
        borderRadius: '20px',
        color: '#FFC10A',
        backgroundColor: '#FFF',
        borderColor: '#FFC10A',
        border: '1px solid',
        margin: '0 5px',
        fontSize: '12px'
      },
      locationInputBoxTime: {
        backgroundColor: '#FFFFFF',
        height: '30px',
        fontSize: '14px',
        textAlign: 'left',
        lineHeight: '30px',
        fontFamily: "微软雅黑",
        margin: '15px 0 0 0px',
        float: 'left',
        width: '350px',
        paddingLeft:'40px'
      },
      searchButtonStyle: {
        backgroundColor: '#FFFFFF',
        height: '30px',
        fontSize: '14px',
        textAlign: 'left',
        lineHeight: '30px',
        fontFamily: "微软雅黑",
        margin: '15px 0 0 2%',
        float: 'left',
        width:'100px',
        paddingLeft:'1px'
      },
      locationTable: {
        backgroundColor: '#FFFFFF',
        fontSize: '14px',
        margin: 'auto',
        borderRadius: '5px',
        fontFamily: "微软雅黑",
        marginTop: '20px',
        padding: '14px 14px'
        }
    }
  }

  componentWillMount(){
     this.operationManagementDataRequest()
  }

  operationManagementDataRequest(){
    getPropertyManagementInfo()
     .then((res) => {
        this.setState({
          propertyManagementData:res.propertyManagementData
        })
    });
  }

  //点击查询指定时间内的历史明细
  handleSelect() {
      this.historyRequest()
  }

  historyRequest() {
    let custId=this.props.savedLoginAcount[0].cust_id;
    let session=this.props.savedLoginAcount[0].session;
    let reqData = {
      "cust_id":custId,
      "security_account_code":'',
      "assets_type":'',
      "trade_obj_type":'',
      "biz_type":'',
      "amt_min":'',
      "amt_max":'',
      "starttime":'20170101000000',
      "endtime":'20170321235959',
      "maxid":'0',
      "maxcount":'100'
    };
    queryAccountCapitalSerial(reqData,custId,session).then((res) => {
      this.setState({
        operationManagementData: res.data
      })
      console.log('资产管理_查询客户资产流水信息***');
      console.log(res);
    });
  }

  render () {
    let styles = this.getStyles()
    return(
      <div>
        <div style={styles.backgroundStyle}>
          <div className='clientMess1' style={styles.clientMessStyle1}>
            <div className='panelTitle' style={{paddingTop:'0.5%',left:'10%',marginTop:'20px'}}>
              <p style={styles.patternTitle}>资产管理
              </p>
            </div>

            <div className='panelBody' style={{padding:'1.5% 1.5% 2% 0%'}}>
              <div style={styles.textStyle}>
                <div style={{width:'27%',float:'left',height:'44px'}}>账户名称 :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.accountName}
                  </span>
                </div>
                <div style={{width:'28%',float:'left',height:'44px'}}>资产账户代码 :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.propertyAccountId}
                  </span>
                </div>
                <div style={{width:'26%',float:'left',height:'44px'}}>上次登录时间 :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.lastLoginTime}
                  </span>
                </div>
                <div style={{width:'19%',float:'right',height:'44px'}}>使用状态 :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.useState}
                  </span>
                </div>
              </div>

              <div style={styles.textStyle}>
                <div style={{width:'27%',float:'left',height:'44px'}}>总额(元) :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.totalMoney}
                  </span>
                </div>
                <div style={{width:'28%',float:'left',height:'44px'}}>可用(元) :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.avaliableMoney}
                  </span>
                </div>
                <div style={{width:'26%',float:'left',height:'44px'}}>可取(元) :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.useableMoney}
                  </span>
                </div>
                <div style={{width:'19%',float:'right',height:'44px'}}>冻结(元) :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.blockedMoney}
                  </span>
                </div>
              </div>

              <div style={styles.textStyle}>
                <div style={{width:'27%',float:'left',height:'44px'}}>结算方式 :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.payWay}
                  </span>
                </div>
                <div style={{width:'28%',float:'left',height:'44px'}}>结算周期 :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.payCycle}
                  </span>
                </div>
                <div style={{width:'26%',float:'left',height:'44px'}}>结算比例 :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.payPercent}
                  </span>
                </div>
                <div style={{width:'19%',float:'right',height:'44px'}}>
                  <span  style={styles.paraStyle}>
                  </span>
                </div>
              </div>

              <div style={styles.textStyle}>
                <div style={{width:'27%',float:'left'}}>起始日期 :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.startDate}
                  </span>
                </div>
                <div style={{width:'28%',float:'left'}}>过期日期 :
                  <span ref='client' style={styles.paraStyle}>{this.state.propertyManagementData.endDate}
                  </span>
                </div>
                <div style={{width:'26%',float:'left'}}>
                  <span  style={styles.paraStyle}>
                  </span>
                </div>
                <div style={{width:'19%',float:'right'}}>
                  <span  style={styles.paraStyle}>
                  </span>
                </div>
              </div>

            </div>

      </div>
          <div className='historicaldetail' style={styles.clientMessStyle2}>
            <div style={{paddingTop:'0.5%',left:'10%',marginTop:'20px'}}>
              <p style={styles.patternTitle}>历史明细
              </p>

              <div className='col-md-12' style={{backgroundColor:'#ffffff',height:'70px',paddingLeft:'0px'}}>
                <div style={styles.locationInputBoxTime}>
                  <span style={{float: 'left',paddingRight:'5px'}}>开始时间：</span>
                  <div style={{width:'225px',float:'left'}}>
                    <Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/>
                  </div>
                </div>
                <div style={styles.locationInputBoxTime}>
                    <span style={{float: 'left',paddingRight:'5px'}}>结束时间：</span>
                    <div style={{width:'225px',float:'left'}}>
                      <Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/>
                    </div>
                </div>
                <div className='col-md-12' style={styles.searchButtonStyle}>
                    <button style={styles.clickOptions} onClick={this.handleSelect.bind(this)}>查询</button>
                </div>
              </div>

            </div>

          </div>

          <div className='accountList' style={{marginLeft:'2%',width:'96%',height:'40%',backgroundColor:'#ffffff',borderRadius:'4px',marginTop:'90px'}}>
            <div style={styles.locationTable}>
  				        <ContentTable2 data={this.state.operationManagementData}
                    dataTitle={{
                      tradeTime:'交易时间',
                      tradeMoney:'发生金额（元）',
                      factorage:'手续费（元）',
                      balance:'余额（元）',
                      propertyType:'资产类别',
                      businessDigest:'业务摘要',
                      tradeAccount:'对方账户',
                      tradeDetail:'交易描述',
                      tradeWay:'交易渠道'
                    }}
                  />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default OperationManagement;
