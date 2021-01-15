/* eslint-disable no-return-assign */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-loop-func */
import https from 'https';

async function requestPage(page) {
  const endpointPage = `https://jsonmock.hackerrank.com/api/countries?page=${page}`;
  return new Promise((resolve, _reject) => {
    https.get(endpointPage, (response) => {
      let rawData = '';
      response.on('data', (chunk) => rawData += chunk);
      response.on('end', () => resolve(JSON.parse(rawData).data));
    });
  });
}

async function getCountryName(code) {
  let page = 1;
  let found;

  while (found !== -1) {
    requestPage(page)
      .then((countries) => found = countries.find((country) => country.alpha2Code === code))
      .then(() => page += 1);
  }

  return found.name;
}

getCountryName('US');
