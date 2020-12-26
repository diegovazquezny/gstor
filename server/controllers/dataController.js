const fs = require("fs");

const readJsonFileSync = (filepath, encoding) => {
  if (typeof (encoding) === 'undefined') encoding = 'utf8';
  const file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}

const getConfig = (file) => readJsonFileSync( __dirname + '/../../' + file);

module.exports = {
  sendData: (req, res, next) => {
    const page = parseInt(req.query.page);
    const data = getConfig('games.json');
    const games = data.data.slice((18 * page) - 18, 18 * page).map(game => {
      return {
        name: game.Name,
        picUrl: '/' + game.ID + '.png',
        addons: game.SupportsAddons,
        voice: game.SupportsVoice
      }
    });
    res.locals.data = games;
    res.locals.total = data.data.length;
    next();
  }
}