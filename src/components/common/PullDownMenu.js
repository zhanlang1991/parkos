import React, { PropTypes } from 'react'
import $ from 'jquery'
import {gettableAddTextBox} from '../../request/headParkSectionjson'
import {queryEnterpriseByAccountId} from '../../request/queryEnterpriseByAccountId'

class PullDownMenu extends React.Component {
	constructor(){
		super();
		this.state={
			// tableAddTextBoxasd:{detailsAddTextBox:[]},
			parksArray:[],
			agentsArray:[],
			showParksOrAgents:true
		}
	}
	componentWillMount(){
		//以下获取下拉菜单信息真实数据
		let ansCommData = this.props.parkQuery.savedLoginAcount[0]
		var reqData = {
			"cust_parent_id": ansCommData.ent_cust_id,
	        "maxid": "0",
			"maxcount": "100"
		};
		queryEnterpriseByAccountId(reqData, ansCommData.cust_id, ansCommData.session)
		.then((res) => {
		    // console.log(res);
			let agentsArray = [];
			let parksArray = [];
			res.forEach(function(value){
				if(value.type == '1'){
					agentsArray.push(value);
				}
				if(value.type == '4'){
					parksArray.push(value);
				}
			})
			// console.log(agentsArray);
			// console.log(parksArray);
			this.setState({agentsArray,parksArray})
		});
	}
	componentDidMount(){
		$("#Operatorsli").click(function(){
			$(".operatorstl").show();
			$(".parksheads").hide();
			$("#parksli").css({"border-top":"3px solid #fff"});
			$(this).css({"border-top":"3px solid #103c61"});
		})
		$("#parksli").click(function(){
			$(".operatorstl").hide();
			$(".parksheads").show();
			$("#Operatorsli").css({"border-top":"3px solid #fff"});
			$(this).css({"border-top":"3px solid #103c61"});
		});
		// $("#userchecked").hover(function(){
		// 	$(".passwduser").show();
		// 	$(".hornshots").show();
		// },function(){
		// 	$(".passwduser").hide();
		// 	$(".hornshots").hide();
		// })
		//
        // $("#userchecked").hover(function() {
        //     $(".passwduser").show();
        //     $(".hornshots").show();
        // }, function() {
        //     $(".passwduser").hide();
        //     $(".hornshots").hide();
        // })
	}
	handleClick(id,name){
		this.props.passTableAddText(id,name)
	}

    render() {
		let styles = {
		    fl: {
		        float: 'left'
		    },
		    parkNameHead: {
		        height: '50px',
		        lineHeight: '50px',
		        fontSize: '20px',
		        fontFamily: "微软雅黑",
		        color: '#3F3F3F',
		        cursor: 'pointer'

		    },
		    headPark: {
		        zIndex: '10',
				width:'100%',
		        backgroundColor: '#fff',
		        border:'1px solid #ccc',
		        position: 'absolute',
		        right:'10px',
		        top:'80px',
		        cursor: 'auto',
		        WebkitBoxShadow : '-2px 2px 3px rgba(0, 0, 0, .25)',
  				   MozBoxShadow : '-2px 2px 3px rgba(0, 0, 0, .25)',
                        boxShadow : '-2px 2px 3px rgba(0, 0, 0, .25)'
		    },
		    cursorheadPark: {
		        cursor: 'pointer'
		    },
			li1:{
				lineHeight:'40px',
				fontSize:'16px',
				color:'#333',
				borderRight: '1px solid #ccc',
				borderTop: '3px solid #103c61',
				cursor: 'pointer'
			},
			li2:{
				lineHeight:'40px',
				borderTop: '3px solid #fff',
				fontSize:'16px',
				cursor: 'pointer'
			}
		}

		let parksLi = this.state.parksArray.map((item, i)=> <li key={i} onClick={this.handleClick.bind(this,item.cust_id,item.full_name)} >{item.full_name}</li>)

		let agentsLi = this.state.agentsArray.map((item, i)=> <li key={i} onClick={this.handleClick.bind(this,item.cust_id,item.full_name)} >{item.full_name}</li>)

      return (
		  <div style={styles.headPark} id='SoarheadPark'>
			  <div className='headParkChangeSection'>
				  <div>
					  <ul className='headcharul clearfix'>
						  <li style={styles.li1} id='Operatorsli'>运营商</li>
						  <li style={styles.li2} id='parksli'>停车场</li>
					  </ul>
				  </div>
				  <div className='seekParks clearfix'>
					  <input type='text' className='inputGroups form-control' placeholder='请输入关键字'/>
					  <p className='inputbtn'>
						  <span className='glyphicon glyphicon-search' style={styles.cursorheadPark}></span>
					  </p>
				  </div>
				  <div className='operatorstl'>
					  <div className='parkSelectHeads'>
						  <ul style={styles.cursorheadPark}>
							  {agentsLi}
						  </ul>
					  </div>
				  </div>
				  <div className='parksheads' style={{display:'none'}}>
					  <div className='parkSelectHeads'>
						  <ul style={styles.cursorheadPark}>
							 {parksLi}
						  </ul>
					  </div>
				  </div>
					  <div className='parksnext clearfix'>
						  <p style={styles.cursorheadPark} style={styles.fl} className='sizelefts' id='spanPre'>
						    <span className='iconfont icon-zuosanjiao'></span>
						  	{'上一页'}
						  </p>
						  <p style={styles.fl} className='sizecenters'><span id='spanPageNum'>1</span>/<span id='spanTotalPage'>2</span></p>
						  <p style={styles.cursorheadPark} className='sizerights' id='spanNext'>
						  	{'下一页'}
						  	<span className='iconfont icon-right-triangle'></span>
						  </p>
					  </div>
			  </div>
		  </div>
      )
    }
}
export default PullDownMenu;
