import React, {PropTypes} from 'react'
import $ from 'jquery'

import {browserHistory, Link} from 'react-router'
import Yearstimes from '../common/Yearstimes'
import PullDownMenu from '../common/PullDownMenu'
import {acctQueryOperatorByName} from '../../request/acctQueryOperatorByName'

class Wrapper extends React.Component {
	constructor(){
      super();
      this.state = {
        showParksDroplist:false,
		titleParkName:'武汉无线飞翔公司停车场',
		nowRole:'管理组'
      }
    }
	componentDidMount() {
		console.log(this.props);
		let ansCommData = this.props.savedLoginAcount[0]
		var reqData = {
			"usr_code": ansCommData.name
		};
		acctQueryOperatorByName(reqData, ansCommData.cust_id, ansCommData.session)
		.then((res) => {
		    // console.log(res);
		});
        //给左边菜单加样式
        $(".leftList li").click(function() {
            if ($(this).next().css('display') == 'none') {
	        	fold();
                $(this).next().css({'display':'block'});
            	$(this).parent().css('border-left','3px solid #ff8509');
                $(this).css({"color":"#ff8509","padding-left":"17px"});
                $(this).children('a').css("color","#ff8509");
                $(this).children('s').removeClass('icon-youjiantou').addClass('icon-xiajiantou');
            } else {
                $(this).next().css('display', 'none');
                $(this).parent().css('border-left','0 none');
                $(this).css({"color":"#ccc","padding-left":"20px"});
//              $(this).children('span').removeClass('colorsyell');
                $(this).children('a').css("color","#ccc");
                $(this).children('s').addClass('icon-youjiantou').removeClass('icon-xiajiantou');
            }
//          var dlnodes = $(this).next();
//          if (dlnodes.css('display') == 'block') {
//              dlnodes.css('display', 'block').siblings('dl').css('display', 'none');
//              dlnodes.prev().children('a').addClass('colorsyell').parent().siblings('li').children('a').removeClass('colorsyell');
//              dlnodes.prev().children('s').addClass('iconyelloaway').parent().siblings('li').children('s').addClass('dropDownimg');
//          }
        })
        //给dl下的a标签加颜色
        $(".leftList dl dd").click(function() {
            $(this).children('a').css({"color": "#ff8509"}).parent().siblings('dd').children('a').css("color", "#ccc");
            $(this).parent().siblings('dl').children('dd').children('a').css("color", "#ccc");
        })
        //首页小房子点击让下面的样式颜色消失
        $(".iconhome").click(function() {
            fold();
        })

		$("#userchecked").hover(function(){
			$(".passwduser").show();
			$(".hornshots").show();
		},function(){
			$(".passwduser").hide();
			$(".hornshots").hide();
		})
		
		//折叠侧边栏子菜单
		function fold(){
			$('.leftList').find("li").css("color", "#ccc");
	        $('.leftList').find("li").children("a").css("color", "#ccc");
	        $('.leftList').find("li").children("s").removeClass("icon-xiajiantou").addClass("icon-youjiantou");
	        $('.leftList').find("dl").css({"display":"none"});
	        $('.leftList').find("dl").find('a').css({"color": "#ccc"});
	        $('.leftList').find(".ulBox").css({"border-left":"0 none"});
		}
        {/*var lastIconCacheMenu=null;
		function refreshMenu(thisObject){
			alert(123);
			var displayStatus = null;
			   if(thisObject.next("dl").css("display") == "block"){
				   displayStatus = "block";
			   }

			   $(".leftList dl").css("display", "");
			   $(".leftList li s").removeClass("sback").addClass("sNone");
			   $(".leftList li a").css("color", "#cccccc");

			   if(lastIconCacheMenu !=null && thisObject!=lastIconCacheMenu){
				   var character = lastIconCacheMenu.children("span").data("index");
				   lastIconCacheMenu.children("span").removeClass("icon" + character).addClass("trueIcon" + character);
			   }
			   $(".leftList li").each(function(){
				   var character = thisObject.children("span").data("index");
				   thisObject.children("span").removeClass("icon" + character).addClass("trueIcon" + character);
			   });

			   if(displayStatus == null){
				   thisObject.next("dl").css("display", "block");
				   thisObject.children("a").css("color", "rgb(255, 211, 6)");
				   thisObject.children("s").removeClass("sNone").addClass("sback");
				   var character = thisObject.children("span").data("index");
				   thisObject.children("span").removeClass("trueIcon" + character).addClass("icon" + character);

			   }
			   lastIconCacheMenu=thisObject;
		}

		function GetQueryString(name)
		{
			 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			 var r = window.location.search.substr(1).match(reg);
			 if(r!=null)return  unescape(r[2]); return null;
		}*/
        }
    }

	headparksclick(){
     this.setState({
       showParksDroplist:!this.state.showParksDroplist
     })
   }
    //点击图标跳转到监控模式
    toMonitor() {
        browserHistory.push('monitor')
    }
    headtoppark() {
        browserHistory.push('/home')
    }

	tableAddText(id,name){
		this.setState({
          showParksDroplist:false,
		  titleParkName:name
        })
		console.log(this.props);
		this.props.saveParks(id)
		console.log(id);
		console.log(name);
	}
    render() {
        let styles = {
            bodysize: {
                width: '100%',
                minWidth: '1200px',
                height: '100%',
                backgroundColor: '#ebeff2'
            },
            wrapper: {
                width: '100%',
                height: '80px',
                backgroundColor: '#223144',
                marginTop: '0',
                minWidth: '1200px',
                boxShadow: '5px -5px 5px 1px #ccc'
            },
            fl: {
                float: 'left'
            },
            flimg: {
                float: 'left'
            },
            showIcon:{
            	display:'inline-block',
            	verticalAlign:'middle', 
            	color:'#ccc',
            	fontSize:'20px',
            	marginRight:'3px'
            },
            flh3: {
                float: 'left',
                margin: '0 0 0 10px',
                fontSize: '16px',
                color:'#fff',
                textAlign:'center'
            },
            fr: {
                float: 'right',
                padding: '10px 20px',
                fontFamily: "微软雅黑",
                fontSize: '15px'
            },
            imgstyles: {
                width: '90px',
                height: '36px',
                marginLeft: '15px',
                marginTop: '20px'
            },
            rolestyles: {
                width: '70px',
                height: '30px'
            },
            parkNameHead: {
                width: '300px',
                height: '50px',
                lineHeight: '50px',
                fontSize: '27px',
                fontFamily: "微软雅黑",
                color: '#fff',
                marginTop: '10px',
                marginLeft: '15px',
                cursor: 'pointer',
                position: 'relative'
            },
            deviceStyle:{
            	float:'left',
            	marginLeft:'15px',
            	marginTop:'10px'
            },
            imgiocn: {
                width: '50px',
                height: '50px'
            }
        };
        let styleheadPark = {
            headPark: {
                zIndex: '10',
                width: '400px',
                height: '490px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '10px',
                position: 'absolute',
                display: 'none'
            }
        };
        let styleslis = {
            leftSec: {
                width: '15%',
                backgroundColor: '#333',
                float: 'left',
                paddingBottom: '30%'
            },
            iconsize: {
                width: '100%',
                height: '50px',
                borderBottom:'1px solid #141414'
            },
            iconfontsize: {
                fontSize: '22px',
                color: '#ccc',
                cursor: 'pointer'
            },
            sizecenter: {
                float: 'left',
                width: '18%',
                marginTop: '15px',
                marginLeft: '18px'
            },
            sizecenter2: {
                float: 'left',
                width: '52%',
                marginTop: '20px',
                color:'#ccc',
                fontSize:'14px'
            },
            sizecenter3: {
                float: 'left',
                width: '10%',
                marginTop: '16px',
                color:'#ccc',
                fontSize:'20px'
            }
        }
        return (
            <div style={styles.bodysize}>

                <div style={styles.wrapper}>
                    <div style={styles.flimg}>
                        <img src={require("../../images/logo_1.png")} style={styles.imgstyles}/>
                        <div style={{display:'inline-block',width:'70px',height:'30px',color:'#000',position:'relative',left:'0',top:'12px'}}>
                        	<div style={{position:'absolute',left:'13px',top:'3px',zIndex:'3',fontSize:'16px',color:'#7b838e'}}>{'管理端'}</div>
                        	<img src={require("../../images/role.png")} style={styles.rolestyles}/>
                        </div>
                    </div>
                    <img src={require("../../images/device_line.png")} style={styles.deviceStyle}/>
                    <div style={styles.fl}>
                        <div style={styles.parkNameHead}>
							<span onClick={this.headparksclick.bind(this)} className='parkSoar' id='parkSoar' style={{fontSize:'20px'}}>{this.state.titleParkName}</span>

							<span className='iconfont icon-youjiantou' style={{width:'20px',height:'20px',marginLeft:'5px',fontSize:'18px'}}></span>
							{this.state.showParksDroplist ? <PullDownMenu parkQuery={this.props} passTableAddText={this.tableAddText.bind(this)} /> : ''}
                        </div>
                    </div>
                    <img src={require("../../images/skin.png")} style={{float:'right',width:'20px',height:'20px',margin:'30px 25px 0 10px',cursor:'pointer'}}/>
                    <div style={styles.fr} className='userheads'>
                    	<div style={{cursor: 'pointer',float:'left'}}>
                            <span className='iconfont icon-renwujiankong' style={{float:'left',fontSize:'45px',color:'#fff'}}></span>
                            <h3 style={{color:'#fff',fontSize:'16px',float:'left',padding:'20px 0 0 10px'}}>全屏监控</h3>
                        </div>
                        <img src={require("../../images/device_line.png")} style={{float:'left',margin:'0 15px'}}/>
                        <div id='userchecked' style={{cursor: 'pointer',float:'left',marginTop:'8px'}}>
                            <div style={styles.fl} className='usericon'>
                            	<div style={{width:'100%',position:'relative'}}>
	                                <img src={require("../../images/pandent.png")} className='hornshots' style={{position:'absolute',right:'5px',top:'45px',zIndex:'99',display:'none'}}/>
			                        <div className='passwduser' style={{display: 'none'}}>
			                            <p>
			                            	<span className='iconfont icon-mima' style={styles.showIcon}></span>
			                                <Link to="/PasswordPage">修改密码</Link>
			                            </p>
			                            <p>
			                            	<span className='iconfont icon-guanji' style={styles.showIcon}></span>
			                                <a>退出登录</a>
			                            </p>
			                        </div>
		                        </div>
                            </div>
                            <h3 style={styles.flh3}>欢迎您!<p style={{marginTop:'5px'}}>超级管理员</p></h3>
                        </div>
                    </div>
                </div>
                <div style={{
                    minWidth: '1200px'
                }}>
                    <div id='leftSec' style={styleslis.leftSec}>
                        <div style={styleslis.iconsize}>
                            <div style={styleslis.sizecenter}>
                                <span className='iconhome iconfont icon-4_4zhuomianchi' style={styleslis.iconfontsize} onClick={this.headtoppark.bind(this)}></span>
                            </div>
                            <div style={styleslis.sizecenter2}>
                                我的桌面
                            </div>
                            <div style={styleslis.sizecenter3} className='iconfont icon-zhedie'></div>
                        </div>
                        <div className='styleul'>
                            <ul className='leftList'>
                            	<div className='ulBox'>
	                                <li>
	                                    <span className='iconfont icon-rectangle12'></span>
	                                    <a>数据分析</a>
	                                    <s className='dropDownimg iconfont icon-youjiantou'></s>
	                                </li>
	                                <dl className='noneList'>
	                                    <dd>
	                                        <Link to="/incomeAnalysis">收入分析</Link>
	                                    </dd>
	                                    <dd>
	                                        <Link to="/flowAnalysis">流量分析</Link>
	                                    </dd>
	                                </dl>
                                </div>
                                <div className='ulBox'>
                                <li>
                                    <span className='iconfont icon-woshou'></span>
                                    <a>交易管理</a>
                                    <s className='dropDownimg iconfont icon-youjiantou'></s>
                                </li>
                                <dl className='noneList'>
                                    <dd>
                                        <Link to='/parkingQuery'>订单查询</Link>
                                    </dd>
                                    <dd>
                                        <Link to='/parkingLaundry'>停车流水</Link>
                                    </dd>
                                </dl>
                                </div>
                                <div className='ulBox'>
                                <li>
                                    <span className='iconfont icon-wsmp-payuser'></span>
                                    <a>会员管理</a>
                                    <s className='dropDownimg iconfont icon-youjiantou'></s>
                                </li>
                                <dl className='noneList'>
                                    <dd>
                                        <Link to="/PaySearch">交费查询</Link>
                                    </dd>
                                    <dd>
                                        <a>会员查询</a>
                                    </dd>
                                    <dd>
                                        <Link to="/MemberCard">会员卡</Link>
                                    </dd>
                                </dl>
                                </div>
                                <div className='ulBox'>
                                <li>
                                    <span className='iconfont icon-yunying'></span>
                                    <a>运营管理</a>
                                    <s className='dropDownimg iconfont icon-youjiantou'></s>
                                </li>
                                <dl className='noneList'>
                                    <dd>
                                        <Link to="/OperationManagement">资产管理</Link>
                                    </dd>
                                    <dd>
                                        <a>PDA管理</a>
                                    </dd>
                                </dl>
                                </div>
                                <div className='ulBox'>
                                <li>
                                    <span className='iconfont icon-renyuanleibie'></span>
                                    <a>人员管理</a>
                                    <s className='dropDownimg iconfont icon-youjiantou'></s>
                                </li>
                                <dl className='noneList'>
                                    <dd>
                                        <a>收费员管理</a>
                                    </dd>
                                    <dd>
                                        <Link to="/CheckingIn">考勤管理</Link>
                                    </dd>
                                </dl>
                                </div>
                                <div className='ulBox'>
                                <li>
                                    <span className='iconfont icon-baobiao'></span>
                                    <a>报表中心</a>
                                    <s className='dropDownimg iconfont icon-youjiantou'></s>
                                </li>
                                <dl className='noneList'>
                                    <dd>
                                        <a>报表查询</a>
                                    </dd>
                                    <dd>
                                        <a>统计报表</a>
                                    </dd>
                                </dl>
                                </div>
                                <div className='ulBox'>
                                <li>
                                    <span className='iconfont icon-shezhi'></span>
                                    <a>系统设置</a>
                                    <s className='dropDownimg iconfont icon-youjiantou'></s>
                                </li>
                                <dl className='noneList'>
                                    <dd>
                                        <Link to='/SystemPage'>账号管理</Link>
                                    </dd>
                                    <dd>
                                        <a>信息维护</a>
                                    </dd>
                                    <dd>
                                        <a>计费索引</a>
                                    </dd>
                                </dl>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div style={{
                        float: 'right',
                        width: '85%',
                        height: '100%',
                        backgroundColor: '#ebeff2'
                    }}>
                        <div>
                            {React.cloneElement(this.props.children, this.props)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wrapper;
