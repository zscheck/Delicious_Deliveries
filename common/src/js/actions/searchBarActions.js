import Axios from 'axios';

export const updateSearchLocation = input => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_SEARCH_LOCATION',
        });
        Axios.get('https://zs-delicious-deliveries.herokuapp.com/api/Restaurants')
        .then(res => {
            dispatch({
                type: 'UPDATE_SEARCH_LOCATION_SUCCESS',
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'UPDATE_SEARCH_LOCATION_FAIL',
                payload: err
            })
        })
    }
}

export function captureLocation(location) {
    return {
        type: 'CAPTURE_LOCATION',
        payload: location
    };
}
