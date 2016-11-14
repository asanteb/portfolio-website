import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import Paper from 'material-ui/Paper';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

// From https://github.com/oliviertassinari/react-swipeable-views

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },

  paper: {
    width: '100%',
    height: '1%',
    backgroundColor: '#9E9E9E',
    textAlign: 'center',
    display: 'inline-block'
  }

};



export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <Paper style={styles.paper} zDepth={1} />
        </div>
      </MuiThemeProvider>

    );
  }
}
