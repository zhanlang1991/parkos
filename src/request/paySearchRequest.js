import axios from 'axios';
import Mock from 'mockjs'
import {paySearchData} from '../fakeData/paySearchData'
import {commodRequest} from './commodRequest'

//使用mock替换ajax请求返回值
Mock.mock('paySearchData.json', paySearchData)

//设置请求路径
var PSInfoAddress
//开发模式
var devModel = false;
if (devModel) {
    PSInfoAddress = 'paySearchData.json'
} else {
    PSInfoAddress = 'http://120.26.104.218:8085/kesb_req'
}

/*
功能代码:82202121
功能名称:queryCarMembermountInfo
功能描述:查询月卡会员变更记录
*/
function queryCarMembermountInfo(reqData, custId, session) {
    return axios({
            method: 'post',
            url: PSInfoAddress,
            data: JSON.stringify(commodRequest("82202121", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

// //以下为ajax方法
// function getPaySearchInfo() {
//     return axios.get(PSInfoAddress)
//         .then((res) => ({
//             data: res.data
//         }))
//         .catch(function(error) {
//             alert(error);
//         });
// }


export {queryCarMembermountInfo}
