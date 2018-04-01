import {connect} from 'react-redux'
import Input from '../components/Input'
import {changeInput} from '../actions'


const mapStateToProps = (state) => ({
    str: state.input.str
});
const mapDispatchToProps = (dispatch) => {
    return{
    }
};

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);
export default InputContainer