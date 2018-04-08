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
            console.log('onInputChange, current value is ' + e.target.value);
            dispatch(changeInput(e.target.value));
        },
        handleSubmit: (e) => {
            e.preventDefault();
            const city = store.getState().input.str;
            dispatch(fetchCity(city));
        }
    }
};

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);
export default InputContainer