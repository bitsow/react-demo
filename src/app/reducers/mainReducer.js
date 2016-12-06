const initialState = {
    openState: false,
    marginLeft: '0px',
    openLeftMenu: false,
    logged: true
};

const Main = (state = initialState, action) => {
    switch (action.type) {
        case 'closeLeftMenu':
            return Object.assign({}, state, {
                openLeftMenu: false,
                marginLeft: '0px'
            });
        case 'openLeftMenu' :
            return Object.assign({}, state, {
                openLeftMenu: true,
                marginLeft: '260px'
            });
        default :
            return state
    }
};
export default Main