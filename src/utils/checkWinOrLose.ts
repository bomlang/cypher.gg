export const checkWinOrLose = (result: string) => {
  const lowercaseResult = result.toLowerCase()
  if (lowercaseResult === 'win') {
    return '승리'
  } else if (lowercaseResult === 'lose') {
    return '패배'
  }
}
