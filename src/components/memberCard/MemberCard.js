import React, { PropTypes } from 'react'
import InputBox from '../common/InputBox'
import DownBox from '../common//DownBox'
import OperationManagementTable from '../propertyManagement/OperationManagementTable'
import MemberCardTable from './MemberCardTable'
import {getMemberCardInfo} from '../../request/memberCardRequest'
import {queryFeesRoleInfo} from '../../request/memberCardRequest'
import {parkQueryRegionInfo} from '../../request/memberCardRequest'
import AddAlterBox from './AddAlterBox'
import $ from 'jquery'

class  MemberCard extends React.Component {
  constructor() {
    super();
    this.state = {
      memberCardData: {details:[]},
      whetherAltertexShow: false,
      carTypeData:0
    }
  }

  getStyles(){
    return{
      backgroundStyle:{
        width:'100%',
        height:'570px',
        backgroundColor:this.state.backgroundColor,
        zIndex:this.state.maxZ
      },
      clientMessStyle1:{
        marginLeft:'25px',
        width:'96%',
        height:'150px',
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
      locationButton: {
        backgroundColor: '#FFFFFF',
        height: '30px',
        fontSize: '14px',
        textAlign: 'left',
        lineHeight: '30px',
        fontFamily: "微软雅黑",
        float: 'left',
        width: '13.5%'
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
      clickAddOptions: {
        width: '120px',
        borderRadius: '20px',
        color: '#ffc20a',
        backgroundColor: '#FFF',
        borderColor: '#ffc20a',
        border: '1px solid',
        fontSize: '12px',
        height:'32px'
      },
      locationOptions2 : {
        width: '120px',
        borderRadius: '100px',
        color: '#ffc20a',
        backgroundColor: '#FFF',
        borderColor: '#FFC10A',
        border: '1px solid',
        fontSize: '12px',
        lineHeight: '30px'
      },
      locationTable: {
        backgroundColor: '#FFFFFF',
        fontSize: '14px',
        margin: 'auto',
        borderRadius: '5px',
        fontFamily: "微软雅黑",
        marginTop: '20px',
        padding: '14px 14px'
      },
      glyphicon:{
        display:'inline-block',
        fontFamily:'Glyphicons Halflings',
        fontStyle:'normal',
        fontWeight:'400',
        lineHeight:'1',
        paddingRight:'5px'
      },
      tableStyle: {
        color: '#6495ED',
        textDecoration: 'underline',
        cursor:'pointer'
      },
      divBox: {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        paddingBottom: '20.8%',
        display: 'none',
        opacity: '1',
        backgroundColor: 'rgba(9, 9, 9,0.5)'
      }
    }
  }

  getCarTypeValue(value){
    this.setState({
      carTypeData:value
    })
  }

  handleClick() {
    $("#slideDownPart").slideDown(2000)
  }

  //点击查询指定时间内的历史明细
  handleSelect() {
    this.memberCardRequest();
  }

  handleAddButtonSelect(){
    $("#myModalLabelTitle").html("新增会员卡");
  }

  memberCardRequest() {
    // getMemberCardInfo().then((res) => {
    //   this.setState({
    //     memberCardData: res.data
    //   })
    // });


    //查询月卡车收费标准记录
    let reqData = {
        "car_type":'1',
        "region_code":'' ,
        "cust_id_mc":'',
        "region_code":"42011520008702",
        "maxid":"0",
        "maxcount":"100"
    };
    //obj_method="bexData"
    //cust_id="8010000000040"
    //memberCard_interface1_result1.png
    let custId=this.props.savedLoginAcount[0].cust_id;
    let session=this.props.savedLoginAcount[0].session;
		queryFeesRoleInfo(reqData,custId,session)
		.then((res) => {
			console.log(res);
		})

    //查询停车场区域信息85103004
    let queryParkregionReq = {
        "park_code":'',
        "id":''
    }
    parkQueryRegionInfo(queryParkregionReq,custId,session).then((res) =>{
      //console.console.log(res);
    })
  }

  render () {
    let styles = this.getStyles()
    console.log(this.carTypeData);
    console.log(this.props.savedLoginAcount[0].cust_id);
    console.log(this.props.savedLoginAcount[0].session);
    return(
      <div>
        <div style={styles.backgroundStyle}>
          <div style={styles.clientMessStyle1}>
            <div className='panelTitle' style={{paddingTop:'0.5%',left:'10%',marginTop:'20px'}}>
              <p style={styles.patternTitle}>
                <div style={{float:'left',marginLeft:'45%'}}>会员卡
                </div>
                <div style={{float:'right',position:'relative'}}>
                  <button class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal' style={styles.locationOptions2} onClick={this.handleAddButtonSelect.bind(this)}>
                      <span style={styles.glyphicon}>+</span>
                      新增
                  </button>
                  <AddAlterBox custId={this.props.savedLoginAcount[0].cust_id} session={this.props.savedLoginAcount[0].session} data={this.state.addData}/>
                </div>
              </p>
              <div style={{height:'44px',width:'95%',marginTop:'30px',paddingLeft:'40px'}}>
                <div style={styles.locationInputBoxTime}>
                  <div style={{width:'340px',float:'left'}}>
                    <span style={{float: 'left',marginRight:'5px',marginTop:'6px'}}>车辆类型：</span>
                    <div style={{width:'225px',float:'left'}}>
                    <DownBox transmitValue={this.getCarTypeValue.bind(this)} title=' ' style={{marginLeft:'15px',width:'225px'}}/>
                    </div>
                  </div>
                  <div className='col-md-12' style={styles.locationButton}>
                      <button style={styles.clickOptions} onClick={this.handleSelect.bind(this)}>查询</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='memberCardList' style={{width:'100%',height:'100%',backgroundColor:'#ffffff',borderRadius:'4px',marginTop:'40px'}}>
              <div style={styles.locationTable}>
                <MemberCardTable data={this.state.memberCardData}
                  dataTitle={{
                    parkName:'所属停车场',parkSection:'区域',
                    feeStandardName:'收费标准名称', monthCardType:'月卡类型',
                    carType:'车辆类型', payMoney:'收费金额',
                    complimentaryDayNum:'赠送天数', remark:'备注',
                    operation:'操作'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MemberCard;
