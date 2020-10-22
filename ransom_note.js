export default function checkMagazine(magazine, note) {
  for(const word of note) {
    const i = magazine.findIndex(mWord => mWord === word)
    if(i === -1) return 'No'
    magazine.splice(i, 1)
  }
  return 'Yes'
}