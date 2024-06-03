// images
import Image1 from '../../public/assets/images/danseur-grid-dance-1.jpg';
import Image2 from '../../public/assets/images/danseur-grid-dance-2.jpg';
import Image3 from '../../public/assets/images/danseur-grid-dance-3.jpg';

function Tour() {
  return (
    <div className="bg-orange text-white w-full py-16">
        <div className="flex flex-col items-center justify-center py-10 space-y-10">
            <h2 className="font-roboto font-bold text-6xl">DANCE TOUR</h2>
            <p className="w-1/2 font-poppins text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laudantium minima iure, obcaecati magnam pariatur illum suscipit hic nihil animi in quis perspiciatis, repellat nam.</p>
        </div>
        <div className="grid grid-cols-3 gap-16 px-20">
            <div className="w-full">
                <div>
                    <img className='w-full h-[475px]' src={Image1} alt="" />
                </div>
                <div className='bg-gray flex flex-col items-center justify-center p-5 space-y-5 pt-10'>
                    <h3 className='font-oswald text-4xl font-bold'>AMERICA</h3>
                    <p className='font-poppins text-lg'>Lorem ipsum dolor consectetur adipisicing elit. Maxime illo assumenda, magnam vel sint voluptas eum repellat</p>
                </div>
            </div>
            <div className="w-full">
                <div>
                    <img className='w-full h-[475px]' src={Image2} alt="" />
                </div>
                <div className='bg-gray flex flex-col items-center justify-center p-5 space-y-5 pt-10'>
                    <h3 className='font-oswald text-4xl font-bold'>ASIA</h3>
                    <p className='font-poppins text-lg'>Lorem ipsum dolor consectetur adipisicing elit. Maxime illo assumenda, magnam vel sint voluptas eum repellat</p>
                </div>
            </div>
            <div className="w-full">
                <div>
                    <img className='w-full h-[475px]' src={Image3} alt="" />
                </div>
                <div className='bg-gray flex flex-col items-center justify-center p-5 space-y-5 pt-10'>
                    <h3 className='font-oswald text-4xl font-bold'>AUSTRALIA</h3>
                    <p className='font-poppins text-lg'>Lorem ipsum dolor consectetur adipisicing elit. Maxime illo assumenda, magnam vel sint voluptas eum repellat</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tour