export const playTimeCalc = (playTime: number) => {
  const hour = Math.floor(playTime / 3600)
  const min = Math.floor((playTime % 3600) / 60)
  const second = Math.floor(playTime % 60)

  return `${hour}시간 ${min}분 ${second}초`
}
