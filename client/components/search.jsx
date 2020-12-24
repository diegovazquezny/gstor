import React from 'react';
import { connect } from 'react-redux';
//import * as actions from '../../actions/actions';

const mapDispatchToProps = dispatch => ({
 // updateUserInfo: (data) => dispatch(actions.updateUserInfo(data)),
});

const mapStateToProps = ({
  reducer: { userName, picture, authenticated }
}) => ({ userName, picture, authenticated });

const Search = (props) => {

  const handleSearch = e => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
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