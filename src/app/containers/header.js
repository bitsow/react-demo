import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header'
import {openLeftMenuAction} from '../actions/indexAction'

function mapStateToProps(state) {
    return {
        logged: state.Main.logged,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onOpenLeftMenuClick: () => dispatch(openLeftMenuAction)
    }
}


const header = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
export default header;
