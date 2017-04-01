import React, {PropTypes} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import pic1 from '../../images/calendar.png'

class Yearstimes extends React.Component {

    constructor() {
        super();
        let dDate = new Date();
        this.state = {
            dCurYear: dDate.getFullYear(),
            dCurMonth: dDate.getMonth(),
            dCurDay: dDate.getDate(),
            dateStr: ""
        }
    }

    initInputTime() {
        let dDates = new Date();
        let yearslct = dDates.getFullYear();
        let monthslct = dDates.getMonth() + 1;
        let dayslct = dDates.getDate();
        $("#yearstimeclick").val(yearslct + '-' + monthslct + '-' + dayslct);
        this.setState({dateStr: $("#yearstimeclick").val()});
        $("#yearstimeclick").on("click", function(e) {
            $("#checkyeartime").show();
            $(document).one("click", function() {
                // console.log('hide');
                $("#checkyeartime").hide();
            });
            e.stopPropagation();
        });
        $(".timesdata").click(function() {

            let yearslcts = $("#yearsselect").val();
            let monthslcts = $("#monthsselect").val();
            let dayslcts = $("#daysselect").val();
            if (monthslcts > 0 && dayslcts > 0) {
                $("#yearstimeclick").val(yearslcts + '-' + monthslcts + '-' + dayslcts);
            } else if (dayslcts == 0 && monthslcts > 0) {
                $("#yearstimeclick").val(yearslcts + '-' + monthslcts);
            } else if (dayslcts == 0 && monthslcts == 0) {
                $("#yearstimeclick").val(yearslcts);
            }
            this.setState({dateStr: $("#yearstimeclick").val()});
            $("#checkyeartime").hide();

        }.bind(this));
        $("#checkyeartime").on("click", function(e) {
            e.stopPropagation();
        });
        this.yearSelect();
    }

    componentDidMount() {
        // console.log('didMount');
        this.initInputTime();
    }

    componentDidUpdate() {
        // console.log('didUpdate');
        $("#yearstimeclick").val(this.state.dateStr);
    }

    yearSelect() {
        var selectObj = document.getElementById("yearsselect");
        for (var i = this.state.dCurYear + 5; i > (this.state.dCurYear - 50); i--) {
            var yearItem = new Option(i + '年', i);
            selectObj.options.add(yearItem);
            if (this.state.dCurYear == i) {
                yearItem.selected = true;
            }
        }
        this.monthSelect();
    }

    monthSelect() {
        var selectObj = document.getElementById("monthsselect");
        selectObj.options.length = 0;
        selectObj.options.add(new Option("-月-", '0'));
        if (this.state.dCurYear > 0) {
            for (var i = 1; i <= 12; i++) {
                var monthItem = new Option(i + '月', i);
                selectObj.options.add(monthItem);
                if (this.state.dCurMonth == i - 1)
                    monthItem.selected = true;
                }
            }
        this.daySelect();
    }

    daySelect() {
        var selectObj = document.getElementById("daysselect");
        selectObj.options.length = 0;
        selectObj.options.add(new Option("-日-", '0'));
        if (this.state.dCurYear > 0 && this.state.dCurMonth > 0) {
            var dPrevDate = new Date(this.state.dCurYear, this.state.dCurMonth, 0);
            var daysInMonth = dPrevDate.getDate();
            for (var i = 1; i <= parseInt(daysInMonth); i++) {
                var dayItem = new Option(i + '日', i);
                selectObj.options.add(dayItem);
                if (this.state.dCurDay == i)
                    dayItem.selected = true;
                }
            }
    }

    yearChange() {
        var yearIndex = document.getElementById("yearsselect").selectedIndex;
        var yearValue = document.getElementById("yearsselect").options[yearIndex].value;
        this.setState({
            dCurYear: yearValue,
            dCurMonth: -1,
            dCurDay: -1
        }, function() {
            this.monthSelect();
        });
    }

    monthChange() {
        var yearIndex = document.getElementById("yearsselect").selectedIndex;
        var yearValue = document.getElementById("yearsselect").options[yearIndex].value;
        var monthIndex = document.getElementById("monthsselect").selectedIndex;
        var monthValue = document.getElementById("monthsselect").options[monthIndex].value;
        this.setState({
            dCurYear: yearValue,
            dCurMonth: monthValue,
            dCurDay: -1
        }, function() {
            this.daySelect();
        });
    }

    render() {
        let selectstyle = {
            seltype: {
                padding: '5px 0',
                display: 'none',
                width: '225px',
                textAlign: 'center',
                color: '#333',
                border: '1px solid #ccc',
                background: '#fff'
            },
            selbuts: {
                width: '90px',
                height: '30px',
                fontSize: '16px',
                lineHeight: '15px',
                marginTop: '5px'
            },
            inptstime: {
                width: '225px',
                background: `url(${pic1}) no-repeat scroll 2% center`,
                // /static/e66d0a26c66e011434ab92746fed51a9.png
                textIndent: '26px'
            }
        }
        return (
            <div style={selectstyle.divsLables}>
                <div>
                    <form>
                        <input type="text"  id="yearstimeclick" className="form-control" style={selectstyle.inptstime} value=""/>
                    </form>
                </div>
                <div id="checkyeartime" style={selectstyle.seltype}>
                    <form name="reg_testdate" style={selectstyle.selectstyle}>
                        <select id="yearsselect" name="YYYY" onChange={this.yearChange.bind(this)}></select>
                        <select id="monthsselect" name="MM" onChange={this.monthChange.bind(this)}></select>
                        <select id="daysselect" name="DD"></select>
                    </form>
                    <div>
                        <button className="btn btn-sm btn-success timesdata" style={selectstyle.selbuts} >确定</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Yearstimes;
