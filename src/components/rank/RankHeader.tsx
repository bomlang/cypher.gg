export const RankHeader = () => {
  return (
    <div className="font-bold">
      <h2 className="text-2xl my-6 ">랭킹</h2>
      <div className="text-sm  flex gap-1">
        <button className="w-[114px] h-10 rounded  hover:bg-slate-300 focus:bg-red200">
          공식전
        </button>
        <button className="w-[114px] h-10 rounded hover:bg-slate-300 focus:bg-red200">
          투신전(격)
        </button>
        <button className="w-[114px] h-10 rounded  hover:bg-slate-300 focus:bg-red200">
          투신전(파)
        </button>
      </div>
    </div>
  )
}
