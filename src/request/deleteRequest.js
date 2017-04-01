import axios from 'axios';
// import Mock from 'mockjs'
import { commodRequest } from './commodRequest'

//设置请求路径
var deleteInfoAddress= 'http://120.26.104.218:8085/kesb_req'

/*
功能代码:82202072
功能名称:DeleteFeesRoleInfo
功能描述:删除月卡车收费标准记录
*/
function deleteFeesRoleInfo(reqData, custId, session) {
    return axios({
            method: 'post',
            url: deleteInfoAddress,
            data: JSON.stringify(commodRequest("82202072", reqData, custId, session))//收费标准id
        })
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}


export {deleteFeesRoleInfo}
