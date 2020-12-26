import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
 // updateUserInfo: (data) => dispatch(actions.updateUserInfo(data)),
});

const mapStateToProps = ({
  reducer: { gameInfo }
}) => ({ gameInfo });

const Infocontainer = ({ gameInfo}) => {
  //console.log(gameInfo);
  const fileNames = () => {
    if (!gameInfo.GameFiles) return;
    return gameInfo.GameFiles.map((file, i) => {
      return (
        <li key={`li${i}`}>
          {file.FileName}
        </li>
      )
    });
  }

  const gameDetectionHints = () => {
    if (!gameInfo.GameDetectionHints) return;
    return gameInfo.GameDetectionHints.map((hint, i) => {
      return (
        <React.Fragment key={`gh${i}`}>
          <tr>
            <th>
              Path
            </th>
            <td>
              {hint.HintPath}
            </td>
          </tr>
          <tr>
            <th>
              Key
            </th>
            <td>
              {hint.HintKey}
            </td>
          </tr>
        </React.Fragment>
      );
    });
  }

  const fileParsingRules = () => {
    if (!gameInfo.FileParsingRules) return;
    return gameInfo.FileParsingRules.map((rules, i) => {
      return (
        <React.Fragment key={`fp${i}`}>
          <tr>
            <th>
              Comment strip pattern
            </th>
            <td>{rules.CommentStripPattern}</td>
          </tr>
          <tr>
            <th>
              File extension
            </th>
            <td>{rules.FileExtension}</td>
          </tr>
          <tr>
            <th>
              Inclusion pattern
            </th>
            <td>
              {rules.InclusionPattern}  
            </td>
          </tr>
        </React.Fragment>
      );
    });
  }

  const categorySections = () => {
    if (!gameInfo.CategorySections) return;
    return gameInfo.CategorySections.map((category, i) => {
      return (
        <React.Fragment key={`fp${i}`}>
          <tr>
            <th>
              Extra include pattern
            </th>
            <td>
              {category.ExtraIncludePattern}
            </td>
          </tr>
          <tr>
            <th>
              Initial inclusion pattern
            </th>
            <td>
              {category.InitialInclusionPattern}
            </td>
          </tr>
          <tr>
            <th>
              Name
            </th>
            <td>
              {category.Name}
            </td>
          </tr>
          <tr>
            <th>
              Path
            </th>
            <td>
              {category.Path}
            </td>
          </tr>
        </React.Fragment>
      );
    });
  }

  return (
    <div className={'info-container'} id={'info'}>
      <div className={'info-title-wrapper'}>
        <h1 className={'info-title'}>{gameInfo.Name}</h1>
        <div className={'info-img-wrapper'}>
          <img className={'info-img'} src={'/' + gameInfo.ID + '.png'}></img>
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
              {gameInfo.Slug}
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
                    {gameDetectionHints()}
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
                    {fileParsingRules()}
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
                    {categorySections()}
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
                        {gameInfo.MaxFreeStorage}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Max premium storage
                      </th>
                      <td>
                        {gameInfo.MaxPremiumStorage}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Max file size
                      </th>
                      <td>
                        {gameInfo.MaxFileSize}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Addon settings folder filter
                      </th>
                      <td>
                       {
                          gameInfo.AddOnSettingsFolderFilter 
                            ? gameInfo.AddOnSettingsFolderFilter
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
                          gameInfo.AddOnSettingsStartingFolder 
                            ? gameInfo.AddOnSettingsStartingFolder
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
                          gameInfo.AddOnSettingsFileFilter 
                            ? gameInfo.AddOnSettingsFileFilter
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
                          gameInfo.AddOnSettingsFileRemovalFilter 
                            ? gameInfo.AddOnSettingsFileRemovalFilter
                            : 'N/A'
                        }

                      </td>
                    </tr>
                    <tr>
                      <th>
                        Supports addons
                      </th>
                      <td>
                        {gameInfo.SupportsAddons ? 'true' : 'false'}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Supports voice
                      </th>
                      <td>
                        {gameInfo.SupportsVoice ? 'true' : 'false'}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Order
                      </th>
                      <td>
                        {gameInfo.Order}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Supports notifcations
                      </th>
                      <td>
                        {gameInfo.SupportsNotifications ? 'true' : 'false'}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Bundle assets
                      </th>
                      <td>
                        {gameInfo.BundleAssets ? 'true' : 'false'}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Profiler addon id
                      </th>
                      <td>
                        {gameInfo.ProfilerAddOnId}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Twitch game id
                      </th>
                      <td>
                        {gameInfo.TwitchGameId}
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