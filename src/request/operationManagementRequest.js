import axios from 'axios';
import Mock from 'mockjs'
import {operationManagementData} from '../fakeData/operationManagementData'
import {commodRequest} from './commodRequest'

//使用mock替换ajax请求返回值
Mock.mock('operationManagementData.json', operationManagementData)

//开发模式
var devModel = false;
var OMInfoAddress

if (devModel) {
    OMInfoAddress = 'operationManagementData.json'
} else {
    OMInfoAddress = 'http://120.26.104.218:8085/kesb_req'
}

/*
  功能代码:82202101
  功能名称:QueryAccountCapitalSerial
  功能描述:查询客户资产流水信息
*/
function queryAccountCapitalSerial(reqData, custId, session) {
    return axios({
            method: 'post',
            url: OMInfoAddress,
            data: JSON.stringify(commodRequest("82202082", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

function getOperationManagementInfo() {
    return axios.get(OMInfoAddress)
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}


export {getOperationManagementInfo,queryAccountCapitalSerial}
