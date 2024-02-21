import { ItemData } from '@/types'
import { itemRarityCheck } from '@/utils'

interface ItemSlotProps {
  item: ItemData
}

export const ItemSlot = ({ item }: ItemSlotProps) => {
  const slotBorderColor = itemRarityCheck(item.rarityCode, item.rarityName)

  return (
    <dd className={`w-[40px] h-[40px] border-2 ${slotBorderColor}`}>
      <img
        src={`https://img-api.neople.co.kr/cy/items/${item.itemId}`}
        alt={item.itemName}
      />
    </dd>
  )
}
