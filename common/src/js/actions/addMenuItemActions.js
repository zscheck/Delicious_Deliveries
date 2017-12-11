import axios from 'axios';

export function updateItemName(value) {
    return {
        type: 'ADD_MENU_ITEM_NAME',
        payload: value
    };
}

export function updateItemPrice(value) {
    return {
        type: 'ADD_MENU_ITEM_PRICE',
        payload: value
    };
}

export function updateItemDescription(value) {
    return {
        type: 'ADD_MENU_ITEM_DESCRIPTION',
        payload: value
    };
}

export function updateItemCategory(value) {
    return {
        type: 'ADD_MENU_ITEM_CATEGORY',
        payload: value
    };
}

export function addNewMenuItem(name, price, description, category, restId) {
    return (dispatch) => {
        axios.get(`https://zs-delicious-deliveries.herokuapp.com/api/Restaurants/${restId}/menus`)
            .then(results => results.data.id)
            .then(res => {
                axios.post(`https://zs-delicious-deliveries.herokuapp.com/api/Menus/${res}/menuItems`, {name, price, description, category})
                .then(response => {
                    alert('Item Added');
                    dispatch({
                        type: 'ADD_NEW_MENU_ITEM',
                        payload: response.data
                    })
                })
                .catch(error => console.log(error))
            })
            .catch(err => console.log(err))
    };              
}







