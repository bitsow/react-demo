import React, {Component, PropTypes} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const styles = {
    title: {
        cursor: 'pointer',
        color: 'rgb(255, 255, 255)'
    }
};

class Header extends Component {
    render() {
        // const {logged, openLeftMenu} = this.props;
        return (
            <AppBar
                title={<span style={styles.title}>Bitsow</span>}
                iconElementLeft={this.props.logged ? <IconButton ><NavigationMenu /></IconButton> : <span></span>}
                iconElementRight={this.props.logged ? <Logged {...this.props} /> : <Login />}
                onLeftIconButtonTouchTap={this.props.onOpenLeftMenuClick}
            />
        )
    }
}
Header.propTypes = {
    logged: PropTypes.bool.isRequired,
    onOpenLeftMenuClick: PropTypes.func.isRequired
};

class Login extends Component {
    static muiName = 'FlatButton';
    render() {
        return (
            <FlatButton labelStyle={styles.title} {...this.props} label="Login" />
        );
    }
}
Login.muiName

const Logged = (props) => (
    <IconMenu
        style={styles.iconStyle}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText={props.userInfo.name ? props.userInfo.name : 'User'} />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);
Logged.muiName = 'IconMenu';

export default Header;
