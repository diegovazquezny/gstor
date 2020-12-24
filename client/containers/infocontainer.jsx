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
      <table>
        <tbody>
          <tr>
            <th>
              Slug
            </th>
            <td>
              starcraft-2
            </td>
          </tr>
          <tr>
            <th>
              File names
            </th>
            <td>
              <ul>
                <li>
                  file 1
                </li>
                <li>
                  file 2
                </li>
                <li>
                  file 3
                </li>
                <li>
                  file 4
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>
              Game detection hints
            </th>
            <td>
              <ul>
                <li>
                  <p>hint path 1</p>
                  <p>hint path 1</p>
                </li>
                <li>
                  <p>hint path 2</p>
                  <p>hint path 2</p>
                </li>
                <li>
                  <p>hint path 3</p>
                  <p>hint path 3</p>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>
              File parsing rules
            </th>
            <td>
              <ul>
                <li>
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
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>
              Category sections
            </th>
            <td>
              <table>
                <tbody>
                  <tr>
                    <th>
                      ID
                    </th>
                    <td>
                      1
                    </td>
                  </tr>
                  <tr>
                    
                  </tr>
                  <th>
                    Game ID
                  </th>
                  <td>
                    1
                  </td>
                  <th>
                    Name
                  </th>
                  <td>
                    Addons
                  </td>
                  <th>
                    Package type
                  </th>
                  <td>
                    1
                  </td>
                  <th>
                    Path
                  </th>
                  <td>
                    {"interface\\addons"}
                  </td>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Infocontainer);