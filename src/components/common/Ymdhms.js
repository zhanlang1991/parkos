import React, { PropTypes } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import moment from 'moment'
import pic1 from '../../images/calendar.png'


class Ymdhms extends React.Component {
	constructor(props) {
      super(props);

      this.handleApply = this.handleApply.bind(this);

      this.state = {
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        },
      };
    }

    handleApply(event, picker) {
      this.setState({
        startDate: picker.startDate,
        endDate: picker.endDate,
      });
    }

    render() {
      let start = this.state.endDate.format(this.props.start);
      let label = start;
	  let selectstyleYmdhms = {
		  inptstime: {
			  width: '225px',
			  borderRadius:'4px',
			  background: `url(${pic1}) no-repeat scroll 2% center`,
			  // /static/e66d0a26c66e011434ab92746fed51a9.png
			  textIndent: '26px'
		  }
	  }
      let locale = {
        format: this.props.sta2,
        separator: ' - ',
        applyLabel: '确定',
        cancelLabel: '取消',
        weekLabel: 'W',
        customRangeLabel: 'Custom Range',
        daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames:  ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        firstDay: moment.localeData().firstDayOfWeek(),
      };

      return (
        <div className="form-group">
          <div >
            <DatetimeRangePicker
			  singleDatePicker
              timePicker//显示时分秒
              timePicker24Hour//显示24小时或12小时
              showDropdowns
              timePickerSeconds
              locale={locale}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onApply={this.handleApply}
            >
              <div className="input-group" style={{width:'225px'}}>
                <input type="text" className="form-control" value={label} style={selectstyleYmdhms.inptstime}/>
              </div>
            </DatetimeRangePicker>
          </div>
        </div>
      );
    }
}

export default Ymdhms;
