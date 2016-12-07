import { connect } from 'react-redux'
import Main from '../components/Main'
import {fetchUserIfNeeded} from '../actions/indexAction'


function mapStateToProps(state) {
    return {
        logged: state.User.logged,
        marginLeft: state.Main.marginLeft
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserInfo: () => dispatch(fetchUserIfNeeded())
    }
}
const main = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
export default main;