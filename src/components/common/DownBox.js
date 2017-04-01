import React, {PropTypes} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class DownBox extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }


    //点击选项执行方法
    handleChange(event) {
        this.props.transmitValue(event.target.value)
        console.log(event.target.value)
    }
    render() {
        //下拉框内选项
        let options = this.props.data.map((item, i) => <option value={item.value} key={i}>{item.name}</option>)
        return (
          <div>
              <select className='form-control' disabled={this.props.disabled} onChange={this.handleChange.bind(this)}>
                  {options}
              </select>
          </div>
        )
    }
}

DownBox.defaultProps = {
    data: [
      {
          value: 'serialNumber',
          name: '小型车'
      }, {
          value: 'serialNumber',
          name: '中型车'
      }, {
          value: 'serialNumber',
          name: '大型车'
      }, {
          value: 'serialNumber',
          name: '电动车'
      }
    ]
}
DownBox.propTypes = {
    data: PropTypes.array.isRequired
};

export default DownBox;
