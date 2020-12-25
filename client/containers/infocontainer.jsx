import React from 'react';
import { connect } from 'react-redux';
import img from '../images/images/65.png';
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
      <div className={'info-title-wrapper'}>
        <h1 className={'info-title'}>Starcraft 2</h1>
        <img className={'info-img'} src={img}></img>
      </div>
      <div className={'info-table'}>
        <table>
          <tbody>
            <tr>
              <th className={'info-table-heading'}>
                Slug
              </th>
              <td>
                starcraft-2
              </td>
            </tr>
            <tr>
              <th className={'info-table-heading'}>
                File names
              </th>
              <td>
                <p>
                  file 1
                </p>
                <p>
                  file 2
                </p>
                <p>
                  file 3
                </p>
                <p>
                  file 4
                </p> 
              </td>
            </tr>
            <tr>
              <th className={'info-table-heading'}>
                Game detection hints
              </th>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        Hint path
                      </th>
                      <td>
                        {'%PROGRAMFILES(x86)%\\World of Warcraft'}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Hint key
                      </th>
                      <td>
                        InstallPath
                      </td>
                    </tr>
                    <p></p>
                    <tr>
                      <th>
                        Hint path
                      </th>
                      <td>
                        {'%PROGRAMFILES(x86)%\\World of Warcraft'}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Hint key
                      </th>
                      <td>
                        InstallPath
                      </td>
                    </tr>
                  </tbody>
                </table>
            
              </td>
            </tr>
            <tr>
              <th className={'info-table-heading'}>
                File parsing rules
              </th>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        Comment strip pattern
                      </th>
                      <td>{"(?s)<!--.*?-->"}</td>
                    </tr>
                    <tr>
                      <th>
                        File extension
                      </th>
                      <td>{".xml"}</td>
                    </tr>
                    <tr>
                      <th>
                        Inclusion pattern
                      </th>
                      <td>
                        {"(?i)<(?:Include|Script)\\s+file=[\"\"']((?:(?<!\\.\\.).)+)[\"\"']\\s*/>"}  
                      </td>
                    </tr>
                  </tbody>
                </table>       
              </td>
            </tr>
            <tr>
              <th className={'info-table-heading'}>
                Category sections
              </th>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        Game ID
                      </th>
                      <td>
                        1
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Name
                      </th>
                      <td>
                        Addons
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Package type
                      </th>
                      <td>
                        1
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Path
                      </th>
                      <td>
                        {"interface\\addons"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <th className={'info-table-heading'}>
                Other
              </th>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        Max free storage
                      </th>
                      <td>
                        0
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Max premium storage
                      </th>
                      <td>
                        0
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Max file size
                      </th>
                      <td>
                        0
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Addon settings folder filter
                      </th>
                      <td>
                        0
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Addon settings starting folder
                      </th>
                      <td>
                        WTF/Account
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Addon settings file filter
                      </th>
                      <td>
                        .lua;AddOns.txt
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Addon settings file removal filter
                      </th>
                      <td>
                        *
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Supports addons
                      </th>
                      <td>
                        true
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Supports voice
                      </th>
                      <td>
                        true
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Order
                      </th>
                      <td>
                        12
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Supports notifcations
                      </th>
                      <td>
                        true
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Bundle assets
                      </th>
                      <td>
                        true
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Profiler addon id
                      </th>
                      <td>
                        43270
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Twitch game id
                      </th>
                      <td>
                        18120
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>  
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Infocontainer);