import { types } from '../actions/updateOwnerInfoActions';

const defaultState = {
    username: '',
    password: '',
    name: '',
    phonenumber: '',
};

export default function updateOwnerInfoReducer (state = defaultState, action) {
    const { type, payload } = action;

        switch (type) {
            case 'CHANGE_OWNER_INFO': {
                if(payload) {
                    console.log('SUCCESS')
                    window.location.href = `https://zs-delicious-deliveries.herokuapp.com/#/owner/${payload.id}/`;
                    return {
                        ...state,
                        username: '',
                        password: '',
                        name: '',
                        phonenumber: ''
                    };

                } else {
                    return {
                        ...state
                    };
                }
            }

            case 'CHANGE_USERNAME': {
                return {
                    ...state,
                    username: payload
                };
            }

            case 'CHANGE_PASSWORD': {
                return {
                    ...state,
                    password: payload
                };
            }

            case 'CHANGE_NAME': {
                return {
                    ...state,
                    name: payload
                };
            }

            case 'CHANGE_PHONENUMBER': {
                return {
                    ...state,
                    phonenumber: payload
                };
            }
            default: {
                return state;
            }
        }
};