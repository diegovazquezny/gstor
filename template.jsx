import React from 'react';
import { connect } from 'react-redux';
//import * as actions from '../../actions/actions';

const mapDispatchToProps = dispatch => ({
 // updateUserInfo: (data) => dispatch(actions.updateUserInfo(data)),
});

const mapStateToProps = ({
  reducer: { userName, picture, authenticated }
}) => ({ userName, picture, authenticated });

const GameCard = (props) => {
  return (
    <div>
      hello
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);