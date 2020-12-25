// const fs = require("fs");

// function readJsonFileSync(filepath, encoding){
//   if (typeof (encoding) == 'undefined'){
//       encoding = 'utf8';
//     }
//   const file = fs.readFileSync(filepath, encoding);
//   return JSON.parse(file);
// }

// function getConfig(file){
//   const filepath = __dirname + '/../../' + file;
//   return readJsonFileSync(filepath);
// }

// json = getConfig('games.json');

module.exports = {
  sendData: (req, res, next) => {
    //res.locals.data = getConfig('games.json');
    res.locals.data = 'data';
    next();
  }
}