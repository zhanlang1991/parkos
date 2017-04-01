import React, {PropTypes} from 'react'
import {acctCustLogin} from '../../request/acctCustLogin'
import {browserHistory} from 'react-router'

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogin: false
        }
    }
    handleClick() {
        // console.log(this.props);
        var reqData = {
            "login_from_type": "51",
            "usr_code": "flyadmin",
            "trade_pwd": "766c32f42272064af1740dd974e3e47e"
        };
        acctCustLogin(reqData, "0", "").then((res) => {
            this.props.saveUserLogin(res[0])
            browserHistory.push('/home')
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>登录</button>
            </div>
        )
    }
}

export default LoginPage;
