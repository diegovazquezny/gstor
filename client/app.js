import React, { useEffect, useState } from "react";
import Search from './components/search';
import CardContainer from './containers/cardcontainer';
import SearchContainer from './containers/searchcontainer';
import Loading from './components/loading';
import { connect } from 'react-redux';
//import * as actions from '../src/actions/actions';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// const mapStateToProps = ({
//   reducer: { page, total }
// }) => ({ page, total });


function App({ loaded }) {
  return (
    <>
      <h1 className={'gstor'}>GStor</h1>
      <h2 className={'gstor-subtitle'}>Find information on your favorite video games</h2>
      <Search/>
      <SearchContainer/>
      <CardContainer/>
    </>
  );
}

export default connect(null, null)(App);