import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
 firstPage: () => dispatch(actions.firstPage()),
 prevPage: () => dispatch(actions.prevPage()),
 nextPage: () => dispatch(actions.nextPage()),
 lastPage: () => dispatch(actions.lastPage()),
});

const mapStateToProps = ({
  reducer: { page, total }
}) => ({ page, total });

const Loading = ({firstPage, prevPage, nextPage, lastPage, page}) => {
  return (
    <div className={'loading-container'}>
      <h2>Loading</h2>
      <div className={'loading-bar'} ></div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);