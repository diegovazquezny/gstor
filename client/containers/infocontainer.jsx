import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import img from '../images/images/65.png';
//import * as actions from '../../actions/actions';

const mapDispatchToProps = dispatch => ({
 // updateUserInfo: (data) => dispatch(actions.updateUserInfo(data)),
});

const mapStateToProps = ({
  reducer: { gameInfo }
}) => ({ gameInfo });


const Infocontainer = ({gameData, gameInfo}) => {
  console.log('inside info container', gameInfo.Name);
  //const [draw, setDraw] = useState(true);
  
  const fileNames = () => {
    if (!gameData.GameFiles) return;
    return gameData.GameFiles.map((file, i) => {
      return (
        <li key={`li${i}`}>
          {file.FileName}
        </li>
      )
    })
  }

  useEffect(() => {
    //setDraw(!draw);
    console.log('new game');
  },[gameInfo.Name])

  return (
    <div className={'info-container'} id={'info'}>
      <div className={'info-title-wrapper'}>
        <h1 className={'info-title'}>{gameInfo.Name}</h1>
        <div className={'info-img-wrapper'}>
          <img className={'info-img'} src={'/' + gameData.ID + '.png'}></img>
        </div>
      </div>
      <div className={'info-table'}>
        <table>
          <tbody>
            <tr>
              <th className={'info-table-heading'}>
                Slug
              </th>
              <td>
              {gameData.Slug}
              </td>
            </tr>
            <tr>
              <th className={'info-table-heading'}>
                File names
              </th>
              <td>
                <ul>
                  {fileNames()}
                </ul>
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
                        {gameData.MaxFreeStorage}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Max premium storage
                      </th>
                      <td>
                        {gameData.MaxPremiumStorage}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Max file size
                      </th>
                      <td>
                        {gameData.MaxFileSize}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Addon settings folder filter
                      </th>
                      <td>
                       {
                          gameData.AddOnSettingsFolderFilter 
                            ? gameData.AddOnSettingsFolderFilter
                            : 'N/A'
                        }
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Addon settings starting folder
                      </th>
                      <td>
                        {
                          gameData.AddOnSettingsStartingFolder 
                            ? gameData.AddOnSettingsStartingFolder
                            : 'N/A'
                        }
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Addon settings file filter
                      </th>
                      <td>
                        {
                          gameData.AddOnSettingsFileFilter 
                            ? gameData.AddOnSettingsFileFilter
                            : 'N/A'
                        }
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Addon settings file removal filter
                      </th>
                      <td>
                        {
                          gameData.AddOnSettingsFileRemovalFilter 
                            ? gameData.AddOnSettingsFileRemovalFilter
                            : 'N/A'
                        }

                      </td>
                    </tr>
                    <tr>
                      <th>
                        Supports addons
                      </th>
                      <td>
                        {gameData.SupportsAddons ? 'true' : 'false'}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Supports voice
                      </th>
                      <td>
                        {gameData.SupportsVoice ? 'true' : 'false'}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Order
                      </th>
                      <td>
                        {gameData.Order}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Supports notifcations
                      </th>
                      <td>
                        {gameData.SupportsNotifications ? 'true' : 'false'}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Bundle assets
                      </th>
                      <td>
                        {gameData.BundleAssets ? 'true' : 'false'}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Profiler addon id
                      </th>
                      <td>
                        {gameData.ProfilerAddOnId}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Twitch game id
                      </th>
                      <td>
                        {gameData.TwitchGameId}
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