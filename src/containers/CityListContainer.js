import {connect} from 'react-redux'
import CityList from '../components/CityList'
import {addCity, deleteCity} from '../actions';

const mapStateToProps = (state) => ({
    cities: state.page.cities
});

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCity: (city) => {
            dispatch(addCity(city))
        },
        onDeleteCity: (id) => {
            dispatch(deleteCity(id))
        }
    }
};

const CityListContainer = connect(mapStateToProps, mapDispatchToProps)(CityList);
export default CityListContainer



