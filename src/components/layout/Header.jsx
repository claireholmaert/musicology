// image
import Image from '../../../public/assets/images/song.png';

function Header() {
  return (
    <div className="bg-gray flex items-center justify-between px-12 py-2">
        <div className='flex flex-col items-center justify-center'>
            <img className='w-10 h10' src={Image} alt="image d'une note de musique" />
            <h1 id='title' className='text-white font-semibold'>Musicology</h1>
        </div>
    </div>
  )
}

export default Header