import React, {PropTypes} from 'react'
import DownBox from '../common/DownBox.js'
import Pagination from '../common/Pagination.js'
import PaySearchDetails from './PaySearchDetails.js'
import $ from 'jquery'

class TableHeader extends React.Component {
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
        let rows = this.state.showArr.map((item, i) => (
            <tr>
                <td>{item.carNum}</td>
                <td>{item.carOwner}</td>
                <td>{item.parkName}</td>
                <td>{item.payMoney}</td>
                <td>{item.happenTime}</td>
                <td>{item.alterType}</td>
                <td>{item.initialExpirationTime}</td>
                <td>{item.modifiedExpirationTime}</td>
                <td>{item.monthCardSource}</td>
                <td style={styles.tableStyle} data-toggle='modal'><PaySearchDetails/></td>
            </tr>
        ))
        let rowsTitle = (
            <tr>
                <th >{this.props.dataTitle.carNum}</th>
                <th >{this.props.dataTitle.carOwner}</th>
                <th >{this.props.dataTitle.parkName}</th>
                <th >{this.props.dataTitle.payMoney}</th>
                <th >{this.props.dataTitle.happenTime}</th>
                <th >{this.props.dataTitle.alterType}</th>
                <th >{this.props.dataTitle.initialExpirationTime}</th>
                <th >{this.props.dataTitle.modifiedExpirationTime}</th>
                <th >{this.props.dataTitle.monthCardSource}</th>
                <th >{this.props.dataTitle.detail}</th>
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
                            ? <DownBox transmitValue={this.changeShowNum.bind(this)} data={[
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
TableHeader.defaultProps = {
    data: {
        totalNum: '100',
        details: [
            {
                carNum: '鄂AOUF36',
                carOwner: 'C187刘丹',
                parkName: '武汉三金华都运营商金华都运营商',
                payMoney: '960.00',
                happenTime: '2017-02-28 17:08:02',
                alterType: '交费充值',
                initialExpirationTime: '2017-03-14',
                modifiedExpirationTime: '2018-03-14',
                monthCardSource: '平台',
                detail: ''
            }
        ]
    }
}

TableHeader.propTypes = {
    data: PropTypes.object.isRequired
};
export default TableHeader;
