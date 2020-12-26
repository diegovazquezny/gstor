import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navigation';
import Card from '../components/card';
import Loading from '../components/loading'; 
import * as actions from '../actions/actions';
import Infocontainer from './infocontainer';

const mapDispatchToProps = dispatch => ({
  totalPages: (totalGames) => dispatch(actions.totalPages(totalGames)),
  getData: () => dispatch(actions.getData()),
  updateGameInfo: (info) => dispatch(actions.updateGameInfo(info))
 });

const mapStateToProps = ({
  reducer: { page, total, gameInfo }
}) => ({ page, total, gameInfo });


const CardContainer = ({ page, totalPages, getData, updateGameInfo, gameInfo }) => {
  const [cardsArray, setCardsArray] = useState([]);
  const [fetchedGames, setFetchedGames] = useState(false);
  const [showGameInfo, setShowGameInfo] = useState(false);

  const selectGame = (name) => (e) => {
    fetch('/api/game?name=' + name)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        updateGameInfo(data);
        setShowGameInfo(true);
        return data;
      })
      .catch(err => console.log(err));
  }
  
  const makeCards = (data) => {
    return data.map((game, i) => {
      return (
        <a href={'#info'} key={`c${i}`} >
          <Card
            selectGame={selectGame}
            name={game.name} 
            picUrl={game.picUrl}
            addons={game.addons}
            voice={game.voice} 
          />
        </a> 
      )
    });
  }

  if (!fetchedGames) {
    fetch('/api/data?page=' + page)
      .then(res => res.json())
      .then(data => {
        setCardsArray(makeCards(data.data))
        totalPages(data.total);
        getData();
        updateGameInfo(data.initialGameInfo);
        setShowGameInfo(true);
        //setGameData(data.initialGameInfo);
        return data;
      })
      .then(data => setTimeout(() => setFetchedGames(true), 500))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    setFetchedGames(false);
  },[page]);

  return (
    <div className={'card-container'}>
      { !fetchedGames && <Loading/> }
      {
        fetchedGames &&
          <>
            <Navigation/>
            <div className={'card-wrapper'}>
              {fetchedGames && cardsArray}  
            </div>
            <div id={'info'}></div>
            {showGameInfo && <Infocontainer gameData={gameInfo}/>}
          </>
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);