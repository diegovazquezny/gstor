import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navigation';
import Card from '../components/card';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  totalPages: (totalGames) => dispatch(actions.totalPages(totalGames))
 });

const mapStateToProps = ({
  reducer: { page, total }
}) => ({ page, total });

const makeCards = (data) => {
  return data.map((game, i) => {
    return ( 
      <Card
        key={`c${i}`} 
        name={game.name} 
        picUrl={game.picUrl}
        addons={game.addons}
        voice={game.voice} 
      />
    )
  });
}

const CardContainer = ({page, totalPages}) => {
  const [cardsArray, setCardsArray] = useState([]);
  const [fetchedGames, setFetchedGames] = useState(false);

  if (!fetchedGames) {
    fetch('/api/data?page=' + page)
      .then(res => res.json())
      .then(data => {
        setCardsArray(makeCards(data.data))
        totalPages(data.total);
        return data;
      })
      .then(data => setFetchedGames(true))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    setFetchedGames(false);
  },[page])

  return (
    <div className={'card-container'}>
      <Navigation/>
      <div className={'card-wrapper'}>
        {fetchedGames && cardsArray}  
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);