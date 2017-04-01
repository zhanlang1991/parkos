import React, {PropTypes} from 'react'
import DownBox from '../common/DownBox.js'
import Pagination from '../common/Pagination.js'
import $ from 'jquery'
import DeleteDialogBox from '../common/DeleteDialogBox'
import MemberCardDetail from './MemberCardDetail'
import AddAlterBox from './AddAlterBox'

class MemberCardTable extends React.Component {
    constructor() {
        super();
        this.state = {
            showArr: [],
            itemsNum: 3,
            isDownBoxShow: false
        }
    }
    getStyles() {
        return {
            tableStyle: {
                color: '#6495ED',
                textDecoration: 'underline',
                cursor: 'pointer'
            },
            div1: {
                position: 'relative',
                margin: '20px 0 10px 0'
            },
            div2: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
            },
            div3: {
                position: 'absolute',
                width: '95px',
                right: '5%',
                top: '0'
            },
            alterButtonStyle:{
              color:'rgb(100, 149, 237)',
              textDecoration:'underline'
            }
        }
    }

    //初始化表格
    componentWillReceiveProps(nextProps) {
        this.setState({isDownBoxShow: true})
        this.myMapTable(0, nextProps.data, 3)
        $('.indexItem').eq(0).addClass('activeItem')
    }

    //创建表格的数组
    myMapTable(index = 0, data = this.props.data, num = this.state.itemsNum) {
        let tableArr = [];
        for (let i = num * index; i < num * (index + 1) && i < data.totalNum; i++) {
            tableArr = tableArr.concat(data.details[i])
        }
        this.setState({showArr: tableArr})
    }

    //点击查找表格中的数据
    changeShowNum(num) {
        this.setState({itemsNum: num})
        this.myMapTable(0, this.props.data, num)
        $('.indexItem').eq(0).addClass('activeItem')
    }

    handleClick(){
      $("#myModalLabelTitle").html("修改会员卡");
    }


    render() {
        let styles = this.getStyles()
        let rows = this.state.showArr.map((item, i) => (
            <tr>
                <td>{item.parkName}</td>
                <td>{item.parkSection}</td>
                <td>{item.feeStandardName}</td>
                <td>{item.monthCardType}</td>
                <td>{item.carType}</td>
                <td>{item.payMoney}</td>
                <td>{item.complimentaryDayNum}</td>
                <td>{item.remark}</td>
                <td style={styles.tableStyle} data-toggle='modal'>
                    <span class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal' id='alterButton' style={styles.alterButtonStyle} onClick={this.handleClick.bind(this)}>编辑</span>
                    <AddAlterBox data={this.state.addData}/>
                    <MemberCardDetail pageButton='详情' pageTitle='会员卡详情' whetherUsable='false' dataTarget='#detail' dataId ='detail' />
                    <DeleteDialogBox data={item.feeStandardName} deleteTag='feesRole' deleteText1='确定要删除 【' deleteText2='】该条收费标准？'/>
                </td>
            </tr>
        ))
        let rowsTitle = (
            <tr>
                <th >{this.props.dataTitle.parkName}</th>
                <th >{this.props.dataTitle.parkSection}</th>
                <th >{this.props.dataTitle.feeStandardName}</th>
                <th >{this.props.dataTitle.monthCardType}</th>
                <th >{this.props.dataTitle.carType}</th>
                <th >{this.props.dataTitle.payMoney}</th>
                <th >{this.props.dataTitle.complimentaryDayNum}</th>
                <th >{this.props.dataTitle.remark}</th>
                <th >{this.props.dataTitle.operation}</th>
            </tr>
        )
        return (
            <div>
                <table className="altrowstable" id="alternatecolor" cellSpacing='0' cellPadding='0' border='0'>
                    {rowsTitle}
                    {rows}
                </table>
                <div style={styles.div1} className='clearfix'>
                    <div style={styles.div2}>
                        <Pagination totalNum={this.props.data.totalNum} itemsNum={Number(this.state.itemsNum)} myMapTable={this.myMapTable.bind(this)} itemsNum={this.state.itemsNum}/>
                    </div>
                    <div style={styles.div3}>
                        {this.state.isDownBoxShow
                            ? <DownBox style={{width:'95px'}} data={[
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
                                ]}/>
                            : ''}
                    </div>
                </div>
            </div>
        )
    }
}
MemberCardTable.defaultProps = {
    data: {
        totalNum: '100',
        details: [
            {
                parkName: '鄂AOUF36',
                parkSection: 'C187刘丹',
                feeStandardName: '武汉三金华都运营商金华都运营商',
                monthCardType: '960.00',
                carType: '2017-02-28 17:08:02',
                payMoney: '交费充值',
                complimentaryDayNum: '2017-03-14',
                remark: '2018-03-14',
                operation: '平台'
            }
        ]
    }
}

MemberCardTable.propTypes = {
    data: PropTypes.object.isRequired
};
export default MemberCardTable;
