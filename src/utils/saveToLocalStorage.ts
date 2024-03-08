// 중복 검색된 닉네임을 제거합니다.
const removeNickname = (currentHistory: string[], nickname: string) => {
  const nicknameIndex = currentHistory.indexOf(nickname)
  if (nicknameIndex !== -1) {
    return currentHistory.splice(nicknameIndex, 1)
  }
}

export const saveToLocalStorage = (nickname: string): void => {
  const currentHistory: string[] =
    JSON.parse(localStorage.getItem('searchHistory') as string) || []

  removeNickname(currentHistory, nickname)

  // 변경된 배열을 반영합니다.
  const newHistory = [nickname, ...currentHistory.slice(0, 7)]

  localStorage.setItem('searchHistory', JSON.stringify(newHistory))
}

export const removeToLocalStorageSearchItem = (nickname: string) => {
  const currentHistory: string[] =
    JSON.parse(localStorage.getItem('searchHistory') as string) || []
  removeNickname(currentHistory, nickname)

  const newHistory = [...currentHistory]
  localStorage.setItem('searchHistory', JSON.stringify(newHistory))
}

export const getSearchHistory = () => {
  return JSON.parse(localStorage.getItem('searchHistory') as string) || []
}
