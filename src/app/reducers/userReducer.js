import {REQUEST_USER, RECEIVE_USER} from '../actions/indexAction'

const initialState = {
    isFetching: false,
    didInvalidate: false,
    logged: false,
    userInfo: {}
};

const User = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USER:
            return Object.assign({}, state,{
                isFetching: true,
                didInvalidate: false
            } );
        case RECEIVE_USER:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true,
                userInfo: action.userInfo,
                logged: action.logged
            });
        default:
            return state
    }
};
export default User;