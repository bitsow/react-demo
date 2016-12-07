import callApi from '../middleware/api'
export const closeLeftMenuAction = {type: 'closeLeftMenu'};
export const openLeftMenuAction = {type: 'openLeftMenu'};


export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

const requestUser = () => {
    return {
        type: REQUEST_USER
    }
}

const receiveUser = (json)=> {
    return {
        type: RECEIVE_USER,
        userInfo: json,
        receivedAt: Date.now()
    }
};

export const SET_TOKEN = 'SET_TOKEN';
const setToken = (token, logged)=> {
    return {
        type: SET_TOKEN,
        token: token,
        logged: logged
    }
};

const shouldFetchUser = (state)=> {
    const userInfo = state.User.userInfo;
    if (!userInfo._id && userInfo['X-NXG-Token'] != '') {
        return true;
    } else {
        return false;
    }
};

const fetchUser =(token) =>{
    return (dispatch) => {
        dispatch(requestUser());
        return callApi(
            'GET',
            'user',
            {},
            token,
        )
            .then(
                (json) => {
                    dispatch(receiveUser(json));
                },
                (json)=>{
                    console.log("err");
                    console.log(json)
                })
    }
};

const getToken = (state) => {
  return state.User.userInfo['X-NXG-Token'] ? state.User.userInfo['X-NXG-Token'] : '';
};

export function fetchUserIfNeeded () {
    return (dispatch,getState) => {
        if(shouldFetchUser(getState())) {
            var token = getToken(getState());
            return dispatch(fetchUser(token))
        }
    }
}

export function login() {
    return (dispatch) => {
        return callApi('GET','login')
            .then(
                (json) => {
                    return dispatch(setToken(json.token, true))
                },
                (json) => {
                    console.log('err');
                    console.log(json);
                }
            )
    }
}

