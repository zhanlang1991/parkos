import React, {PropTypes} from 'react'
import InputBox from '../common/InputBox'
import OperationManagementTable from '../propertyManagement/OperationManagementTable'
import TableHeader from './TableHeader'
import {queryCarMembermountInfo} from '../../request/paySearchRequest'
import DownBox from '../common/DownBox'
import Yymmdd from '../common/Yymmdd'

class PaySearch extends React.Component {
    constructor() {
        super();
        this.state = {
            paySearchData: {
                details: []
            }
        }
    }

    getStyles() {
        return {
            backgroundStyle: {
                width: '100%',
                height: '570px',
                backgroundColor: '#ebeff2'
            },
            patternTitle: {
                width: '100%',
                height: '50px',
                borderBottom: '1px solid #ebeff2',
                fontFamily: "微软雅黑",
                color: '#333',
                fontSize: '24px',
                textAlign: 'center',
                lineHeight: '34px',
                padding: '6px 15px'
            },
            clientMessStyle1: {
                marginLeft: '25px',
                width: '96%',
                height: '240px',
                backgroundColor: '#ffffff',
                borderRadius: '4px'
            },
            clickOptions: {
                width: '120px',
                borderRadius: '20px',
                color: '#FFC10A',
                backgroundColor: '#FFF',
                borderColor: '#FFC10A',
                border: '1px solid',
                fontSize: '12px'
            },
            locationInputBoxTime: {
                backgroundColor: '#FFFFFF',
                height: '44px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '30px',
                fontFamily: "微软雅黑",
                float: 'left',
                width: '340px',
                paddingLeft: '40px'
            },
            locationButton: {
                backgroundColor: '#FFFFFF',
                height: '30px',
                fontSize: '14px',
                textAlign: 'left',
                lineHeight: '30px',
                fontFamily: "微软雅黑",
                marginTop: '45px',
                float: 'left',
                width: '128px',
                paddingLeft:'9px',
                paddingRight:'1px',
                marginLeft:'2px'
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

    //点击查询指定时间内的历史明细
    handleSelect() {
        this.paySearchRequest()
    }

    paySearchRequest() {
        let custId=this.props.savedLoginAcount[0].cust_id;
        let session=this.props.savedLoginAcount[0].session;
        let reqData = {
          "cust_id":custId,
          "park_code":'',
          "region_code":'',
          "amount_type":'',
          "car_id":'',
          "start_date":'',
          "end_date":'',
          "maxid":'0',
          "maxcount":'100'
        };
        queryCarMembermountInfo(reqData,custId,session).then((res) => {
            console.log('交费查询_查询月卡会员变更记录');
            console.log(res);
            this.setState({paySearchData: res.data})
        });
    }

    render() {
        let styles = this.getStyles()
        return (
            <div>
                <div style={styles.backgroundStyle}>
                    <div style={styles.clientMessStyle1}>
                        <div className='panelTitle' style={{paddingTop: '0.5%',left: '10%',marginTop: '20px'}}>
                            <p style={styles.patternTitle}>交费查询
                            </p>
                        </div>
                        <div className='col-md-12' style={{backgroundColor: '#ffffff',height: '80%',padding: '30px 1.5% 2% 0px'}}>
                            <div style={{height: '44px',width: '95%'}}>
                                <div style={styles.locationInputBoxTime}>
                                    <span style={{float: 'left',marginRight: '5px'}}>开始日期：</span>
                                    <div style={{width: '225px',float: 'left'}}>
                                        <Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/>
                                    </div>
                                </div>
                                <div style={styles.locationInputBoxTime}>
                                    <span style={{float: 'left',marginRight: '5px'}}>到期日期：</span>
                                    <div style={{width: '225px',float: 'left'}}>
                                        <Yymmdd sta2={'YYYY-MM-DD'} start={'YYYY-MM-DD'}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{height: '44px',width: '95%'}}>
                                <div style={styles.locationInputBoxTime}>
                                    <span style={{float: 'left',marginLeft: '13px',marginRight: '6px'}}>车牌号：</span>
                                    <div style={{width: '225px',float: 'left'}}>
                                        <InputBox title=' ' style={{width: '225px'}}/>
                                    </div>
                                </div>
                                <div style={styles.locationInputBoxTime}>
                                    <span style={{float: 'left',  marginRight: '5px'}}>变更类型：</span>
                                    <div style={{float: 'left',width: '225px'}}>
                                      <DownBox title=' ' style={{width:'225px'}}data={[{
                                              value: 'serialNumber',
                                              name: '全部'
                                          },
                                          {
                                            value: 'serialNumber',
                                            name: '交费充值'
                                          },
                                          {
                                            value: 'serialNumber',
                                            name: '暂停'
                                          },
                                          {
                                            value: 'serialNumber',
                                            name: '启用'
                                          },
                                          {
                                            value: 'serialNumber',
                                            name: '重新启用'
                                          }
                                      ]}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{height: '20%',width: '95%',textAlign: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                                <div className='col-md-12' style={styles.locationButton}>
                                    <button style={styles.clickOptions} onClick={this.handleSelect.bind(this)}>查询</button>
                                </div>
                                <div className='col-md-12' style={styles.locationButton}>
                                    <button style={styles.clickOptions} onClick={this.handleSelect.bind(this)}>导出</button>
                                </div>
                            </div>

                        </div>

                        <div className='paySearchList' style={{width: '100%',height: '100%',backgroundColor: '#ffffff',borderRadius: '4px',marginTop: '212px'}}>
                            <div style={styles.locationTable}>
                                <TableHeader data={this.state.paySearchData} dataTitle={{
                                    carNum: '车牌号',
                                    carOwner: '车主',
                                    parkName: '停车场',
                                    payMoney: '交费金额',
                                    happenTime: '发生时间',
                                    alterType: '变更类型',
                                    initialExpirationTime: '初始到期日期',
                                    modifiedExpirationTime: '变更到期日期',
                                    monthCardSource: '月卡来源',
                                    detail: '详情'
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaySearch;
