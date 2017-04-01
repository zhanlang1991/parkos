import axios from 'axios';
import { commodRequest } from './commodRequest'

/*
功能代码:85404001
功能名称:QueryDayParkSerial
功能描述:当日停车流水-交易流水
*/
function getQueryDayParkSerial(reqData, custId, session) {
    return axios({
            method: 'post',
            url: "http://120.26.104.218:8085/kesb_req",
            data: JSON.stringify(commodRequest("85404001", reqData, custId, session))
        })
		.then(function(res){
            let resData = res.data.ANSWERS[0];
            // console.log(resData);
            //返回值为0，请求成功,否则log端口号和返回的错误信息
            if (resData.ANS_MSG_HDR.MSG_CODE == '0') {
                return resData.ANS_COMM_DATA;
            }
            else {
                console.log('ERROR 85404001 ' + resData.ANS_MSG_HDR.MSG_TEXT);
            }
        })
        .catch(function(error) {
            alert(error);
        });
}


export { getQueryDayParkSerial }
