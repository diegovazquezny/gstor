import React, { useState } from "react";
import Search from './components/search';
import CardContainer from './containers/cardcontainer';
import Infocontainer from './containers/infocontainer';
import { connect } from 'react-redux';
//import * as actions from '../src/actions/actions';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

function App(props) {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  
  return (
    <>
      <h1 className={'gstor'}>GStor</h1>
      <h2 className={'gstor-subtitle'}>Find information on your favorite video games</h2>
      <Search/>
      <CardContainer/>
      <Infocontainer/>
    </>
  );
}

export default App;
