import axios from 'axios';
import Mock from 'mockjs'
import {propertyManagementData} from '../fakeData/operationManagementData'

//使用mock替换ajax请求返回值
Mock.mock('propertyManagementData.json', propertyManagementData)

//设置请求路径
var PMInfoAddress
//开发模式
var devModel = true;
if (devModel) {
    PMInfoAddress = 'propertyManagementData.json'
} else {
    PMInfoAddress = 'http://120.26.104.218:8085/kesb_req'
}


//以下为ajax方法
function getPropertyManagementInfo() {
    return axios.get(PMInfoAddress)
        .then((res) => ({
            propertyManagementData: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

export {
    getPropertyManagementInfo
}
