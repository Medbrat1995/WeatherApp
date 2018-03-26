import {connect} from 'react-redux'
import CityList from '../components/CityList'
import {addCity} from '../actions';

const mapStateToProps = (state) => ({
    cities: state.page.cities
});

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCity: (city) => {
            dispatch(addCity(city))
        }
    }
};

const CityListContainer = connect(mapStateToProps, mapDispatchToProps)(CityList);
export default CityListContainer



