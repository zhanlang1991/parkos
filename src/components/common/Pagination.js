import React, { PropTypes } from 'react'

import $ from 'jquery'

class Pagination extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentPage:0
		}
	}
componentWillReceiveProps(nextProps){
	if(this.props.itemsNum !== nextProps.itemsNum){
		this.setState({
			currentPage:0
		})
		$('.indexItem').removeClass('activeItem')
		$('.indexItem').eq(0).addClass('activeItem')
	}
}
handlePage(index=0){
	this.setState({
		currentPage:index
	})
	$('.indexItem').removeClass('activeItem')
	$('.indexItem').eq(index%5).addClass('activeItem')
	this.props.myMapTable(index)
}

	render () {
		let styles = {
			li:{
				display:'inline-block',
				textAlign:'center',
				border:'1px solid #ddd',
				cursor:'pointer',
				padding:'6px 14px'
			},
			div:{
				display:'inline-block'
			},
			ul:{
				display:'inline-block'
			}
		}
		let indexArray = []
		let indexNum = Math.ceil(this.props.totalNum / this.props.itemsNum)
		if(indexNum <= 5){
			for(let i = 0 ; i < indexNum ; i++){
				indexArray = indexArray.concat([i+1])
			}
		}else{
				for(let i = (parseInt(this.state.currentPage/5))*5 ; i < (parseInt(this.state.currentPage/5)+1)*5 && i < indexNum ; i++){
					indexArray = indexArray.concat([i+1])
				}
			}

		let myIndex = indexArray.map((item,i) =>
			(<li className='indexItem' style={styles.li} key={i} onClick={this.handlePage.bind(this,item-1)}>{item}</li>)
		)
		let firstPage = <li style={styles.li} onClick={this.handlePage.bind(this,0)}>首页</li>
		let prePage = <li style={styles.li} onClick={this.handlePage.bind(this,this.state.currentPage-1)}>{'<<'}</li>
		let nextPage = <li style={styles.li} onClick={this.handlePage.bind(this,this.state.currentPage+1)}>{'>>'}</li>
		let lastPage = <li style={styles.li} onClick={this.handlePage.bind(this,Math.ceil(indexNum)-1)}>末页</li>
		return(
			<div style={styles.div}>
				<ul className='pagItem' style={styles.ul}>

					{this.state.currentPage !== 0 && Math.ceil(indexNum) > 5	 ? firstPage : ''}
					{this.state.currentPage !== 0 && Math.ceil(indexNum) > 5	 ? prePage : ''}


					{myIndex}


					{this.state.currentPage !== Math.ceil(indexNum)-1 && Math.ceil(indexNum) > 5	 ? nextPage : ''}
					{this.state.currentPage !== Math.ceil(indexNum)-1 && Math.ceil(indexNum) > 5	 ? lastPage : ''}
				</ul>
			</div>
		)
	}
}

Pagination.defaultProps={
	totalNum:0,
  itemsNum:20
}
Pagination.propTypes = {
  totalNum: PropTypes.number.isRequired,
  itemsNum: PropTypes.number.isRequired
};

export default Pagination;
