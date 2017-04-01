
//demo 数据一般为JSON格式
var parks=
{
    '运营商A': [{
        '运营商B': [{
                'parkId': '1',
                'parkName': '停车场1'
            },
            {
                'parkId': '2',
                'parkName': '停车场2'
            }
        ]
    }, {
        '运营商C': [{
                'parkId': '3',
                'parkName': '停车场3'
            },
            {
                'parkId': '4',
                'parkName': '停车场4'
            }
        ]
    }, {
        'parkId': '5',
        'parkName': '停车场5'
    }]
}
var parkPortInfo={
    "result": "success",
    "parkArray": [{
        "parkType": "办公",
        "chargePileNum": "0",
        "fees": "",
        "parkSpaceDown": "",
        "parkName": "万通新世界",
        "parkSpaceEmpty": 362,
        "parkSpaceUp": 0,
        "outNum": "2",
        "parkSpace": 461,
        "inNum": "1",
        "position": "北京市阜城门桥西北",
        "parkId": "3"
    }],
    "parkCount": "1",
    "appHead": {
        "totalNum": "1"
    },
    "parkEmptySpace": "362",
    "parkTotalSpace": "461",
    "retCode": "000000"
}

var parkInfo={
    "result": "success",
    "total": 1,
    "data": [{
        "cartype": "00",
        "inPlateColor": "blue",
        "parkName": "北京科技会展中心停车场",
        "outtime": "2017-02-28 10:03:51",
        "amt": null,
        "carnum": "冀EQJ679",
        "parkid": "1",
        "entertime": "2017-02-28 09:16:43",
        "actamt": 8,
        "staytime": "",
        "tollinfoid": "ff8080815a5a35c2015a8275a0be339b",
        "carstatus": null,
        "updatetime": "2017-02-28 10:03:51",
        "gateway": null,
        "inOutFlag": "out",
        "username": ""
    },
    {
      "cartype": "02",
      "inPlateColor": "blue",
      "parkName": "北京科技会展中心停车场",
      "outtime": "",
      "amt": null,
      "carnum": "京Q183B1",
      "parkid": "1",
      "entertime": "2017-02-28 17:15:47",
      "actamt": null,
      "staytime": "",
      "tollinfoid": "ff8080815a5a35c2015a8401125a49dc",
      "carstatus": null,
      "updatetime": "2017-02-28 17:15:47",
      "gateway": null,
      "inOutFlag": "in",
      "username": ""
  },
     {
        "cartype": "05",
        "inPlateColor": "black",
        "parkName": "北京科技会展中心停车场",
        "outtime": "2017-02-28 15:20:50",
        "amt": null,
        "carnum": "京PQK097",
        "parkid": "1",
        "entertime": "2017-02-28 12:15:43",
        "actamt": 2,
        "staytime": "",
        "tollinfoid": "ff8080815a5a35c2015a8397d6954400",
        "carstatus": null,
        "updatetime": "2017-02-28 15:20:50",
        "gateway": null,
        "inOutFlag": "out",
        "username": ""
    }],
    "carTypeMap": {
        "00": "临停车辆",
        "02": "免费车辆",
        "04": "白名单",
        "05": "套餐车辆"
    },
    "message": ""
}

var parkHealthData = {
    "data": {
        "result": "success",
        "data": {
            "carnoRecognizeScore": "0.0",
            "sysScore": "0.0",
            "disconnectionRateScore": "0.00",
            "unusualOperationScore": "0.0",
            "healthScore": "0.0",
            "incomeGrowthRateScore": "7.01",
            "mngScore": "0.0",
            "bizScore": "7.01"
        }
    },
    "retCode": "000000",
    "retMsg": "查询成功"
}

export { parks , parkPortInfo , parkInfo ,parkHealthData }
