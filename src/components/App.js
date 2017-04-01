import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/index';
// import {  saveUserLogin ,  saveUserRole , savedParks } from '../actions'


class App extends React.Component {


	render () {
		let { saveUserLogin ,savedLoginAcount , saveUserRole ,savedUserRole,savedParks, saveParks } = this.props;
		return (
			<div>
				  { React.cloneElement(this.props.children, { saveUserLogin ,savedLoginAcount, saveUserRole ,savedUserRole,savedParks, saveParks}) }
			</div>
		)
	}
}

//返回需要传递给子组件的State
function mapStateToProps(state) {
    // console.log(state);
    return {
		savedUserRole:state.saveUserRole,
		savedLoginAcount: state.saveLogin,
		savedParks:state.saveParks
	}
}

//返回dispatch
function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


export default  connect(mapStateToProps, mapDispachToProps)(App);
