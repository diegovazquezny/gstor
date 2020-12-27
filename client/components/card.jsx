import React from 'react';

const Card = ({name, picUrl, addons, voice, num, selectGame}) => {
  return (
    <div className={'card-root'} onClick={selectGame(name)}>
      <div className={'card-title-wrapper'}>
        <p className={'card-title'} id={'card-title-' + num}>{name}</p>
      </div>
      <div className={'card-pic'}>
        <img src={picUrl}></img>
      </div>
      <table>
        <tbody>
          <tr>
            <th>
              <p className={'card-supports'} id={'card-addons-heading-' + num}>Supports addons</p>
            </th>
            <th>
              <p className={'card-supports'} id={'card-addons-value-' + num}>{addons ? 'Y' : 'N'}</p>
            </th>
          </tr>
          <tr>
            <th>
              <p className={'card-supports'} id={'card-voice-heading-' + num}>Supports voice</p>
            </th>
            <th>
              <p className={'card-supports'} id={'card-voice-value-' + num}>{voice ? 'Y' : 'N'}</p>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Card;