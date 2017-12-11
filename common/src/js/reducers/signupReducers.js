import { types } from '../actions/signupActions';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    phone_number: '',
    owner: 'false'
};

export default function SignUpReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case types.ADD_OWNER: {
            if (payload) {
                window.location.href= 'https://zs-delicious-deliveries.herokuapp.com/#/login';
                return {
                    ...state,
                    name: payload.name,
                    email: payload.email,
                    password: payload.password,
                    phone_number: payload.phone_number,
                    owner: payload.owner
                };
            } else {
                return {
                    ...state
                };
            }
            

        }

        case types.ADD_CUSTOMER: {
            if (payload) {
                window.location.href= 'https://zs-delicious-deliveries.herokuapp.com/#/login';
                return {
                    ...state,
                    name: payload.name,
                    email: payload.email,
                    password: payload.password,
                    phone_number: payload.phone_number,
                    owner: payload.owner
                };
            } else {
                return {
                    ...state
                };
            }
        }

        case (types.OWNER_TOGGLE): {
            return {
                ...state,
                owner: payload
            }
        }

        case (types.UPDATE_NAME): {
            return {
                ...state,
                name: payload
            }
        }
        

        case (types.UPDATE_PASSWORD): {
            return {
                ...state,
                password: payload
            }
        }

        case (types.UPDATE_PHONENUMBER): {
            return {
                ...state,
                phone_number: payload
            }
        }

        case (types.UPDATE_USERNAME): {
            return {
                ...state,
                email: payload
            }
        }
        default: {
            return state;
        }

    }

};