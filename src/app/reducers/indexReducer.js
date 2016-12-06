import { combineReducers } from 'redux'
import Main from './mainReducer'
import User from './userReducer'

const AlertsApp = combineReducers({
    Main,
    User
});
export default AlertsApp