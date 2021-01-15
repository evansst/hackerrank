function possibleChanges(usernames) {
  const possible = (username) => (username
    .split('')
    .find((c, i, array) => array.slice(i).find((d) => d.charCodeAt() < c.charCodeAt())) ? 'YES' : 'NO');
  return usernames.map(possible);
}

console.log(possibleChanges(['foo', 'bar', 'baz']));