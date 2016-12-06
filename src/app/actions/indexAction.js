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
        userInfo: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
};

const shouldFetchUser = (state)=> {
    const userInfo = state.User.userInfo;
    if (!userInfo.uid) {
        return true;
    } else {
        return false;
    }
};

const fetchUser =() =>{
    return (dispatch) => {
        dispatch(requestUser());
        return callApi(
            'POST',
            'user',
            {'_id':'5846566172fe44e31f34f6aa'}
        )
            .then((response) => {
                console.log(response);
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((json) => {
                console.log(json);
                dispatch(receiveUser(json));
            })
    }
};

export function fetchUserIfNeeded () {
    console.log(222)
    return (dispatch,getState) => {
        console.log(333)
        if(shouldFetchUser(getState())) {
            return dispatch(fetchUser())
        }
    }
}

