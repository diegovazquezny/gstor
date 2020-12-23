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


const CardContainer = (props) => {
  return (
    <div>
      <Card/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);