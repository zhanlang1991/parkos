import axios from 'axios';
import Mock from 'mockjs'
import {patternData} from '../fakeData/patternData'
import {commodRequest} from './commodRequest'

//使用mock替换ajax请求返回值
Mock.mock('patternData.json', patternData)

//设置请求路径
var mainPageAddress
var patternAddress = 'patternData.json'
//开发模式
var devModel = false;
if (devModel) {
    mainPageAddress = 'patternData.json'
} else {
    mainPageAddress = 'http://120.26.104.218:8085/kesb_req'
}

function getPatternInfo() {
    return axios.get(patternAddress)
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

/*
  功能代码:82202082
  功能名称:QueryEnterpriseByAccountId
  功能描述:根据客户号查询其下子运营商/停车场信息（展开运营商树）
*/
function queryEnterpriseByAccountId(reqData, custId, session) {
    return axios({
            method: 'post',
            url: mainPageAddress,
            data: JSON.stringify(commodRequest("82202082", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

/*
  功能代码:82101813
  功能名称:AcctQueryOperatorByName
  功能描述:根据名称查询企业操作员
*/
function acctQueryOperatorByName(reqData, custId, session) {
    return axios({
            method: 'post',
            url: mainPageAddress,
            data: JSON.stringify(commodRequest("82101813", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

/*
  功能代码:81303024
  功能名称:SysQueryRoleAuth
  功能描述:查询角色权限
*/
function sysQueryRoleAuth(reqData,custId, session) {
    return axios({
            method: 'post',
            url: mainPageAddress,
            data: JSON.stringify(commodRequest("81303024", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

/*
  功能代码:82101008
  功能名称:AcctQueryCustEnterpriseInfo
  功能描述:查询企业客户资料
*/
function acctQueryCustEnterpriseInfo(reqData,custId, session) {
    return axios({
            method: 'post',
            url: mainPageAddress,
            data: JSON.stringify(commodRequest("82101008", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

/*
  功能代码:85103028
  功能名称:QueryParkSeatInfoByID
  功能描述:查询停车场、运营商下属的所有的车位数信息
*/
function queryParkSeatInfoByID(reqData, custId, session) {
    return axios({
            method: 'post',
            url: mainPageAddress,
            data: JSON.stringify(commodRequest("85103028", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

/*
  功能代码:85404009
  功能名称:QueryTodayTradeReport
  功能描述:查询当日交易汇总		
*/
function queryTodayTradeReport(reqData, custId, session) {
    return axios({
            method: 'post',
            url: mainPageAddress,
            data: JSON.stringify(commodRequest("85404009", reqData, custId, session))
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

export {
    getPatternInfo,
    acctQueryOperatorByName,
    sysQueryRoleAuth,
    acctQueryCustEnterpriseInfo,
    queryParkSeatInfoByID,
    queryEnterpriseByAccountId,
    queryTodayTradeReport
}
