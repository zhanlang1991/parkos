import React, {PropTypes} from 'react'
import GoodsTextBox from '../trading_style/GoodsTextBox.js'
import DownBox from '../../../common/DownBox.js'
import Pagination from '../../../common/Pagination.js'
import $ from 'jquery'

class GoodsContentTable extends React.Component {
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
                margin: '20px 0 0 0'
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

    render() {

        let styles = this.getStyles()
        console.log(this.props.data);

        let rows = this.state.showArr.map((item, i) => (

            <tr>
                <td>{item.chepai}</td>
                <td>{item.jiaofei}</td>
                <td>{item.tingche}</td>
                <td>{item.chewei}</td>
                <td>{item.dingdan}</td>
                <td>{item.xiadan}</td>
                <td>{item.ruchang}</td>
                <td style={styles.tableStyle} data-toggle='modal'><GoodsTextBox/></td>
            </tr>
        ))
        let rowsTitle = (
            <tr>
                <th >{this.props.dataTitle.payCost}</th>
                <th >{this.props.dataTitle.parkingCar}</th>
                <th >{this.props.dataTitle.parkingSpace}</th>
                <th >{this.props.dataTitle.orderCar}</th>
                <th >{this.props.dataTitle.orderTime}</th>
                <th >{this.props.dataTitle.inputField}</th>
                <th >{this.props.dataTitle.outField}</th>
                <th >{this.props.dataTitle.details2}</th>
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
                        <Pagination totalNum={this.props.data.totalNum} itemsNum={Number(this.state.itemsNum)} myMapTable={this.myMapTable.bind(this)} itemsNum={this.state.itemsNum}/>
                    </div>
                    <div style={styles.div3}>
                        {this.state.isDownBoxShow
                            ? <DownBox style={{width:'50px'}} transmitValue={this.changeShowNum.bind(this)} data={[
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
GoodsContentTable.defaultProps = {
    dataTitle: {
        serialNumber: '序号',
        carNumber: '车牌号',
        payCost: '缴费方式',
        parkingCar: '停车场',
        parkingSpace: '车位号',
        orderCar: '订单状态',
        orderTime: '下单时间',
        inputField: '入场时间',
        outField: '出场时间',
        details: '详情'
    },
    data: [
        {
            value: 'serialNumber',
            name: '全部'
        }
    ]
}
GoodsContentTable.propTypes = {
    dataTitle: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default GoodsContentTable;
