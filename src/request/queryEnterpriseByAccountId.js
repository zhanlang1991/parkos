import axios from 'axios';
// import Mock from 'mockjs';
import {
    commodRequest
} from './commodRequest'

//使用mock替换ajax请求返回值
// Mock.mock('acctCustLogin.json', acctCustLoginData)

//设置请求路径
var queryEnterpriseByAccountIdAddress;
//开发模式
var devModel = false;
if (devModel) {
    queryEnterpriseByAccountIdAddress = 'acctCustLogin.json'
} else {
    queryEnterpriseByAccountIdAddress = 'http://120.26.104.218:8085/kesb_req'
}

/*
功能代码:82202082
功能名称:queryEnterpriseByAccountId
功能描述:根据客户号查询其下子运营商/停车场信息（展开运营商树）
*/
function queryEnterpriseByAccountId(reqData, custId, session) {
    return axios({
            method: 'post',
            url: queryEnterpriseByAccountIdAddress,
            data: JSON.stringify(commodRequest("82202082", reqData, custId, session))
        })
        .then(function(res) {
            let resData = res.data.ANSWERS[0];
            //返回值为0，请求成功,否则log端口号和返回的错误信息
            if (resData.ANS_MSG_HDR.MSG_CODE == '0') {
                // console.log(resData.ANS_COMM_DATA);
                return resData.ANS_COMM_DATA;
            } else {
                console.log('ERROR 82202082 ' + resData.ANS_MSG_HDR.MSG_TEXT);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export {
    queryEnterpriseByAccountId
}
