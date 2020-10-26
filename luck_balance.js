const luckBalance = (k, contests) => {
  const importantContests = [...contests]
    .filter(([_luck, imp]) => imp)
    .sort((a, b) => b[0] - a[0])
  const unimportantContests = [...contests]
    .filter(([_luck, imp]) => !imp)

  return importantContests.reduce((lb, [luck, _imp], i) => i < k ? lb + luck : lb - luck, 0) +
    unimportantContests.reduce((lb, [luck, _imp]) => lb + luck, 0)
}