const INITIAL_STATE = {
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    image: '',
    food_type: '',
    phone_number: ''
};

export default function AddRestaurantReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_NEW_RESTAURANT': {
            console.log(1,payload)
            if (payload) {
                return {
                    ...state,
                    name: '',
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    zip: '',
                    image: '',
                    food_type: '',
                    phone_number: ''
                };
            } else {
                return {
                    ...state
                };
            }
        }

        case 'FOOD_TOGGLE': {
            return {
                ...state,
                food_type: payload,
            };
        }

        case 'ADD_RESTAURANT_NAME': {
            return {
                ...state,
                name: payload,
            };
        }

        case 'ADD_ADDRESS1': {
            return {
                ...state,
                address1: payload,
            };
        }

        case 'ADD_ADDRESS2': {
            return {
                ...state,
                address2: payload
            };
        }

        case 'ADD_CITY': {
            return {
                ...state,
                city: payload
            };
        }

        case 'ADD_STATE': {
            return {
                ...state,
                state: payload
            };
        }

        case 'ADD_ZIP': {
            return {
                ...state,
                zip: payload
            };
        }

        case 'ADD_IMAGE': {
            return {
                ...state,
                image: payload
            };
        }

        case 'ADD_PHONE_NUMBER': {
            return {
                ...state,
                phone_number: payload
            };
        }

        default: {
            return state;
        }
    }
};