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
    width: '150px',
    height: '180px',
    border: '1px solid gray',
    boxShadow: '3px 3px #888888',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(39 34 34)',
    color: 'white',
    margin: '5px'
  },
  titles: {
    display: 'table-cell',
    textAlign: 'center',
    height: '66px',
    margin: 'auto',
    verticalAlign: 'middle'
  },
  supports: {
    padding: '0 10px 0 10px',
    textAlign: 'left',
    fontSize: '0.75rem',
    fontWeight: 'lighter'
  },
  pic: {
    height: '64px',
    width: '64px',
    margin: '5px auto 5px auto'
  },
}

const Card = ({name, picUrl, addons, voice}) => {
  return (
    <div style={styles.root}>
      <div style={{display:'table'}}>
        <p style={styles.titles}>{name}</p>
      </div>
      <div style={styles.pic}>
        <img src={picUrl}></img>
      </div>
      <table>
        <tbody>
          <tr>
            <th>
              <p style={styles.supports}>Supports addons</p>
            </th>
            <th>
              <p style={styles.supports}>{addons ? 'Y' : 'N'}</p>
            </th>
          </tr>
          <tr>
            <th>
              <p style={styles.supports}>Supports voice</p>
            </th>
            <th>
              <p style={styles.supports}>{voice ? 'Y' : 'N'}</p>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);