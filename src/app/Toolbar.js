import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

// SVGs
import Hamburger from 'material-ui/svg-icons/navigation/menu';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


//import Twitter from './svg/twitter.svg';
//import LinkedIn from './svg/linkedin.svg';
//import Github from './svg/github.svg';

import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';

import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: '#ffff',
  },
});

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
    verticalAlign: 'middle',
    backgroundColor: '#607D8B'
  },
  mediummIcon: {
      width: 48, height: 48
  },

  medium:{
      width: 96, height: 96, padding: 24
  },
  toolbarStyle: {
    backgroundColor: '#455A64'
  }
};

export default class newToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange(event, index, value) {
      this.setState({value});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div style={styles.container}>
      <Toolbar style={styles.toolbarStyle}>
        <ToolbarGroup firstChild={true}>
          <IconButton>
            <Hamburger />
          </IconButton>
          <h1>Asante Buil</h1>
        </ToolbarGroup>
        <ToolbarGroup>
          <TextField
            hintText="Search"
          />
        </ToolbarGroup>
        <ToolbarGroup>
            <a href="https://github.com/asantebuil"> <img src='http://i.imgur.com/q3K9GlS.png' width="48" height="48" alt='My Github' /></a>
            <a href="https://twitter.com/yamoshoto"> <img src='http://i.imgur.com/Mbr0yUP.png' width="42" height="42" alt='My Twitter'/></a>
            <a href="https://www.linkedin.com/in/buil-asante-8b4353110"> <img src='http://i.imgur.com/uMK9xpC.png' width="40" height="40" alt='My LinkedIn' />  </a>
          <ToolbarSeparator />
          <RaisedButton label="Blog" primary={true} />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Login" />
            <MenuItem primaryText="Email" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
      </div>
      </MuiThemeProvider>

    );
  }
}
