import axios from 'axios';

export function foodToggle(value) {
    return {
        type: 'FOOD_TOGGLE',
        payload: value
    };
}

export function updateRestaurantName(name) {
    return {
        type: 'ADD_RESTAURANT_NAME',
        payload: name
    };
}

export function updateAddress1(address1) {
    return {
        type: 'ADD_ADDRESS1',
        payload: address1
    };
}

export function updateAddress2(address2) {
    return {
        type: 'ADD_ADDRESS2',
        payload: address2
    };
}

export function updateCity(city) {
    return {
        type: 'ADD_CITY',
        payload: city
    };
}

export function updateStateInput(state) {
    return {
        type: 'ADD_STATE',
        payload: state
    };
}

export function updateZipCode(zip) {
    return {
        type: 'ADD_ZIP',
        payload: zip
    };
}

export function updateImageInput(image) {
    return {
        type: 'ADD_IMAGE',
        payload: image
    };
}

export function updatePhoneNumber(phone_number) {
    return {
        type: 'ADD_PHONE_NUMBER',
        payload: phone_number
    };
}

export function addNewRestaurant(food_type, name, address1, address2, city, state, zip, image, phone_number, currentOwnerId) {
    console.log({ food_type, name, address1, address2, city, state, zip, image, phone_number, currentOwnerId });
    return (dispatch) => {
        axios.post('https://zs-delicious-deliveries.herokuapp.com/api/Owners/' + currentOwnerId + '/restaurants', { food_type, name, address1, address2, city, state, zip, image, phone_number })
            .then(results => {
                dispatch({
                    type: 'ADD_NEW_RESTAURANT',
                    payload: results.data
                })
                console.log(results.data)
                return results.data.id;
            })
            .then(product => {
                axios.post(`https://zs-delicious-deliveries.herokuapp.com/api/Restaurants/${product}/menus`)
                    .then(product => {
                        console.log('Added menuId to Restaurant', product);
                    })
            })
            .catch(err => { console.log(err); alert('Add Unsuccessful') });
    }
}



// export function addNewRestaurant(food_type, name, address1, address2, city, state, zip, image, phone_number, currentOwnerId) {
//     console.log({food_type, name, address1, address2, city, state, zip, image, phone_number, currentOwnerId});
//     return {
//         type: ADD_NEW_RESTAURANT,
//         payload: axios.post('http://localhost:3000/api/Owners/' + currentOwnerId + '/restaurants', {food_type, name, address1, address2, city, state, zip, image, phone_number})
//                     .then(results => results.data)
//                     .catch(err => console.log(err))
//     };              
// }