function Shimmer(){
    return(
        <>
       <div className="flex flex-wrap gap-20">
       {Array(15).fill('').map(e=><div className="w-[200px] bg-gray-500 border-solid border-2 border-gyay-500 h-[200px]"></div>)}
       </div>
        </>
    )
}
export default Shimmer