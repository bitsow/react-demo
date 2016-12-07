import {REQUEST_USER, RECEIVE_USER, SET_TOKEN} from '../actions/indexAction'

var token = sessionStorage.token ? sessionStorage.token : '';
const initialState = {
    isFetching: false,
    didInvalidate: false,
    logged: false,
    userInfo: {'X-NXG-Token':token}
};

const User = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USER:
            return Object.assign({}, state,{
                isFetching: true,
                didInvalidate: false
            } );
        case RECEIVE_USER:
            sessionStorage.token = action.userInfo['X-NXG-Token'];
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true,
                userInfo: action.userInfo
            });
        case SET_TOKEN:
            sessionStorage.token = action.token;
            var userInfo = state.userInfo;
            userInfo['X-NXG-Token'] = action.token;
            return Object.assign({}, state, {
                userInfo: userInfo,
                logged: action.logged
            });
        default:
            return state
    }
};
export default User;