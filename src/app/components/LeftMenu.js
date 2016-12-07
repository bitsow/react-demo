/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';



let SelectableList = makeSelectable(List);
const styles = {
    title: {
        cursor: 'pointer',
        color: 'rgb(255, 255, 255)'
    }
};

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            defaultValue: PropTypes.number.isRequired,
        };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

class LeftMenu extends Component {
    render() {
        return (
            <Drawer open={this.props.openLeftMenu && this.props.logged}>
                <AppBar
                    onTouchTap={this.props.onCloseLeftMenuClick}
                    label="Nexusguard"
                    title={<span style={styles.title}>Nexusguard</span>}
                    iconElementLeft={<IconButton><ActionHome /></IconButton>}
                />
                <SelectableList defaultValue={1}>
                    <ListItem value={1} primaryText="OverView" href="/#/"></ListItem>
                    <ListItem value={2} primaryText="Alerts" href="/#/alerts"></ListItem>
                    <ListItem value={3} primaryText="Setting" href="/#/setting"></ListItem>
                </SelectableList>
            </Drawer>
        );
    }
}
LeftMenu.PropTypes = {
    openLeftMenu: PropTypes.bool.isRequired,
    logged: PropTypes.bool.isRequired,
    onCloseLeftMenuClick: PropTypes.func.isRequired
};

export default LeftMenu;
