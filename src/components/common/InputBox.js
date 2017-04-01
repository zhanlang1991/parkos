import React, {PropTypes} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class InputBox extends React.Component {
    getStyles() {
        return {
            inputStyle: {
				width:'100%',
            },
        }
    }
    render() {
        let styles = this.getStyles()
        return (<input className='form-control' disabled={this.props.disabled} type='text' style={styles.inputStyle} placeholder={this.props.title}/>)
    }
}
InputBox.defaultProps = {
    data: [
        {
            value: 'park0',
            name: '停车场1'
        }
    ]
}
InputBox.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};
export default InputBox;
