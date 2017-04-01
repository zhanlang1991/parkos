import axios from 'axios';
import Mock from 'mockjs'
import {memberCardData} from '../fakeData/memberCardData'
import { commodRequest } from './commodRequest'

//使用mock替换ajax请求返回值
Mock.mock('memberCardData.json', memberCardData)

//设置请求路径
var memberCardInfoAddress
//开发模式
var devModel = false;
if (devModel) {
    memberCardInfoAddress = 'memberCardData.json'
} else {
    memberCardInfoAddress = 'http://120.26.104.218:8085/kesb_req'
}

/*
功能代码:85103004
功能名称:ParkQueryRegionInfo
功能描述:查询停车场区域信息
*/
function parkQueryRegionInfo(reqData, custId, session) {
    //memberCardInfoAddress=''
    return axios({
            method: 'post',
            url: memberCardInfoAddress,
            data: JSON.stringify(commodRequest("85103004", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

/*
功能代码:82202073
功能名称:QueryFeesRoleInfo
功能描述:查询月卡车收费标准记录
*/
/*cust_id="8010000000006"
  car_type="1"
  region_code=""
  maxid="0"
  maxcount="100" */
function queryFeesRoleInfo(reqData, custId, session) {
    return axios({
            method: 'post',
            url: memberCardInfoAddress,
            data: JSON.stringify(commodRequest("82202073", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

/*
功能代码:82202070
功能名称:NewAddFeesRoleInfo
功能描述:新增月卡车收费标准记录
*/
function newAddFeesRoleInfo(reqData, custId, session) {
    return axios({
            method: 'post',
            url: memberCardInfoAddress,
            data: JSON.stringify(commodRequest("82202070", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

/*
功能代码:82202071
功能名称:ModifyFeesRoleInfo
功能描述:修改月卡车收费标准记录
*/
function modifyFeesRoleInfo(reqData, custId, session) {
    return axios({
            method: 'post',
            url: memberCardInfoAddress,
            data: JSON.stringify(commodRequest("82202071", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

/*
功能代码:82202072
功能名称:DeleteFeesRoleInfo
功能描述:删除月卡车收费标准记录
*/
function deleteFeesRoleInfo(reqData, custId, session) {
    return axios({
            method: 'post',
            url: memberCardInfoAddress,
            data: JSON.stringify(commodRequest("82202072", reqData, custId, session))//收费标准id
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

//以下为ajax方法
function getMemberCardInfo() {
    return axios.get(memberCardInfoAddress)
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

export {queryFeesRoleInfo, newAddFeesRoleInfo, modifyFeesRoleInfo, deleteFeesRoleInfo,parkQueryRegionInfo}
