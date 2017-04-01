import axios from 'axios';
// import Mock from 'mockjs';
import { commodRequest } from './commodRequest'

// import {
    // acctQueryOperatorByNameData
// } from '../fakeData/acctQueryOperatorByNameData'

//使用mock替换ajax请求返回值
// Mock.mock('acctQueryOperatorByName.json', acctQueryOperatorByNameData)

//设置请求路径
var acctQueryOperatorByNameAddress;
//开发模式
var devModel = false;
if (devModel) {
    acctQueryOperatorByNameAddress = 'acctQueryOperatorByName.json'
} else {
    acctQueryOperatorByNameAddress = 'http://120.26.104.218:8085/kesb_req'
}

/*
功能代码:82101813
功能名称:AcctQueryOperatorByName
功能描述:根据名称查询企业操作员
*/
function acctQueryOperatorByName(reqData, custId, session) {
    // console.log("AcctQueryOperatorByName-82101813");
    return axios({
            method: 'post',
            url: acctQueryOperatorByNameAddress,
            data: JSON.stringify(commodRequest("82101813", reqData, custId, session))
        })
        .then(function(res){
            let resData = res.data.ANSWERS[0];
            // console.log(resData);
            //返回值为0，请求成功,否则log端口号和返回的错误信息
            if (resData.ANS_MSG_HDR.MSG_CODE == '0') {
                return resData.ANS_COMM_DATA;
            }
            else {
                console.log('ERROR 82101813 ' + resData.ANS_MSG_HDR.MSG_TEXT);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export {
    acctQueryOperatorByName
}
