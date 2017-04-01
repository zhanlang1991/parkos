import axios from 'axios';
// import Mock from 'mockjs';
import { commodRequest } from './commodRequest'

//使用mock替换ajax请求返回值
// Mock.mock('acctCustLogin.json', acctCustLoginData)

//设置请求路径
var acctSetCustPwdAddress;
//开发模式
var devModel = false;
if (devModel) {
    acctSetCustPwdAddress = 'acctCustLogin.json'
} else {
    acctSetCustPwdAddress = 'http://120.26.104.218:8085/kesb_req'
}

/*
功能代码:82101005
功能名称:AcctSetCustPwd
功能描述:修改客户密码
*/
function acctSetCustPwd(reqData, custId, session) {
    // console.log("AcctCustLogin-82101003");
    return axios({
            method: 'post',
            url: acctSetCustPwdAddress,
            data: JSON.stringify(commodRequest("82101005", reqData, custId, session))
        })
        .then(function(res) {
            let resData = res.data.ANSWERS[0];
            //返回值为0，请求成功,否则log端口号和返回的错误信息
            if (resData.ANS_MSG_HDR.MSG_CODE == '0') {
                console.log(resData.ANS_COMM_DATA);
                return resData.ANS_COMM_DATA;
            } else {
                console.log('ERROR 82101005 ' + resData.ANS_MSG_HDR.MSG_TEXT);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export {
    acctSetCustPwd
}
