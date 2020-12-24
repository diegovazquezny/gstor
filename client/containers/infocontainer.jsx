import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
//import * as actions from '../../actions/actions';

const mapDispatchToProps = dispatch => ({
 // updateUserInfo: (data) => dispatch(actions.updateUserInfo(data)),
});

const mapStateToProps = ({
  reducer: { userName, picture, authenticated }
}) => ({ userName, picture, authenticated });

const style = {
  root: {
    
  }
}


const Infocontainer = (props) => {
  return (
    <div className={'info-container'}>
      <h1>World of Warcraft</h1>
      <h2></h2>  
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Infocontainer);