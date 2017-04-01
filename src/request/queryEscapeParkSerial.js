import axios from 'axios';
// import Mock from 'mockjs';
import { commodRequest } from './commodRequest'

//使用mock替换ajax请求返回值
// Mock.mock('acctCustLogin.json', acctCustLoginData)

//设置请求路径
var queryEscapeParkSerialAddress;
//开发模式
var devModel = false;
if (devModel) {
    queryEscapeParkSerialAddress = 'acctCustLogin.json'
} else {
    queryEscapeParkSerialAddress = 'http://120.26.104.218:8085/kesb_req'
}

/*
功能代码:85404003
功能名称:QueryAppointSeatInfoForBussiness
功能描述:逃逸流水-交易流水
*/
function queryEscapeParkSerial(reqData, custId, session) {
    // console.log("AcctCustLogin-82101003");
    return axios({
            method: 'post',
            url: queryEscapeParkSerialAddress,
            data: JSON.stringify(commodRequest("85404003", reqData, custId, session))
        })
        .then(function(res) {
            let resData = res.data.ANSWERS[0];
            //返回值为0，请求成功,否则log端口号和返回的错误信息
            if (resData.ANS_MSG_HDR.MSG_CODE == '0') {
                console.log(resData.ANS_COMM_DATA);
                return resData.ANS_COMM_DATA;
            } else {
                console.log('ERROR 85404003 ' + resData.ANS_MSG_HDR.MSG_TEXT);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export {
    queryEscapeParkSerial
}
