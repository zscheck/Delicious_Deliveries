import { types } from '../actions/loginActions';

const INITIAL_STATE = {
    email: '',
    password: '',
    owner: 'false',
    activeOwner: false,
    activeCustomer: false,
    currentOwnerId: '',
    currentCustomerId: '',
    authToken: ''
};

export default function LoginReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.LOGIN_OWNER: {
            if (payload) {
                window.location.href= `https://zs-delicious-deliveries.herokuapp.com/#/owner/${payload.userId}`;
                return {
                    ...state,
                    currentOwnerId: payload.userId,
                    activeOwner: true,
                    authToken: payload.id
                };
            } else {
                return {
                    ...state,
                    password: ''
                };
            }
        }
        case types.LOGIN_CUSTOMER: {
            if (payload) {
                // window.history.go(-1);
                window.location.href= `https://zs-delicious-deliveries.herokuapp.com/#/`;
                return {
                    ...state,
                    currentCustomerId: payload.userId,
                    activeCustomer: true,
                    authToken: payload.id
                }
            } else {
                return {
                    ...state,
                    password: ''
                };
            }
        }

        case (types.OWNER_TOGGLE_LOGIN): {
            return {
                ...state,
                owner: payload
            };
        }

        case (types.UPDATE_USERNAME_LOGIN): {
            return {
                ...state,
                email: payload
            };
        }

        case (types.UPDATE_PASSWORD_LOGIN): {
            return {
                ...state,
                password: payload
            };
        }
        case (types.UPDATE_LOGOUT): {
            return {
                ...state,
                activeOwner: false,
                activeCustomer: false,
                currentOwnerId: '',
                currentCustomerId: ''
            };
        }
        default: {
            return state;
        }
    }
};