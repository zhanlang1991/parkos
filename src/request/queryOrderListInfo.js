import axios from 'axios';
// import Mock from 'mockjs';
import { commodRequest } from './commodRequest'

//使用mock替换ajax请求返回值
// Mock.mock('acctCustLogin.json', acctCustLoginData)

//设置请求路径
var queryOrderListInfoAddress;
//开发模式
var devModel = false;
if (devModel) {
    queryOrderListInfoAddress = 'acctCustLogin.json'
} else {
    queryOrderListInfoAddress = 'http://120.26.104.218:8085/kesb_req'
}

/*
功能代码:83201005
功能名称:QueryOrderListInfo
功能描述:通过客户号查询商品交易订单信息
*/
function queryOrderListInfo(reqData, custId, session) {
    // console.log("AcctCustLogin-82101003");
    return axios({
            method: 'post',
            url: queryOrderListInfoAddress,
            data: JSON.stringify(commodRequest("83201005", reqData, custId, session))
        })
        .then(function(res) {
            let resData = res.data.ANSWERS[0];
            //返回值为0，请求成功,否则log端口号和返回的错误信息
            if (resData.ANS_MSG_HDR.MSG_CODE == '0') {
                console.log(resData.ANS_COMM_DATA);
                return resData.ANS_COMM_DATA;
            } else {
                console.log('ERROR 83201005 ' + resData.ANS_MSG_HDR.MSG_TEXT);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export {
    queryOrderListInfo
}
