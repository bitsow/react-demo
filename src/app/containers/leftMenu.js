import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import LeftMenu from '../components/LeftMenu'
import {closeLeftMenuAction} from '../actions/indexAction'

function mapStateToProps(state) {
    return {
        openLeftMenu: state.Main.openLeftMenu,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCloseLeftMenuClick: () => dispatch(closeLeftMenuAction)
    }
}


const leftMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftMenu);
export default leftMenu;
