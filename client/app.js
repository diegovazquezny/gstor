import React from "react";
import Search from './components/search';
import CardContainer from './containers/cardcontainer';
import SearchContainer from './containers/searchcontainer';
import { connect } from 'react-redux';

function App() {
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