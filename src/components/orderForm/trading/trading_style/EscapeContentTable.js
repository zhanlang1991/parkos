import React, {PropTypes} from 'react'
import TextBox from '../trading_style/TextBox.js'
import DownBox from '../../../common/DownBox.js'
import Pagination from '../../../common/Pagination.js'
import Page from '../../../common/Page.js'

class EscapeContentTable extends React.Component {
	constructor(){
		super();
		this.state = {
			showArr: [],
			itemsNum: 3,
			startIndex:0,
			isDownBoxShow: false
		}
	}
    getStyles() {
        return {
			tableStyle: {
                color: '#6495ED',
                textDecoration: 'underline',
				cursor:'pointer'
            },
			div1:{
				position:'relative',
				margin:'20px 0 0 0'
			},
			div2:{
				width:'100%',
				display:'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				textAlign:'center'
			},
			div3:{
				position:'absolute',
				width:'95px',
				right:'5%',
				top:'0'
			}
        }
    }



	//初始化表格
	componentWillReceiveProps(nextProps){
		if(this.props.data != nextProps.data){
			this.setState({
				isDownBoxShow:true,
				totalNum:this.props.data.totalNum
			})
			this.myMapTable(0,nextProps.data,3)
		}
	}

	//创建表格的数组
	myMapTable(index=0,data=this.props.data,num=this.state.itemsNum){
		let tableArr = [];
			for(let i = num*index ; i < num*(index+1) && i <  data.totalNum ; i++){
				tableArr = tableArr.concat( data.details[i])
			}
			this.setState({
				showArr: tableArr
			})
	}



	//点击查找表格中的数据
	changeShowNum(num) {
		this.setState({itemsNum: num},function(){
			this.myMapTable(0, this.props.data, this.state.itemsNum)
    })
	}


    render() {
    let styles = this.getStyles()

		let rows = this.state.showArr.map((item,i) => (

			<tr>
				<td>{item.id}</td>
				<td>{item.chepai}</td>
				<td>{item.chewei}</td>
				<td>{item.dingdan}</td>
				<td>{item.xiadan}</td>
				<td>{item.ruchang}</td>
				<td>{item.chuchang}</td>
				<td>{item.chuchang2}</td>
				<td>{item.chuchang3}</td>
				<td>{item.chuchang4}</td>
			</tr>
		))
		let rowsTitle = (
			<tr>
				<th >{this.props.dataTitle.carNumber}</th>
				<th >{this.props.dataTitle.payCost}</th>
				<th >{this.props.dataTitle.parkingSpace}</th>
				<th >{this.props.dataTitle.orderCar}</th>
				<th >{this.props.dataTitle.orderTime}</th>
				<th >{this.props.dataTitle.inputField}</th>
				<th >{this.props.dataTitle.outField}</th>
				<th >{this.props.dataTitle.details}</th>
				<th >{this.props.dataTitle.details2}</th>
				<th >{this.props.dataTitle.details3}</th>
			</tr>
		)
        return (
			<div>

				<table className="altrowstable" id="alternatecolor" cellSpacing='0' cellPadding='0' border='0'>
					{rowsTitle}
					{rows}
				</table>
				<div style={styles.div1}>
					<div style={styles.div2}>
						{this.state.isDownBoxShow ? <Page total={this.props.data.totalNum} start={this.state.startIndex} size={Number(this.state.itemsNum)} pageIndexChange={this.myMapTable.bind(this)} /> : ''}
					</div>
					<div style={styles.div3}>
						{this.state.isDownBoxShow ?  <DownBox transmitValue={this.changeShowNum.bind(this)}  data={[
							{
								value: '3',
								name: '3条/页'
							}, {
								value: '50',
								name: '50条/页'
							}, {
								value: '100',
								name: '100条/页'
							}, {
								value: '500',
								name: '500条/页'
							}
						]}/> : ''}
					</div>
                </div>
			</div>
        )
    }
}
EscapeContentTable.defaultProps={
  dataTitle:{serialNumber:'序号', carNumber:'车牌号',payCost:'缴费方式',parkingCar:'停车场', parkingSpace:'车位号',orderCar:'订单状态', orderTime:'下单时间',inputField:'入场时间', outField:'出场时间', details:'详情'},
  data:[{value:'park0',name:'停车场1'}]
}
EscapeContentTable.propTypes = {
  dataTitle: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default EscapeContentTable;
