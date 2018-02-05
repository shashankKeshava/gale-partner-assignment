import React, {Component} from 'react';
import './App.css';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {updateCart} from '../actions'
import AppBar from 'material-ui/AppBar';

import Cards from '../components/cards'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
         <AppBar className="AppBar" title="GALE Partners Assignment"/>
          <Cards items={this.props.data}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapToStateToProps = state => {
  return {data: state.data, cart: state.cart}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCart
}, dispatch)

const appVisibility = connect(mapToStateToProps, mapDispatchToProps)(App);

export default appVisibility;
