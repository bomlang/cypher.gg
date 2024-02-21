// export const itemRarityCheck = (rarityCode: string, rarityName: string) => {
//   if (rarityCode === '104' && rarityName === '유니크') {
//     return 'border-unique'
//   } else if (rarityCode === '103' && rarityName === '레어') {
//     return 'border-rare'
//   } else if (rarityCode === '102' && rarityName === '언커먼') {
//     return 'border-uncommon'
//   }
// }

export const itemRarityCheck = (
  rarityCode: string,
  rarityName: string
): string => {
  switch (`${rarityCode} & ${rarityName}`) {
    case '104 & 유니크':
      return 'border-unique'
    case '103 & 레어':
      return 'border-rare'
    case '102 & 커먼':
      return 'border-common'
    default:
      return 'border-uncommon'
  }
}
