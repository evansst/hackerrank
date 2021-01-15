/* eslint-disable no-await-in-loop */
/* eslint-disable max-len */
/* eslint-disable no-loop-func */
import https from 'https';

const request = async function (team, year, page, teamNumber) {
  const endpoint = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team${teamNumber}=${team}&page=${page}`;
  return new Promise((resolve) => {
    https.get(endpoint, (response) => {
      let rawData = '';
      response.on('data', (chunk) => { rawData += chunk; });
      response.on('end', () => resolve(JSON.parse(rawData)));
    });
  });
};

async function totalGoals(team, year) {
  let page = 1;
  let totalPages = 1;
  let totalGoals = 0;
  const team1Req = (reqPage) => request(team, year, reqPage, 1);
  const team2Req = (reqPage) => request(team, year, reqPage, 2);

  while (page <= totalPages) {
    const reqGoals = await team1Req(page)
      .then(({ total_pages, data }) => {
        totalPages = total_pages;
        return data;
      })
      .then((games) => games.reduce((total, game) => total + +game.team1goals, 0));
    totalGoals += reqGoals;
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
    totalGoals += reqGoals;
    page += 1;
  }

  return totalGoals;
}

async function getTotalGoals(team, year) {
  return await totalGoals(team, year);
}
