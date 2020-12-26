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
  updateGameInfo: (info) => dispatch(actions.updateGameInfo(info)),
 });

const mapStateToProps = ({
  reducer: { searchResults, searchQuery }
}) => ({ searchResults, searchQuery });


const SearchContainer = ({ 
    searchResults, 
    updateGameInfo, 
    searchQuery, 
  }) => {
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const selectGame = (name) => (e) => {
    fetch('/api/game?name=' + name)
      .then(res => res.json())
      .then(data => {
        updateGameInfo(data.gameData);
        setShowGameInfo(true);
        return data;
      })
      .catch(err => console.log(err));
  }

  const makeCards = (data) => {
    //console.log(data.results);
    if (!data.results) return;
    return data.results.map((game, i) => {
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

  useEffect(() => {
    if (!searchResults.results) return;
    setShowSearchResults(true);
    setTotalResults(searchResults.results.length);
  },[JSON.stringify(searchResults.results)]);

  return (
    <div className={'card-container'}>
      {
        showSearchResults &&
          <>
            <h3 className={'search-info'}>
              {`Showing ${totalResults} results for "${searchQuery}"`}
            </h3>
            <div className={'card-wrapper'}>
              {showSearchResults && makeCards(searchResults)}  
            </div>
            {/* <div id={'info'}></div>
            {showGameInfo && <Infocontainer gameData={gameInfo}/>} */}
          </>
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);