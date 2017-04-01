/*
功能代码:-
功能名称:业务请求生成处理
功能描述:追加公共参数，生成业务请求
*/
function commodRequest(serviceId, servicePrarm, custId, session) {
	var commodPrarm = {
        "g_sysid": "8",
        "g_custsession": session,
        "g_menuid": "0",
        "g_funcid": serviceId,
        "g_srcnodeid": "01",
        "g_dstnodeid": "01",
        "g_custid": custId,
        "g_custpwd": "1",
        "g_userway": "1",
        "g_stationaddr": "1"
    };
    for (var prarm in servicePrarm) {
        commodPrarm[prarm] = servicePrarm[prarm];
    }
    var requestJson = {
        "REQUESTS": [{
            "REQ_MSG_HDR": {
                "SERVICE_ID": serviceId
            },
            "REQ_COMM_DATA": commodPrarm
        }]
    };
	return requestJson;
}

export {
    commodRequest
}
