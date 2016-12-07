/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component, PropTypes} from 'react';
import { Router, Route, hashHistory } from 'react-router'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../containers/header';
import LeftMenu from '../containers/leftMenu';
import Footer from '../components/Footer';



class Main extends Component {
    // openLeftMenu = () => this.setState({open: true, marginLeft:'255px'});

    // closeLeftMenu = () => this.setState({open: false, marginLeft:'0px'});
    render() {
        this.props.getUserInfo();
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

            <div data-reactroot >
                <Header />
                <LeftMenu />
                <div id="r_box" style={{marginLeft: this.props.marginLeft}}>
                    {this.props.children }

                </div>
                <Footer marginLeft={this.props.marginLeft} />
            </div>
            </MuiThemeProvider>

        );
    }
}

Main.propTypes = {
    logged: PropTypes.bool.isRequired,
    marginLeft: PropTypes.string.isRequired,
    getUserInfo: PropTypes.func.isRequired
};

export default Main;
