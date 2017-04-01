import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import PullDownMenu from '../../common/PullDownMenu'
import '../../../js/monitoring'

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      showParksDroplist:false,
      rootHeight:window.innerHeight*0.07
    }
  }

    //调整窗口宽高时自适应布局
    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
        this.setState({
            rootHeight:nextProps.myHeight*0.07
        })
    }
   //点击选择车场、运营商事件
   handleClick(){
    this.setState({
      showParksDroplist:!this.state.showParksDroplist
    })
  }

//点击标题栏事件
handleDoubleClick(e){
  let element = this.refs.inputContent;
  console.log(element.innerHTML);
  var oldhtml = element.innerHTML;
	//创建新的input元素
	var newobj = document.createElement('input');
	//为新增元素添加类型
	newobj.type = 'text';
  //设置input双击事件，防止继承父级双击事件
  newobj.ondblclick = function(e){
      e.stopPropagation();
  };
	//为新增元素添加类型
	newobj.id = 'updateTitle';
	newobj.setAttribute("maxlength", "50");
	//为新增元素添加value值
	newobj.value = oldhtml;
  //设置该标签的子节点为空
  element.innerHTML = '';
  //添加该标签的子节点，input对象
  element.appendChild(newobj);
  //为新增元素添加类型
  $("#updateTitle").css({"width":"750px","height":"35px","color":"black"});
  //设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
  newobj.setSelectionRange(0, oldhtml.length);
  //设置获得光标
  newobj.focus();
  //为新增元素添加光标离开事件
  newobj.onblur = function() {
    //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值
    if (this.value == oldhtml) {
      element.innerHTML = oldhtml;
    } else {
      element.innerHTML = this.value;
    }
  }
}
  render () {
      console.log(this.state.showParksDroplist);
    let styles={
      div0:{
        height:`${this.state.rootHeight}px`
      },
      img1:{ height:`${this.state.rootHeight}px`,width:'100%',cursor:'pointer'},
      img2:{position:'absolute',left:'90%',top:'5px',width:"12px",height:"15px"},
      img3:{width:'100%',height:'100%'},
      div1:{float:'left',width:'95%',height:'100%',position:'asolute'},
      div2:{width:'100%',height:'50%'},
      div3:{background:'#3db665',float:'left',height:'100%',width:'95%',borderRadius:'3px'},
      div4:{width:'100%',padding:'2px 15px',position:'relative',cursor:'pointer'},
      p1:{position:'absolute',whiteSpace:'nowrap',color:'#bababa',fontSize:'15px',lineHeight:`${this.state.rootHeight*0.5}px`,textAline:'center'},
      p2:{position:'absolute',top:'-2px',left:'85%'},
      // a1:{width:'100%',height:'100%',paddingTop:'5px',position:'absolute',color:'#eaeaec'},
      span1:{fontSize:'14px',color:'#fff'},
      span2:{display:'inline-block', fontSize: '25px',width:'100%',height:"100%",lineHeight:`${this.state.rootHeight}px`,extAlign:'center',backgroundColor:'transparent',border:'none',cursor:'pointer'}
    }
    return(
        <div className="controls clearfix" style={styles.div0} >
          <div className="controls-1" style={styles.div5}>
            <Link to='/home'>
              <img src={require('../../../images/logo_1.png')} id="headLogo" style={styles.img1} />
            </Link>
          </div>
          <div className="controls-2" id="top_title_mess">
            <p className="controls-2p">
              <span id="titlest" ref="inputContent" style={styles.span2}  onDoubleClick={this.handleDoubleClick.bind(this)}>请输入标题信息
              </span>
            </p>
          </div>
          <div className="controls-3">
            <div className="controls-3s">
              <div style={styles.div1}>
                <p id="clock" style={styles.p1}><script type="text/javascript">show_cur_times()</script></p>
                <p id="returnHome" style={styles.p2}><Link to="/"><img src={require('../../../images/home.png')} style={styles.img3} /></Link></p>
              </div>
            </div>
            <div  style={styles.div2}>
              <div style={styles.div3} >
                <div style={styles.div4} onClick={this.handleClick.bind(this)}>
                  <span  id="parkNameHead"  style={styles.span1}>北京科技会展中心停车场</span>
                  <img src={require('../../../images/choice_button.png')}  style={styles.img2} />
                </div>
                {this.state.showParksDroplist ? <PullDownMenu parkQuery={this.props.passProps} /> : ''}
              </div>
            </div>
          </div>
        </div>
        )
  }
}

export default Header;
