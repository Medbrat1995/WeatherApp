import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Input from '../components/Input'

const mapStateToProps = (state) => ({
	string: state.input.queryString
})

const mapDispatchToProps = (dispatch) => {
	return{
		onChangeInput: (str) =>{
			dispatch(ChangeInput(str))
		}
	}
}

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input)
export default InputContainer



