export const calcKDA = (
  kills: number,
  deaths: number,
  assists: number
): string => {
  if (deaths === 0) {
    return 'Perfect'
  } else {
    const result = ((kills + assists) / deaths).toFixed(2)
    return `${result}:1 평점`
  }
}
