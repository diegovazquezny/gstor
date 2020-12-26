const arr = ['starcraft 2', 'call of duty', 'starwars', 'call of duty: modern warfare', 'lord of the rings', 'star trek'];

const search = (query) => {
  const results = [];
  arr.forEach(game => {
    game.split(' ').forEach(word => {
      if (word.toLowerCase() === query.toLowerCase()) return results.push(game);
      if (query.toLowerCase() === word.substr(0, query.length).toLowerCase()) return results.push(game); 
    });
  });
  return results;  
}

console.log(search('DUT'));