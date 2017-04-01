import React, {PropTypes} from 'react'
import DownBox from '../common/DownBox.js'
import Pagination from '../common/Pagination.js'
import $ from 'jquery'
import '../../styles/style.css'

class ContentTable2 extends React.Component {
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
                <td>{item.tradeTime}</td>
                <td>{item.tradeMoney}</td>
                <td>{item.factorage}</td>
                <td>{item.balance}</td>
                <td>{item.propertyType}</td>
                <td>{item.businessDigest}</td>
                <td>{item.tradeAccount}</td>
                <td>{item.tradeDetail}</td>
                <td>{item.tradeWay}</td>
            </tr>
        ))
        let rowsTitle = (
            <tr>
                <th >{this.props.dataTitle.tradeTime}</th>
                <th >{this.props.dataTitle.tradeMoney}</th>
                <th >{this.props.dataTitle.factorage}</th>
                <th >{this.props.dataTitle.balance}</th>
                <th >{this.props.dataTitle.propertyType}</th>
                <th >{this.props.dataTitle.businessDigest}</th>
                <th >{this.props.dataTitle.tradeAccount}</th>
                <th >{this.props.dataTitle.tradeDetail}</th>
                <th >{this.props.dataTitle.tradeWay}</th>
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
ContentTable2.defaultProps = {
    data: {
        totalNum: '100',
        details: [
            {
                id: '1',
                chepai: '123455',
                tingche: '14',
                chewei: '345',
                dingdan: '09876555',
                xiadan: '12344',
                ruchang: '12333445345',
                chuchang: '876544'
            }
        ]
    }
}

ContentTable2.propTypes = {
    data: PropTypes.object.isRequired
};
export default ContentTable2;
