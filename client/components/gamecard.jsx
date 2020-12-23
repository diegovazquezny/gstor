import React from 'react';
import { connect } from 'react-redux';
import img from '../images/images/65.png'
//import * as actions from '../../actions/actions';

const mapDispatchToProps = dispatch => ({
 // updateUserInfo: (data) => dispatch(actions.updateUserInfo(data)),
});

const mapStateToProps = ({
  reducer: { userName, picture, authenticated }
}) => ({ userName, picture, authenticated });

const styles = {
  root: { 
    width: '300px',
    height: '300px',
    border: '1px solid gray',
    boxShadow: '5px 5px #888888',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column'
  },
  topBar: {
    height: '50px',
    width: '100%',
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'column'
  },
  titles: {
    flex: '1',
    justifySelf: 'center',
    textAlign: 'center',
    border: '1px solid black'
  },
  pic: {
    height: '250px',
    width: '100%',
    backgroundColor: 'blue'
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'baseline'
  },
  label: {
    fontSize:'0.8rem', 
    color: 'black',
    flex: '1',
    textAlign: 'center',
    width: '100px',
    border: '1px solid black'
  }
}

const GameCard = (props) => {
  return (
    <div style={styles.root}>
      <div style={styles.topBar}>
        <div style={styles.titleWrapper}>
          <p style={styles.label}>Name</p>
          <p style={styles.label}>Slug</p>
          <p style={styles.label}>Twitch ID</p>
        </div>
        <div style={styles.titleWrapper}>
          <h3 style={styles.titles}>Starcraft 2</h3>
          <h4 style={styles.titles}>starcraft-2</h4>
          <h5 style={styles.titles}>11351</h5>
        </div>
        {/* <div style={styles.titleWrapper}>
          <p style={{fontSize:'0.8rem', color: 'black'}}>Name</p>
          <h4 style={styles.titles}>starcraft-2</h4>
        </div>
        <h5 style={styles.titles}>11351</h5> */}
      </div>
      <div style={styles.pic}>
        <img src={img}></img>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);