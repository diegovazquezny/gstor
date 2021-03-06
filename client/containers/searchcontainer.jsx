import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  updateGameInfo: (info) => dispatch(actions.updateGameInfo(info)),
 });

const mapStateToProps = ({
  reducer: { searchResults, searchQuery, hideSearch }
}) => ({ searchResults, searchQuery, hideSearch });


const SearchContainer = ({ 
    searchResults, 
    updateGameInfo, 
    searchQuery,
    hideSearch 
  }) => {
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const selectGame = (name) => (e) => {
    fetch('/api/game?name=' + name)
      .then(res => res.json())
      .then(data => {
        updateGameInfo(data.gameData);
        return data;
      })
      .catch(err => console.log(err));
  }

  const makeCards = (data) => {
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
            num={i+10000} 
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

  useEffect(()=>{
    if (hideSearch) setShowSearchResults(false);
  },[hideSearch]);

  return (
    <>
      {
        showSearchResults &&
          <>
            <h3 className={'search-info'}>
              {`Showing ${totalResults} results for "${searchQuery}"`}
            </h3>
            <div className={'card-wrapper'}>
              {makeCards(searchResults)}
            </div>
            <br/>
            <br/>
            <br/>
          </>
      }
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);