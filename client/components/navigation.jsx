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

// TODO: total is hardcoded. needs to come from reducer

const Navigation = ({firstPage, prevPage, nextPage, lastPage, page}) => {
  return (
    <div className={'nav-container'}>
      <div className={'nav-item-first'} onClick={firstPage}>
        {'<< First'}    
      </div>
      <div className={'nav-item-prev'} onClick={prevPage}>
        {'< Prev'}    
      </div>
      <div className={'nav-pages'}>
        {`Page ${page} of ${'15'}`}    
      </div>
      <div className={'nav-item-next'} onClick={nextPage}>
        {'Next >'}    
      </div>
      <div className={'nav-item-last'} onClick={lastPage}>
        {'Last >>'}    
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);