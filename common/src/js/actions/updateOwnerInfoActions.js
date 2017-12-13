import axios from 'axios';

export function changeOwnerInfo(name, email, password, phone_number, currentOwnerId) {
    console.log(name, email, password, phone_number, currentOwnerId);
    
return (dispatch) => {
 axios.put(`https://zs-delicious-deliveries.herokuapp.com/api/Owners/${currentOwnerId}`, {name, email, password, phone_number})
    .then(results => {
        dispatch({
            type: 'CHANGE_OWNER_INFO',
            payload: results.data
        })
    })
    .catch(err => console.log(err))


}
}
export function changeUsername(username) {
    return {
        type: 'CHANGE_USERNAME',
        payload: username
    };
}

export function changePassword(password) {
    return {
        type: 'CHANGE_PASSWORD',
        payload: password
    };
}

export function changeName(name) {
    return {
        type: 'CHANGE_NAME',
        payload: name
    };
}

export function changePhonenumber(phonenumber) {
    return {
        type: 'CHANGE_PHONENUMBER',
        payload: phonenumber
    };
}
