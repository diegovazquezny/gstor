import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
 updateSearchResults: (results) => dispatch(actions.updateSearchResults(results)),
 updateSearchQuery: (query) => dispatch(actions.updateSearchQuery(query))
});

const Search = ({ updateSearchResults, updateSearchQuery }) => {
  const [showError, setShowError] = useState(false);
  const [showLengthError, setShowLengthError] = useState(false);
  const handleSearch = e => {
    if (e.key === 'Enter') {
      if (!e.target.value) return setShowError(true);
      if (e.target.value.length === 1) return setShowLengthError(true);
      setShowError(false);
      setShowLengthError(false);
      fetch('/api/search?q=' + e.target.value)
        .then(res => res.json())
        .then(data => {
          updateSearchResults(data);
          updateSearchQuery(e.target.value);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className={'search-wrapper'}>
        <input 
          type="text" 
          id="search" 
          name="search" 
          onKeyDown={handleSearch}
          placeholder={'Search for a game'}
        />
        {showError && <p className={'search-error'}>Search cannot be blank</p>}
        {showLengthError && <p className={'search-error'}>Search must be longer than one character</p>}
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Search);