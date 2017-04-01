import axios from 'axios';
import Mock from 'mockjs'

import {tableParks,
	goodsParks,
	tableParkingRecord,
	tableParkingSubscribe,
	tableParkingGoods,
	tableParkingBill,
	tableSystemPager,
	tableAddTextBox,
	tableEditorTextBox,
	accountParks,genderParks} from '../fakeData/data-park'
import { parkHealthData ,parkPortInfo , parkInfo  } from '../fakeData/data'


//使用mock替换ajax请求返回值
Mock.mock('tableParks.json', tableParks)
Mock.mock('goodsParks.json', goodsParks)
Mock.mock('tableParkingRecord.json', tableParkingRecord)
Mock.mock('tableParkingSubscribe.json', tableParkingSubscribe)
Mock.mock('tableParkingGoods.json', tableParkingGoods)
Mock.mock('tableParkingBill.json', tableParkingBill)
Mock.mock('tableSystemPager.json', tableSystemPager)
//使用mock替换ajax请求返回值
Mock.mock('parkPortInfo.json',parkPortInfo)
Mock.mock('parkInfo.json',parkInfo)
Mock.mock('getParkHealth.json',parkHealthData)
Mock.mock('tableAddTextBox.json',tableAddTextBox)
Mock.mock('tableEditorTextBox.json',tableEditorTextBox)
Mock.mock('accountParks.json',accountParks)
Mock.mock('genderParks.json',genderParks)


var tableParksAddress = 'tableParks.json'
var goodsParksAddress = 'goodsParks.json'
var tableParkingRecordAddress = 'tableParkingRecord.json'
var tableParkingSubscribeAddress = 'tableParkingSubscribe.json'
var tableParkingGoodsAddress = 'tableParkingGoods.json'
var tableParkingBillAddress = 'tableParkingBill.json'
var tableSystemPagerAddress = 'tableSystemPager.json'
var parkPortInfoAddress = 'parkPortInfo.json'
var parkInfoAddress = 'parkInfo.json'
var getParkHealthAddress = 'getParkHealth.json'
var getTableAddTextBoxAddress = 'tableAddTextBox.json'
var getTableEditorTextBoxBoxAddress = 'tableEditorTextBox.json'
var getAccountParksAddress = 'accountParks.json'
var getTableEditorTextBoxBoxAddress = 'tableEditorTextBox.json'
var getGenderParksAddress = 'genderParks.json'

//demo
var shift = false;
if(shift){
	//设置路径公共部分
	var commonPath = 'http://120.26.104.218:8085/kesb_req'
	//设置真实路径demo
	parkInfoAddress = `${commonPath}/truePath`
}

//获取停车场信息
function getParkInfo() {
    return axios.get(parkInfoAddress)
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}
//获取停车场信息
function getGoods() {
    return axios.get(goodsParksAddress)
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}
//获取停车场信息
function getTableParkingRecord() {
    return axios.get(tableParkingRecordAddress)
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}
//获取停车场信息
function gettableParkingSubscribe() {
    return axios.get(tableParkingSubscribeAddress)
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}
//获取停车场信息
function gettableParkingGoods() {
    return axios.get(tableParkingGoodsAddress)
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}
//获取停车场信息
function gettableParkingBill() {
    return axios.get(tableParkingBillAddress)
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}
//获取停车场信息
function getTableSystemPager() {
    return axios.get(tableSystemPagerAddress)
        .then((res) => ({
            data: res.data
        }))
        .catch(function(error) {
            alert(error);
        });
}

//获取某一车场信息
function getParkPort(){
   return axios.get(parkPortInfoAddress)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}
//获取车辆信息
function getTableParks(){
   return axios.get(tableParksAddress)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}
//获取车场健康值
function getParkHealth(){
   return axios.get(getParkHealthAddress)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}
function getTableAddTextBox(){
   return axios.get(getTableAddTextBoxAddress)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}
function getTableEditorTextBox(){
   return axios.get(getTableEditorTextBoxBoxAddress)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}
function getAccountParks(){
   return axios.get(getAccountParksAddress)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}
function getGenderParks(){
   return axios.get(getGenderParksAddress)
    .then((res) => (
    {data:res.data}
  ))
    .catch(function (error) {
      alert(error);
    });
}


export {
  getGoods,
  getParkInfo,
	getTableParks,
  getTableParkingRecord,
	gettableParkingSubscribe,
	gettableParkingGoods,
	gettableParkingBill,
	getTableSystemPager,
	getParkPort ,
	getParkHealth,
	getTableAddTextBox,
	getTableEditorTextBox,
	getAccountParks,
	getGenderParks
}
