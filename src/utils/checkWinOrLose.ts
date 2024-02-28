export const checkWinOrLose = (result: string) => {
  const lowercaseResult = result.toLowerCase()
  if (lowercaseResult === 'win') {
    return true
  } else if (lowercaseResult === 'lose') {
    return false
  }
}
