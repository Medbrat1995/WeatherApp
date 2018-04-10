import {connect} from 'react-redux'
import Input from '../components/Input'
import {changeInput, fetchCity} from '../actions'


const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (city) => dispatch(fetchCity(city))
});

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);
export default InputContainer