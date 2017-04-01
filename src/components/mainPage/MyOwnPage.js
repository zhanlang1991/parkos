import React, {PropTypes} from 'react'
import RetroflexPattern from '../common/RetroflexPattern'
import NoRetroflexPattern from '../common/NoRetroflexPattern'
import {getPatternInfo} from '../../request/mainPageRequest'

import {queryEnterpriseByAccountId} from '../../request/mainPageRequest'
import {acctQueryOperatorByName} from '../../request/mainPageRequest'
import {sysQueryRoleAuth} from '../../request/mainPageRequest'
import {acctQueryCustEnterpriseInfo} from '../../request/mainPageRequest'
import {queryParkSeatInfoByID} from '../../request/mainPageRequest'
import {queryTodayTradeReport} from '../../request/mainPageRequest'

import pic1 from '../../images/round-1.png'
import pic2 from '../../images/round-2.png'
import pic3 from '../../images/round-3.png'
import pic4 from '../../images/round-4.png'
import pic5 from '../../images/round-5.png'
import pic6 from '../../images/round-6.png'

//import btnSrc11 from '../../images/jrsr_icon01.png'
//import btnSrc12 from '../../images/jrsr_icon06.png'
//import btnSrc13 from '../../images/jrsr_icon05.png'
//import btnSrc14 from '../../images/jrsr_icon04.png'
//import btnSrc16 from '../../images/jrsr_icon07.png'
//
import btnSrc21 from '../../images/lsc.png'
//
//import btnSrc31 from '../../images/jrbw_icon2.png'
//import btnSrc32 from '../../images/jrbw_icon1.png'
//
//import btnSrc41 from '../../images/jrcz_icon1.png'
//import btnSrc42 from '../../images/jrcz_icon2.png'
//
//import btnSrc61 from '../../images/jrqd_icon2.png'
//import btnSrc62 from '../../images/jrqd_icon1.png'

class MyOwnPage extends React.Component {
    constructor() {
        super();
        this.state = {
            patternData: [
                {
                    backData: []
                }
            ],
            divHeight:{}
        }
    }

    componentWillMount() {
      //查询客户号下子运营商/停车场信息（展开运营商树）
      this.queryEnterpriseRequest();
      //查询机构角色人员,根据cust_id获取到对应的角色
      this.userAssignRequest();
      //查询角色权限,通过role_id，得到菜单、页面、按钮权限
      this.roleAuthRequest();
      //查询翻转背面信息
      this.patternDataRequest();
      //查询企业客户资料,得到企业类别
      this.custEnterpriseRequest();
      //查询停车场、运营商下属的所有的车位数信息
      //this.parkSeatInfoRequest();
      //查询当日交易汇总
      this.todayTradeReportRequest();
    }

    //查询客户号下子运营商/停车场信息（展开运营商树）
    queryEnterpriseRequest(){
      let custId=this.props.savedLoginAcount[0].cust_id;
      let session=this.props.savedLoginAcount[0].session;
      let reqData = {
        "cust_parent_id":custId,
        "isself":'0',
        "cust_status":'',
        "orderby":'',
        "maxid":'0',
        "maxcount":'100',
        "park":''
      };
      queryEnterpriseByAccountId(reqData,custId,session).then((res) => {
        //   console.log('1展开运营商树***');
        //   console.log(res);
      });
    }

    //查询机构角色人员
    userAssignRequest(){
      let custId=this.props.savedLoginAcount[0].cust_id;
      let session=this.props.savedLoginAcount[0].session;
      let userCode=this.props.savedLoginAcount[0].name;
      //Need to save the userCode in the Redux
      let reqData = {
        "usr_code":userCode//操作员名
      };
      acctQueryOperatorByName(reqData,custId,session).then((res) => {
          console.log('2查询机构角色人员***');
          console.log(res);
          this.props.saveUserRole(res[0])
      });
    }

    //获取翻转页面数据fakeData
    patternDataRequest() {
      getPatternInfo().then((res) => {
          this.setState({patternData: res.data})
      });
    }

    //查询角色权限
	  roleAuthRequest() {
      let custId=this.props.savedLoginAcount[0].cust_id;
      let session=this.props.savedLoginAcount[0].session;
      let reqData={
        "role_id":'2'
      }
      sysQueryRoleAuth(reqData,custId,session).then((res) => {
        //   console.log('3查询角色权限***');
        //   console.log(res);
      })
    }

    //查询企业客户资料
    custEnterpriseRequest(){
      let custId=this.props.savedLoginAcount[0].cust_id;
      let session=this.props.savedLoginAcount[0].session;
      let reqData={
        "cust_id":custId
      }
      acctQueryCustEnterpriseInfo(reqData,custId,session).then((res) => {
        // console.log('4查询企业客户资料***');
        // console.log(res);
      })
    }

    //查询停车场、运营商下属的所有的车位数信息
    parkSeatInfoRequest(){
      let custId=this.props.savedLoginAcount[0].cust_id;
      let session=this.props.savedLoginAcount[0].session;
      let reqData = {
        "park_code":'',//停车场编号
        "agent_id":''//运营商ID
      };
      queryParkSeatInfoByID(reqData,custId,session).then((res) => {
        console.log(res);
      })
    }

    //查询当日交易汇总'8010000000001'
    todayTradeReportRequest(){
      let custId=this.props.savedLoginAcount[0].cust_id;
      let session=this.props.savedLoginAcount[0].session;
      let reqData = {
        "cust_id":custId,//运营商ID
        "date":''//日期
      };
      queryTodayTradeReport(reqData,custId,session).then((res) => {
        console.log('5查询当日交易汇总***');
        console.log(res);
        //Get the statistic data then handle it
        //Data format is like patternData
      })
    }

    getStyles() {
        return {
            background: {
                width: '100%',
                backgroundColor: '#fff'
            },
            firstLineStyle:{
              position:'relative',
              width: '100%',
              height:this.state.divHeight,
              backgroundColor: '#fff',
              paddingTop: '3%'
            },
            secondLineStyle:{
              position:'relative',
              width: '100%',
              height:this.state.divHeight,
              backgroundColor: '#fff'
            }
        }
    }
//scrollHeight
    componentDidMount(){
      this.setState({
        divHeight:(window.screen.availHeight-150)/2
      })
    }

    render() {
        let styles = this.getStyles()
        return (
            <div className='rotateBackground' style={styles.background}>
                <div id='firstLine' style={styles.firstLineStyle}>
                    <div className='firstRetroflexPattern' style={{position: 'absolute',float: 'left',width: '33%',backgroundColor: '#fff',marginLeft: '3%',height:'80%'}}>
                        <RetroflexPattern passData={this.state.patternData[0]} picSrc={pic1} btnSrc={['iconfont icon-21','iconfont icon-weixin','iconfont icon-zhifubao','iconfont icon-card','iconfont icon-jff','iconfont icon-card','iconfont icon-card']} bgc='#149590' textColor='#149590' unitColor='#eb525d' cName='iconfont icon-money'/>
                    </div>
                    <div className='secondRetroflexPattern' style={{position: 'absolute',height:'80%',width: '33%',marginLeft: '35%',backgroundColor: '#fff'}}>
                        <RetroflexPattern passData={this.state.patternData[1]} picSrc={pic2} btnSrc={['iconfont icon-chexing','iconfont icon-chexing','iconfont icon-chexing']} bgc='#ec7205' textColor='#ec7205' unitColor='#49c0e7' cName='iconfont icon-jiaotongliuliang'/>
                    </div>
                    <div className='thirdRetroflexPattern' style={{position: 'absolute',height:'80%',width: '33%',float: 'right',marginLeft: '67%', backgroundColor: '#fff'}}>
                        <RetroflexPattern passData={this.state.patternData[2]} picSrc={pic3} btnSrc={['iconfont icon-fz','iconfont icon-malu']} bgc='#dc5e48' textColor='#dc5e48' unitColor='#f09d18' cName='iconfont icon-tingchechang'/>
                    </div>
                </div>
                <div className='secondLine' style={styles.secondLineStyle}>
                    <div className='forthRetroflexPattern' style={{position: 'absolute',height:'80%',width: '33%',float: 'left',backgroundColor: '#fff',marginLeft: '3%'}}>
                        <RetroflexPattern passData={this.state.patternData[3]} picSrc={pic4} btnSrc={['iconfont icon-chongzhi','iconfont icon-chongzhi1']} bgc='#0e7da8' textColor='#0e7da8' unitColor='#bc7dd5' cName='iconfont icon-jinbi'/>
                    </div>
                    <div className='fifthRetroflexPattern' style={{position: 'absolute',height:'80%',width: '33%',marginLeft: '35%',backgroundColor: '#fff'}}>
                        <RetroflexPattern passData={this.state.patternData[4]} picSrc={pic5} btnSrc={['iconfont icon-weixin','iconfont icon-shouji']} bgc='#209163' textColor='#209163' unitColor='#71b65b' cName='iconfont icon-appmyyonghuguanli'/>
                    </div>
                    <div className='sixthRetroflexPattern' style={{position: 'absolute',height:'80%',width: '33%',float: 'right',marginLeft: '67%',backgroundColor: '#fff'}}>
                        <RetroflexPattern passData={this.state.patternData[5]} picSrc={pic6} btnSrc={['iconfont icon-weixin','iconfont icon-shouji']} bgc='#2a598d' textColor='#2a598d' unitColor='#45bcb8' cName='iconfont icon-2'/>
                    </div>
                </div>
                <div className='thirdLine' style={{position: 'relative',width: '100%',height: '50%',backgroundColor: '#fff',marginTop: '24.5%'}}>
                </div>
            </div>
        );
    }
}

export default MyOwnPage;
