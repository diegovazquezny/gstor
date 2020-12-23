import React, { useState } from "react";
import GameCard from './components/gamecard';
import CardContainer from './containers/cardcontainer';
import { connect } from 'react-redux';
//import * as actions from '../src/actions/actions';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

function App(props) {
  return (
    <CardContainer/>
  );
}

export default App;
