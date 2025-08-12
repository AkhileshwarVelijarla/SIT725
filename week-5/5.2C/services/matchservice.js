
const Matches = [
  { id: 1, opponent: 'Wombats FC', date: '2025-08-20', venue: 'Main Oval', status: 'Scheduled' },
  { id: 2, opponent: 'Koalas United', date: '2025-08-27', venue: 'City Stadium', status: 'Scheduled' },
  { id: 3, opponent: 'Eagles RFC', date: '2025-09-03', venue: 'North Ground', status: 'Scheduled' }
];


const getAllMatches = () => {
  return Matches;
};

module.exports = {
  getAllMatches
};
