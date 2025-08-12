
const matchService = require('../services/matchservice');


exports.getAllMatches = (req, res) => {
  const items = matchService.getAllMatches();
  res.json({
    status: 200,
    data: items,
    message: 'Match data retrieved using service'
  });
};
