/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
/* eslint-disable no-loop-func */
import https from 'https';

async function getWinner(competition, year) {
  const endpoint = `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`;
  return new Promise((resolve) => {
    https.get(endpoint, (response) => {
      let raw = '';
      response.on('data', (chunk) => { raw += chunk; });
      response.on('end', () => resolve(JSON.parse(raw).data[0].winner));
    });
  });
}

const request = async function (competition, team, year, page, teamNumber) {
  const endpoint = `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team${teamNumber}=${team}&page=${page}`;
  return new Promise((resolve) => {
    https.get(endpoint, (response) => {
      let rawData = '';
      response.on('data', (chunk) => { rawData += chunk; });
      response.on('end', () => resolve(JSON.parse(rawData)));
    });
  });
};

async function totalGoals(competition, team, year) {
  let page = 1;
  let totalPages = 1;
  let total = 0;
  const team1Req = (reqPage) => request(competition, team, year, reqPage, 1);
  const team2Req = (reqPage) => request(competition, team, year, reqPage, 2);

  while (page <= totalPages) {
    const reqGoals = await team1Req(page)
      .then(({ total_pages, data }) => {
        totalPages = total_pages;
        return data;
      })
      .then((games) => games.reduce((total, game) => total + +game.team1goals, 0));
    total += reqGoals;
    page += 1;
  }

  page = 1;

  while (page <= totalPages) {
    const reqGoals = await team2Req(page)
      .then(({ total_pages, data }) => {
        totalPages = total_pages;
        return data;
      })
      .then((games) => games.reduce((total, game) => total + +game.team2goals, 0));
    total += reqGoals;
    page += 1;
  }

  return total;
}
async function getWinnerTotalGoals(competition, year) {
  const winner = await getWinner(competition, year);
  const total = totalGoals(competition, winner, year);

  return total;
}

getWinnerTotalGoals('UEFA Champions League', 2011);
