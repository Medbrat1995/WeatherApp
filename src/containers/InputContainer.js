import {connect} from 'react-redux'
import Input from '../components/Input'
import {changeInput, fetchCity} from '../actions'


const mapStateToProps = (state) => ({
    str: state.input.str
});
const mapDispatchToProps = (dispatch) => {
    return{
        onInputChange: (e) => {
            e.preventDefault();
            dispatch(changeInput(e.target.value));
        },
        onSubmitClicked: (e) => {
            e.preventDefault();
            const city = store.getState().input.str;
            dispatch(fetchCity(city));
        }
    }
};

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);
export default InputContainer