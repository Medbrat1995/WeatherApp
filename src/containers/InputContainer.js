import {connect} from 'react-redux'
import Input from '../components/Input'
import {changeInput} from '../actions';
import {queryStringSelector} from '../selectors/input';

const mapStateToProps = (state) => ({
    string: queryStringSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    onChangeInput: (str) => dispatch(changeInput(str))
});

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);
export default InputContainer



