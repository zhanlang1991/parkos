import axios from 'axios'
import Mock from 'mockjs'

import {tableAddTextBox} from '../fakeData/headParkSection'


Mock.mock('tableAddTextBox.json',tableAddTextBox)

var tableAddTextBoxaddress = 'tableAddTextBox.json'

function gettableAddTextBox(){
	return axios.get(tableAddTextBoxaddress).then((res)=>({
		data:res.data
	}))
	.catch(function(error){
		alert(error);
	});
}
export {
	gettableAddTextBox
}
