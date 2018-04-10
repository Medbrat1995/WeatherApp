import {connect} from 'react-redux'
import Input from '../components/Input'
import {changeInput, fetchCity} from '../actions'


const mapStateToProps = (state) => ({
    str: state.input.str
});
const mapDispatchToProps = (dispatch) => {
    return{
        handleChange: (e) => {
            e.preventDefault();
            console.log('onInputChange, current value is ' + getState().input.str);
            dispatch(changeInput(getState().input.str));
        },
        handleSubmit: (e) => {
            e.preventDefault();
            dispatch(fetchCity(getState().input.str));
        }
    }
};

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);
export default InputContainer