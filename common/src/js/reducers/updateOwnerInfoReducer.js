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
            case types.CHANGE_OWNER_INFO: {
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

            case (types.CHANGE_USERNAME): {
                return {
                    ...state,
                    username: payload
                };
            }

            case (types.CHANGE_PASSWORD): {
                return {
                    ...state,
                    password: payload
                };
            }

            case (types.CHANGE_NAME): {
                return {
                    ...state,
                    name: payload
                };
            }

            case (types.CHANGE_PHONENUMBER): {
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