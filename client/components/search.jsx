import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
 updateSearchResults: (results) => dispatch(actions.updateSearchResults(results)),
 updateSearchQuery: (query) => dispatch(actions.updateSearchQuery(query))
});

const mapStateToProps = ({
  reducer: { userName, picture, authenticated }
}) => ({ userName, picture, authenticated });

const Search = ({ updateSearchResults, updateSearchQuery }) => {

  const handleSearch = e => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
      fetch('/api/search?q=' + e.target.value)
        .then(res => res.json())
        .then(data => {
          console.log(data)
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
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);