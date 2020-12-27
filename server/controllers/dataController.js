const fs = require("fs");

const readJsonFileSync = (filepath, encoding) => {
  if (typeof (encoding) === 'undefined') encoding = 'utf8';
  const file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}

const getConfig = (file) => readJsonFileSync( __dirname + '/../../' + file);
const data = getConfig('games.json');
const gamesArray = data.data;

module.exports = {
  sendData: (req, res, next) => {
    const page = parseInt(req.query.page);
    gamesArray.sort((a,b) => {
      return a.Order - b.Order || a.Name.localeCompare(b.Name);
    });
    const currentGamesArray = gamesArray.slice((18 * page) - 18, 18 * page);
    const games = currentGamesArray.map(game => {
      return {
        name: game.Name,
        picUrl: '/' + game.ID + '.png',
        addons: game.SupportsAddons,
        voice: game.SupportsVoice
      }
    });
    res.locals.data = games;
    res.locals.total = gamesArray.length;
    res.locals.initialGameInfo = currentGamesArray[0];
    next();
  },
  sendGameData: (req, res, next) => {
    const { name } = req.query;
    let gameData = {};
    for (let i in gamesArray) {
      if (gamesArray[i].Name === name) {
        gameData = gamesArray[i];
        break;
      }
    }
    res.locals.gameData = gameData;
    next();
  },
  search: (req, res, next) => {
    const { q } = req.query; 
    const results = [];
    gamesArray.forEach(game => {
      game.Name.split(' ').forEach(word => {
        if (word.toLowerCase() === q.toLowerCase()) {
          return results.push(game);
        }
        if (q.toLowerCase() === word.substr(0, q.length).toLowerCase()) {
          return results.push(game);
        } 
      });
    });
    const games = results.map(game => {
      return {
        name: game.Name,
        picUrl: '/' + game.ID + '.png',
        addons: game.SupportsAddons,
        voice: game.SupportsVoice
      }
    });
    res.locals.results = games;
    next();
  }
}