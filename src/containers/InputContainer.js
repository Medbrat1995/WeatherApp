import {connect} from 'react-redux'
import Input from '../components/Input'
import {changeInput} from '../actions';

const mapStateToProps = (state) => ({
    str: state.input.inputString
});

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput: (string) => {
            dispatch(changeInput(string))
        }
    }
};

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);
export default InputContainer