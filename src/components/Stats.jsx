
function Stats() {
  return (
    <div className="bg-gray text-white">
        <div className="flex flex-col items-center justify-center py-10 space-y-10">
            <h2 className="font-roboto font-bold text-6xl">OUR STATISTICS</h2>
            <p className="w-1/2 font-poppins text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laudantium minima iure, obcaecati magnam pariatur illum suscipit hic nihil animi in quis perspiciatis, repellat nam.</p>
        </div>
        <div className="grid grid-cols-3 px-32 py-40">
            <div className="flex flex-col-reverse items-center">
                <h3 className="text-xl font-poppins mt-2">Club</h3>
                <p className="text-5xl font-bold">1240+</p>
            </div>
            <div className="flex flex-col-reverse items-center">
                <h3 className="text-xl font-poppins mt-2">Active Member</h3>
                <p className="text-5xl font-bold">2000+</p>
            </div>
            <div className="flex flex-col-reverse items-center">
                <h3 className="text-xl font-poppins mt-2">Community</h3>
                <p className="text-5xl font-bold">1.000+</p>
            </div>
        </div>
    </div>
  )
}

export default Stats