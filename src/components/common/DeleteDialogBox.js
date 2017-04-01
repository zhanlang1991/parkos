import React, {PropTypes} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {deleteFeesRoleInfo} from '../../request/deleteRequest'

class DeleteDialogBox extends React.Component {
    getStyles() {
        return {
            upperStyle: {
                width: '100%',
                height: '30px',
                backgroundColor: 'rgb(239, 239, 236)',
                textAlign: 'left',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px'
            },
            upperTextStyle: {
                color: 'rgb(83, 83, 83)',
                fontSize: '14px',
                lineHeight: '30px',
                padding: '0 10px',
                height: '28px'
            },
            clickOptions: {
                width: '75px',
                borderRadius: '4px',
                color: '#rgb(41, 41, 41)',
                backgroundColor: '#FFF',
                borderColor: 'rgb(225, 225, 221)',
                border: '1px solid rgb(147, 141, 141)',
                background: '-webkit-gradient(linear, left top, left bottom, from(rgb(245, 240, 237)), to(rgb(200, 197, 196)))',
                background: '-moz-linear-gradient(top,  rgb(245, 240, 237),  rgb(200, 197, 196))',
                margin: '0 10px',
                fontSize: '12px',
                padding: '5px 0',
                height: '28px'
            },
            buttonBackground: {
                height: '43px',
                backgroundColor: 'rgb(239, 239, 236)',
                paddingTop: '8px',
                textAlign: 'center',
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px'
            },
            textBoxContent: {
                width: '100%',
                textAlign: 'center',
                padding: '0 0',
                fontSize: '14px',
                color: '#626262'
            },
            textBoxContentMiddle: {
                width: '100%',
                textAlign: 'justify',
                fontSize: '14px',
                lineHeight: '200%',
                color: 'rgb(77, 75, 75)',
                height: '80px'
            },
            textBoxContentSingle: {
                display: '-moz-inline-box',
                display: 'inline-block',
                width: '100%',
                textAlign: 'center',
                float: 'left',
                paddingRight: '5px',
                marginTop: '30px',
                fontSize: '14px'
            }
        }
    }

    handleDeleteSelect(){
      if(this.props.deleteTag=='feesRole'){
        this.deleteFeesRoleInfo();
      }
    }

    render() {
        let styles = this.getStyles()

        return (
            <div>
                <span class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal3'>
                    删除
                </span>
                <div className='modal fade' id='myModal3' tabindex='-1' role='dialog' aria-labelledby='myModalLabel3' aria-hidden='false'  data-backdrop="static" style={styles.textBoxContent}>
                    <div className='modal-dialog' style={{
                        marginTop: '200px'
                    }}>
                        <div className='modal-content' style={{
                            width: '65%',
                            margin: 'auto'
                        }}>
                            <div className='modal-content' style={styles.textBoxContent}>
                                <div style={styles.upperStyle}>
                                    <span style={styles.upperTextStyle}>提示</span>
                                </div>
                                <div style={styles.textBoxContentMiddle}>
                                    <div>
                                        <span style={styles.textBoxContentSingle}>
                                            <img src={require('../../images/graycar.png')} style={{
                                                width: '10%'
                                            }}/>
                                            <span style={{
                                                color: 'rgb(83, 83, 83)'
                                            }}>{this.props.deleteText1}{this.props.data}{this.props.deleteText2}</span>
                                        </span>
                                    </div>
                                </div>
                                <div style={styles.buttonBackground}>
                                    <button type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal' onClick={this.handleDeleteSelect.bind(this)}>确定</button>
                                    <button type='button' style={styles.clickOptions} className='btn btn-default' data-dismiss='modal'>取消</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
DeleteDialogBox.defaultProps = {
    data: [
        {
            value: 'park0',
            name: '停车场1'
        }
    ]
}
DeleteDialogBox.propTypes = {
    data: PropTypes.array.isRequired
};
export default DeleteDialogBox;
