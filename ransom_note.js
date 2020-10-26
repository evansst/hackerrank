// export default function checkMagazine(magazine, note) {
//   for(const word of note) {
//     const i = magazine.findIndex(mWord => mWord === word)
//     if(i === -1) return 'No'
//     magazine.splice(i, 1)
//   }
//   return 'Yes'
// }

export default function checkMagazine(mag, note) {
  const magazine = [...mag];

  return note.reduce((result, noteWord) => {
    const i = magazine.findIndex((magWord) => magWord === noteWord);
    magazine.splice(i, 1);
    return i === -1 ? 'No' : result;
  }, 'Yes');
}
