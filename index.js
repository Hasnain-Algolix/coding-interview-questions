const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
];

const results = [0, 0, 1];

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i];
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
    updateScores(scores, 3, winningTeam);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(scores, points, team) {
  if (!scores.hasOwnProperty(team)) {
    scores[team] = 0;
  }

  scores[team] += points;
}

const winner = tournamentWinner(competitions, results);
console.log('🚀 - Winner: ', winner);
