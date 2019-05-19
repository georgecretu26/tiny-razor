import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions/reddit';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchSubreddit();
  }
  
  render() {
    console.log(this)
    return (
      <div className="App">
        <header className="App-header">
          here is content
        </header>
      </div>
  )};
}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App);
