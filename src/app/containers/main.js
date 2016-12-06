import { connect } from 'react-redux'
import Main from '../components/Main'
import {requestUser,receiveUser} from '../actions/indexAction'


function mapStateToProps(state) {
    return {
        logged: state.Main.logged,
        marginLeft: state.Main.marginLeft
    }
}




const main = connect(
    mapStateToProps,
)(Main);
export default main;